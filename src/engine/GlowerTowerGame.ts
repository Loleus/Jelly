import * as THREE from "three";
import { Sky } from "three/addons/objects/Sky.js";
import { Water } from "three/addons/objects/Water.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { TowerCullingManager } from "./culling";
import {
  CollapsingStairDef,
  DoorDef,
  LeverDef,
  TogglableStairDef,
  ElevatorDef,
  EngineConfig,
  GameStatus,
  GemDef,
  HazardDef,
  Particle,
  StairDef,
  SpringDef,
} from "./gameTypes";
import defaultLevelJson from "../levels/lvl_0001.level.json";
import { loadLevel } from "../levels/loadLevel";
import type { TowerLevelDefinition } from "../levels/levelTypes";
import {
  createElevatorMaterial,
  createElevatorRailMaterial,
  createEnemyMaterial,
  createStairsMaterial,
  createTowerMaterial,
  createCollapsingStairMaterial,
  createTogglableStairMaterial,
  createDoorFrameMaterial,
} from "../gameTextures";
import { soundEngine } from "../soundEngine";

export const RENDER_WIDTH = 640;
export const RENDER_HEIGHT = 640;
export const ASPECT_RATIO = RENDER_WIDTH / RENDER_HEIGHT; // 1:1

// Bazowe parametry kadru (desktop 4:3). Używane do wyliczenia pionowego FOV
// przy innych proporcjach, tak aby poziome pole widzenia nigdy się nie zawężało.
export const BASE_VERTICAL_FOV = 38;
export const MAX_VERTICAL_FOV = 64;

export interface ResolutionProfile {
  id: string;
  label: string;
  width: number;
  height: number;
}

/**
 * Natywne rozdzielczości renderowania. Canvas nigdy nie renderuje w rozdzielczości
 * ekranu — zawsze w jednej z poniższych, a CSS tylko ją skaluje z zachowaniem proporcji.
 */
export const RESOLUTION_PROFILES: Record<string, ResolutionProfile> = {
  desktop: { id: "desktop", label: "640×360 · 16:9", width: 640, height: 360 },
  tabletPortrait: { id: "tabletPortrait", label: "480×640 · 3:4", width: 480, height: 640 },
  phonePortrait: { id: "phonePortrait", label: "400×660 · 10:16", width: 400, height: 660 },
  phoneLandscape: { id: "phoneLandscape", label: "640×360 · 16:9", width: 640, height: 360 },
};

/** Dobiera natywną rozdzielczość na podstawie rozmiaru okna przeglądarki. */
export function pickResolutionProfile(vw: number, vh: number): ResolutionProfile {
  const isPortrait = vh >= vw;
  const shortSide = Math.min(vw, vh);

  if (isPortrait) {
    // Telefon w pionie → wysoki kadr, świetny do wspinaczki po wieży
    if (shortSide < 620) return RESOLUTION_PROFILES.phonePortrait;
    // Tablet w pionie → łagodniejsze 3:4
    return RESOLUTION_PROFILES.tabletPortrait;
  }

  // Na desktopie i mobile landscape domyślnie używamy szerokiego 16:9 (640x360)
  return RESOLUTION_PROFILES.desktop;
}

export const CIRCUMFERENCE_STEPS = 24;
export const STEP_HEIGHT = 1;
export const PLAYER_HALF_WIDTH = 0.16; // Full body collision: head, torso, legs
export const WALK_SPEED = 3.6;
export const JUMP_SPEED = 11.2;
export const GRAVITY = 28.5;
export const TOWER_RADIUS = 6;
export const PLATFORM_THICKNESS = 0.35;
export const PLATFORM_DEPTH = 2.2;
export const TAU = Math.PI * 2;
export const PLAYER_STAND_RADIUS = TOWER_RADIUS + PLATFORM_DEPTH * 0.5;
export const FIRST_STEP_CENTER = 0.5;
export const TOWER_ANGLE_OFFSET = -(FIRST_STEP_CENTER / CIRCUMFERENCE_STEPS) * TAU;
export const PLAYER_FOOT_OFFSET = 0.52;

// Fixed Physics Timestep: 60Hz (Physics tempo remains 100% constant even if FPS drops)
export const FIXED_DT = 1 / 60;
export const MAX_ACCUMULATOR = 0.25;

export const DEFAULT_LEVEL = loadLevel(defaultLevelJson);

export const wrapValue = (value: number, size: number): number => {
  const wrapped = value % size;
  return wrapped < 0 ? wrapped + size : wrapped;
};

export const stepToTheta = (stepIndex: number): number =>
  (stepIndex / CIRCUMFERENCE_STEPS) * TAU + TOWER_ANGLE_OFFSET;

export const overlapsWrapped = (
  playerX: number,
  halfWidth: number,
  platformX: number,
  platformWidth: number
): boolean => {
  const tries = [playerX - CIRCUMFERENCE_STEPS, playerX, playerX + CIRCUMFERENCE_STEPS];
  return tries.some(
    (px) => px + halfWidth > platformX && px - halfWidth < platformX + platformWidth
  );
};

/**
 * Indeks schodka, na którym leży dany punkt obwodu.
 * Schodek zajmuje przedział [n, n+1), więc podłoga daje jego numer.
 */
export const stairIndexAt = (x: number): number =>
  Math.floor(wrapValue(x, CIRCUMFERENCE_STEPS));

/** Środek schodka o danym indeksie, w krokach obwodu. */
export const stairCenterX = (stepIndex: number): number =>
  wrapValue(stepIndex, CIRCUMFERENCE_STEPS) + 0.5;

const wrappedStepDistance = (a: number, b: number): number => {
  const direct = Math.abs(a - b);
  return Math.min(direct, CIRCUMFERENCE_STEPS - direct);
};

/** Schodek z policzoną wcześniej geometrią i macierzami dla instancingu. */
interface PreparedStair extends StairDef {
  theta: number;
  radial: THREE.Vector3;
  tangLength: number;
  defaultMatrix: THREE.Matrix4;
  culledMatrix: THREE.Matrix4;
}

export class GlowerTowerGame {
  private host: HTMLElement;
  public readonly level: TowerLevelDefinition;
  public readonly towerHeight: number;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  public camera!: THREE.PerspectiveCamera;
  private culler = new TowerCullingManager();
  private sceneMode: "menu" | "play" = "menu";
  private menuCamAngle = 0;

  // Wszystkie schodki (również te tworzące szerokie platformy) + instancing
  private staticStairs: PreparedStair[] = [];
  private stairsInstancedMesh!: THREE.InstancedMesh;

  // World Elements
  private towerMesh!: THREE.Mesh;
  private floorMesh!: THREE.Mesh; // Water
  private sky!: Sky;
  private water!: Water;
  private composer!: EffectComposer;
  private bloomPass!: UnrealBloomPass;
  private sun = new THREE.Vector3();
  private waterLevel = -1.2;
  private wasInWater = false;
  private waterEnterCooldown = 0;
  private topRing!: THREE.Mesh;
  private summitCrown!: THREE.Group;
  private waterRipples: THREE.Mesh[] = [];
  private pmremGenerator!: THREE.PMREMGenerator;

  // Entities
  private elevators: ElevatorDef[] = [];
  private gems: GemDef[] = [];
  private springs: SpringDef[] = [];
  private hazards: HazardDef[] = [];
  private doors: DoorDef[] = [];
  private checkpoints: { id: number; floor: number; x: number; y: number; activated: boolean; mesh: THREE.Group }[] = [];
  private activeCheckpoint = 0;
  private doorCooldown = 0;
  private collapsingStairs: CollapsingStairDef[] = [];
  private levers: LeverDef[] = [];
  private togglableStairs: TogglableStairDef[] = [];
  private leverCooldown = 0;

  // Player Meshes
  private playerGroup!: THREE.Group;
  private playerBody!: THREE.Group;
  private leftArm!: THREE.Group;
  private rightArm!: THREE.Group;
  private leftLeg!: THREE.Group;
  private rightLeg!: THREE.Group;
  private leftLowerLeg!: THREE.Group;
  private rightLowerLeg!: THREE.Group;
  private leftFoot!: THREE.Mesh;
  private rightFoot!: THREE.Mesh;
  private leftEye!: THREE.Mesh;
  private rightEye!: THREE.Mesh;
  private torso!: THREE.Mesh;
  private slimeTopDrop!: THREE.Mesh;
  private playerLight!: THREE.PointLight;

  // Particles
  private particles: Particle[] = [];
  private particlePointsMesh!: THREE.Points;
  private particleGeoPositions!: Float32Array;
  private particleGeoColors!: Float32Array;
  private maxParticles = 250;

  // Lights
  private sunLight!: THREE.DirectionalLight;
  private hemiLight!: THREE.HemisphereLight;

  // Game Physics State
  public playerState = {
    x: FIRST_STEP_CENTER,
    y: 0.5,
    vx: 0,
    vy: 0,
    grounded: true,
    coyoteTimer: 0,
    jumpBufferTimer: 0,
    facingRight: true,
    rideElevator: -1,
    status: "running" as GameStatus,
    walkCycle: 0,
    score: 0,
    gemsCollected: 0,
    totalGems: 0,
    jumpCount: 0,
    elapsedTime: 0,
    camLeadAngle: 0, // Smooth camera lead offset angle (ahead of player while walking)
    smoothCamY: 0.5, // Smooth vertical camera target (lagging behind jump velocity changes)
    idleTimer: 0, // Seconds since the player last moved horizontally
    facingYaw: 0, // Smoothly interpolated yaw offset around vertical axis (radians)
    jiggle: 0, // Odkształcenie galarety: <0 = spłaszczenie, >0 = rozciągnięcie
    jiggleVel: 0, // Prędkość sprężyny galarety
    crownFlash: 0, // Rozbłysk diamencika po złapaniu dużego diamentu (sekundy)
    enemyHitCooldown: 0,
    // Po trafieniu ignorujemy tylko schodek, na którym stał Jelly —
    // fizyka może wtedy złapać windę lub niższy schodek podczas realnego spadania.
    knockdownFloorY: null as number | null,
    currentStairTopY: null as number | null,
  };

  public input = {
    left: false,
    right: false,
    up: false,
    down: false,
    jumpQueued: false,
    doorQueued: false,
  };

  public config: EngineConfig = {
    cullingEnabled: true,
    simulatedFpsThrottle: 0,
    filterMode: "crisp",
    renderScale: 1,
    soundMuted: false,
  };

  // Fixed Timestep Loop State
  private accumulator = 0;
  private lastTime = performance.now();
  private animFrameId = 0;
  private lastThrottleTime = performance.now();

  // Periodic UI state update without performance measurements.
  private playerHudTimer = 0;

  // Callbacks
  public onPlayerStateUpdate?: (playerState: typeof this.playerState) => void;
  public onGameStatusChange?: (status: GameStatus) => void;

  constructor(host: HTMLElement, level: TowerLevelDefinition = DEFAULT_LEVEL) {
    this.host = host;
    this.level = level;
    this.towerHeight = level.towerHeight;
    this.playerState.x = level.start.x;
    this.playerState.y = level.start.y;
    this.playerState.smoothCamY = level.start.y;
    this.playerState.idleTimer = 2;
    this.playerState.facingYaw = Math.atan2(
      Math.sin(stepToTheta(level.start.x)),
      Math.cos(stepToTheta(level.start.x))
    );
    this.initThree();
    this.buildWorld();
    this.buildPlayer();
    this.buildParticleSystem();
    this.setupEvents();
    this.startLoop();
  }

  private initThree() {
    this.scene = new THREE.Scene();
    this.scene.background = null;
    // Mgła biała
    this.scene.fog = new THREE.Fog("#ffffff", 150, 700);

    this.camera = new THREE.PerspectiveCamera(BASE_VERTICAL_FOV, ASPECT_RATIO, 0.1, 20000);
    this.camera.position.set(0, 5, 14);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
    });
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(RENDER_WIDTH, RENDER_HEIGHT, false);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.shadowMap.autoUpdate = true;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.9;

    const canvas = this.renderer.domElement;
    canvas.id = "game-canvas-640x640";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.objectFit = "cover";
    canvas.style.display = "block";
    this.applyCanvasFilter();
    this.host.appendChild(canvas);

    this.hemiLight = new THREE.HemisphereLight("#bff1ff", "#34697b", 0.66);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight("#ffe999", 1.9);
    // Pozycja będzie ustawiona w buildWorld() na podstawie elevation/azimuth
    // (placeholder – będzie nadpisane)
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera = new THREE.OrthographicCamera(-120, 120, 120, -120, 0.1, 450);
    this.sunLight.shadow.bias = -0.0005;
    this.sunLight.shadow.normalBias = 0.02;
    this.sunLight.shadow.radius = 0.4;
    this.sunLight.target.position.set(0, 5, 0);
    this.scene.add(this.sunLight.target);
    this.sunLight.shadow.camera.position.copy(this.sunLight.position);
    this.sunLight.shadow.camera.lookAt(this.sunLight.target.position);
    this.sunLight.shadow.camera.updateProjectionMatrix();
    this.sunLight.shadow.needsUpdate = true;
    this.scene.add(this.sunLight);

    // Bloom – tylko słońce, delikatny – zmniejszony żeby nie przejaśniać wieży i slime'a
    const renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(RENDER_WIDTH, RENDER_HEIGHT),
      0.01,
      0.0,
      0.24
    );
    const outputPass = new OutputPass();
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(outputPass);
  }

  public applyCanvasFilter() {
    const canvas = this.renderer.domElement;
    if (this.config.filterMode === "crisp") {
      canvas.style.imageRendering = "pixelated";
      (canvas.style as unknown as { imageRendering: string }).imageRendering = "crisp-edges";
    } else {
      canvas.style.imageRendering = "auto";
    }
  }

  private buildWorld() {
    // ============================================================
    // 1. SKY – Sky (WebGL) – WebGL version of SkyMesh from webgpu_ocean
    //    Original example elevation 2° – too low/dark. Here elevation 26°
    //    for Greek afternoon 17:00 – still bright, warm tone.
    //    Chmury: wolne, nie za gęste.
    // ============================================================
    this.sky = new Sky();
    this.sky.scale.setScalar(10000);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);

    const skyUniforms = (this.sky as any).material.uniforms;

    // Bardziej zachodowe słońce: ciepły czerwony horyzont po jednej stronie,
    // chłodny szaroniebieski / błękit po przeciwnej stronie.
    // Elevation 45° – cienie pod kątem 45 stopni
    const elevation = 45;
    const azimuth = 220;

    const phi = THREE.MathUtils.degToRad(90 - elevation);
    const theta = THREE.MathUtils.degToRad(azimuth);
    this.sun.setFromSphericalCoords(1, phi, theta);

    skyUniforms["turbidity"].value = 6.5;
    skyUniforms["rayleigh"].value = 2.0;
    skyUniforms["mieCoefficient"].value = 0.008;
    skyUniforms["mieDirectionalG"].value = 0.85;
    skyUniforms["sunPosition"].value.copy(this.sun);

    if (skyUniforms["cloudCoverage"]) {
      skyUniforms["cloudScale"].value = 0.00011;
      skyUniforms["cloudSpeed"].value = 0.0000055;
      skyUniforms["cloudCoverage"].value = 0.12;
      skyUniforms["cloudDensity"].value = 0.22;
      skyUniforms["cloudElevation"].value = 0.32;
      skyUniforms["time"].value = 0;
    }

    if (skyUniforms["exposure"] !== undefined) {
      skyUniforms["exposure"].value = 0.28;
    }

    // Synchronizuję pozycję sunLight z tym samym elevation/azimuth
    const sunDistance = 55;
    this.sunLight.position.copy(this.sun).multiplyScalar(sunDistance);
    
    this.sunLight.target.position.set(0, 5, 0);
    this.scene.add(this.sunLight.target);
    this.sunLight.shadow.camera.lookAt(this.sunLight.target.position);
    this.sunLight.shadow.camera.updateProjectionMatrix();
    this.sunLight.shadow.needsUpdate = true;
    (this.sunLight as any).color = new THREE.Color("#ffc499");

    this.hemiLight.color = new THREE.Color("#b0d0f0");
    this.hemiLight.groundColor = new THREE.Color("#405080");

    // PMREM for reflections – opcjonalnie, żeby nie psuło nieba gdy renderer niegotowy
    try {
      this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
      const sceneEnv = new THREE.Scene();
      sceneEnv.add(this.sky.clone());
      const renderTarget = this.pmremGenerator.fromScene(sceneEnv);
      this.scene.environment = null;
      this.scene.environmentIntensity = 0;
      renderTarget.dispose();
    } catch {
      // SkyMesh nadal renderuje się jako tło, nawet bez env map
    }

    // ============================================================
    // 2. OCEAN – Water (WebGL) – WebGL version of WaterMesh
    //    Reference: webgl_shaders_ocean.html & webgpu_ocean.html
    //    Water reacts to player – splash + ripple ring.
    // ============================================================
    const waterGeometry = new THREE.PlaneGeometry(12000, 12000);

    // Woda – dokładnie jak w three.js ocean example
    const waterNormals = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/waternormals.jpg",
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }
    );
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

    this.water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: waterNormals,
      sunDirection: this.sun.clone().normalize(),
      sunColor: 0x6b5d47,
      waterColor: 0x1a2d3a,
      distortionScale: 1.0,
      fog: this.scene.fog !== undefined,
    });

    // ODBICIE FAL OD WIEŻY — fale rozchodzą się od ściany wieży na zewnątrz.
    // Nie zmieniamy bazowego szumu (żeby nie było "żaluzji"), tylko dodajemy
    // nieregularne zaburzenie zależne od odległości i kąta wokół wieży.
    this.water.material.onBeforeCompile = (shader) => {
      shader.uniforms.uTowerRadius = { value: TOWER_RADIUS };

      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `
        uniform float uTowerRadius;
        void main() {
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "vec4 noise = getNoise( worldPosition.xz * size );",
        `
        vec4 noise = getNoise( worldPosition.xz * size );

        // Interakcja z wieżą: fale odbite biegną promieniście od ściany.
        // Używamy gładkich współrzędnych wektorowych (outward.x/y) zamiast atan(),
        // co zapobiega powstawaniu prostej linii / szwu na osi ujemnej.
        vec2 toTower = worldPosition.xz;
        float distToTower = length(toTower);
        vec2 outward = toTower / max(distToTower, 0.001);

        if (distToTower > uTowerRadius && distToTower < uTowerRadius + 26.0) {
          float d = distToTower - uTowerRadius;

          // Płynna modulacja kątowa 360° oparta na wektorze kierunkowym (bez szwów i gałęzi)
          float dirVar = outward.x * 0.8 + outward.y * 0.6;
          float dirVar2 = outward.x * outward.y * 2.0;

          float decay = exp(-d * 0.18);
          float freq = 1.7 + 0.35 * dirVar;
          float refl = sin(d * freq - time * 2.6 + dirVar2 * 1.5)
                     + 0.4 * sin(d * 2.7 - time * 4.1 - dirVar * 2.0);
          noise.xy += outward * refl * 0.38 * decay;

          // Kipiel tuż przy murze — chaotyczne, drobne zmarszczki
          float chopDecay = exp(-d * 0.75);
          float chop = sin(d * 8.0 - time * 6.5 + dirVar * 2.5)
                     * sin(worldPosition.x * 1.8 - worldPosition.z * 1.4 + time * 4.5);
          vec2 tangential = vec2(-outward.y, outward.x);
          noise.xy += tangential * chop * 0.25 * chopDecay;
        }
        `
      );
    };

    this.water.rotation.x = -Math.PI / 2;
    this.water.position.y = this.waterLevel;
    this.floorMesh = this.water as unknown as THREE.Mesh;
    this.floorMesh.frustumCulled = false;
    this.floorMesh.receiveShadow = true;
    this.scene.add(this.water);

    // 3. Main Solid Tower Shaft (Continuous, no gaps, no flickering chunks)
    const towerTotalHeight = this.towerHeight + 6;
    const towerWallRadius = TOWER_RADIUS + 0.12;

    this.towerMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(TOWER_RADIUS, TOWER_RADIUS + 0.18, towerTotalHeight, 48, 1, false),
      createTowerMaterial(undefined, towerWallRadius, towerTotalHeight)
    );
    // Górna krawędź walca zrównuje się z poziomem 48 / towerHeight.
    // Dla wysokości towerHeight + 6 środek wypada na towerHeight / 2 - 3.
    this.towerMesh.position.y = this.towerHeight / 2 - 3;
    this.towerMesh.receiveShadow = true;
    this.towerMesh.castShadow = true;
    this.towerMesh.frustumCulled = false; // Always render the central tower core
    this.scene.add(this.towerMesh);

    // Półprzeźroczysta piana obmywająca wieżę — widać przez nią mur wieży.
    const foamRing = new THREE.Mesh(
      new THREE.TorusGeometry(TOWER_RADIUS + 0.32, 0.06, 10, 48),
      new THREE.MeshStandardMaterial({
        color: "#d6ecff",
        roughness: 0.92,
        transparent: true,
        opacity: 0.18,
        depthWrite: false,
      })
    );
    foamRing.rotation.x = Math.PI / 2;
    foamRing.position.y = this.waterLevel + 0.04;
    foamRing.renderOrder = 1;
    this.scene.add(foamRing);

    // 4. Summit Golden Ring & Beacon.
    this.topRing = new THREE.Mesh(
      new THREE.TorusGeometry(TOWER_RADIUS + 1.8, 0.25, 14, 64),
      new THREE.MeshStandardMaterial({
        color: "#fbbf24",
        emissive: "#d97706",
        emissiveIntensity: 0.18,
        roughness: 0.2,
        metalness: 0.8,
      })
    );
    // Obręcz pozostaje na swojej poprzedniej wysokości — została tylko poszerzona.
    this.topRing.position.y = this.towerHeight + 0.6;
    this.topRing.rotation.x = Math.PI / 2;
    this.topRing.castShadow = true;
    this.scene.add(this.topRing);

    this.summitCrown = new THREE.Group();
    // Kopuła i diament są podniesione razem z końcem wieży do poziomu 48.
    this.summitCrown.position.y = this.towerHeight;

    // Lekka kopuła glossy zamiast MeshPhysicalMaterial z transmission/ior.
    // Nie wymaga kosztownej ścieżki refrakcji ani shaderów objętościowych.
    const beaconDome = new THREE.Mesh(
      new THREE.SphereGeometry(3.2, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5),
      new THREE.MeshStandardMaterial({
        color: "#7dd3fc",
        emissive: "#075985",
        emissiveIntensity: 0.12,
        transparent: true,
        opacity: 0.36,
        roughness: 0.08,
        metalness: 0.12,
        envMapIntensity: 1.2,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );
    this.summitCrown.add(beaconDome);

    const victoryTrophy = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.1, 0),
      new THREE.MeshStandardMaterial({
        color: "#fef08a",
        emissive: "#eab308",
        emissiveIntensity: 0.3,
        metalness: 0.9,
        roughness: 0.1,
      })
    );
    victoryTrophy.position.y = 1.35;
    this.summitCrown.add(victoryTrophy);
    this.scene.add(this.summitCrown);

    // 5. Wszystkie powierzchnie do stania — wyłącznie schodki
    this.buildStairs();

    // 6. Dynamic Elevators
    this.buildElevators();

    // 7. Springs / Trampolines
    this.buildSprings();

    // 8. Collectible Gems
    this.buildGems();

    // 9. Hazards
    this.buildHazards();

    // 10. Checkpoints
    this.buildCheckpoints();

    // 11. Paired tower doors / teleport passages
    this.buildDoors();
    this.buildCollapsingStairs();
    this.buildLeversAndTogglableStairs();
    this.prewarmSummitShaders();
  }

  /** Kompiluje materiał szczytu przed rozpoczęciem gry, a nie przy wejściu w kadr. */
  private prewarmSummitShaders() {
    const wasTopVisible = this.topRing.visible;
    const wasCrownVisible = this.summitCrown.visible;
    this.topRing.visible = true;
    this.summitCrown.visible = true;

    const renderer = this.renderer as THREE.WebGLRenderer & {
      compileAsync?: (scene: THREE.Scene, camera: THREE.Camera) => Promise<void>;
    };

    if (renderer.compileAsync) {
      renderer.compileAsync(this.scene, this.camera).finally(() => {
        this.topRing.visible = wasTopVisible;
        this.summitCrown.visible = wasCrownVisible;
      });
    } else {
      renderer.compile(this.scene, this.camera);
      this.topRing.visible = wasTopVisible;
      this.summitCrown.visible = wasCrownVisible;
    }
  }

  /**
   * Buduje CAŁE podłoże wyłącznie ze schodków.
   *
   * Nie ma osobnego modelu platformy. Szeroka półka to po prostu `count`
   * schodków ustawionych obok siebie na tej samej wysokości, każdy zajmujący
   * dokładnie jeden krok obwodu. Dzięki temu kolizja, culling i geometria
   * korzystają z jednej, wspólnej ścieżki.
   */
  private buildStairs() {
    const towerMidRadius = TOWER_RADIUS + PLATFORM_DEPTH * 0.5;
    // Jeden schodek zajmuje dokładnie jeden krok obwodu.
    const stepArcLength = (TAU * TOWER_RADIUS) / CIRCUMFERENCE_STEPS;

    // Najpierw zbieramy PŁASKĄ listę schodków (stepX + topY), rozwijając `count`.
    // Deduplikacja pilnuje, żeby dwa wpisy nie nałożyły się na siebie.
    const slots = new Map<string, { id: string; stepX: number; topY: number }>();

    const addSlot = (id: string, x: number, topY: number) => {
      const stepX = stairIndexAt(x);
      const key = `${stepX}@${topY.toFixed(3)}`;
      if (!slots.has(key)) slots.set(key, { id, stepX, topY });
    };

    for (const stair of this.level.stairs) {
      const count = Math.max(1, Math.floor(stair.count ?? 1));
      for (let i = 0; i < count; i++) {
        addSlot(count > 1 ? `${stair.id}#${i}` : stair.id, stair.x + i, stair.topY);
      }
    }

    // Drzwi i checkpointy ZAWSZE dostają schodek pod sobą.
    // Autor poziomu nie musi go dopisywać ręcznie.
    for (const door of this.level.doors) {
      addSlot(`${door.id}-stair`, door.x, door.topY);
    }
    for (const cp of this.level.checkpoints) {
      addSlot(`checkpoint-${cp.id}-stair`, cp.x, cp.y);
    }

    const prepared: PreparedStair[] = [];

    for (const slot of slots.values()) {
      const theta = stepToTheta(stairCenterX(slot.stepX));
      const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));

      const pos = new THREE.Vector3(
        radial.x * towerMidRadius,
        slot.topY - PLATFORM_THICKNESS * 0.5,
        radial.z * towerMidRadius
      );
      const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, theta, 0));
      // Lekki zapas wzdłuż łuku eliminuje szczeliny między sąsiednimi schodkami.
      const scale = new THREE.Vector3(stepArcLength * 1.02, 1, 1);

      prepared.push({
        id: slot.id,
        x: slot.stepX,
        topY: slot.topY,
        width: 1,
        theta,
        radial,
        tangLength: stepArcLength,
        defaultMatrix: new THREE.Matrix4().compose(pos, quat, scale),
        // Zerowa skala = wierzchołki degenerują się, GPU odrzuca je natychmiast.
        culledMatrix: new THREE.Matrix4().compose(pos, quat, new THREE.Vector3(0, 0, 0)),
      });
    }

    this.staticStairs = prepared;

    const stairGeo = new THREE.BoxGeometry(1, PLATFORM_THICKNESS, PLATFORM_DEPTH);
    const stairMat = createStairsMaterial();

    this.stairsInstancedMesh = new THREE.InstancedMesh(stairGeo, stairMat, prepared.length);
    this.stairsInstancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.stairsInstancedMesh.castShadow = true;
    this.stairsInstancedMesh.receiveShadow = true;

    // Bounding box InstancedMesh liczony jest w (0,0,0), więc własne culling
    // robimy sami — globalny frustum culling musi być wyłączony.
    this.stairsInstancedMesh.frustumCulled = false;

    prepared.forEach((stair, idx) => {
      this.stairsInstancedMesh.setMatrixAt(idx, stair.defaultMatrix);
    });
    this.stairsInstancedMesh.instanceMatrix.needsUpdate = true;
    this.scene.add(this.stairsInstancedMesh);
  }

  private buildElevators() {
    const elevatorSpecs = this.level.elevators;

    // Winda ma dokładnie te same wymiary co pojedynczy schodek.
    const stepArcLength = (TAU * TOWER_RADIUS) / CIRCUMFERENCE_STEPS;
    const elevGeo = new THREE.BoxGeometry(
      stepArcLength * 1.02,
      PLATFORM_THICKNESS,
      PLATFORM_DEPTH
    );

    // Prowadnica: prostopadłościan przylegający do wieży.
    // Podstawa kwadratu o boku równym grubości schodka (PLATFORM_THICKNESS).
    // Długość = cała droga windy (yMax - yMin). Początek przy yMin, koniec przy yMax.
    const railThickness = PLATFORM_THICKNESS;
    const railMat = createElevatorRailMaterial();

    elevatorSpecs.forEach((spec) => {
      const theta = stepToTheta(spec.x + spec.width * 0.5);
      const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));

      // Ta sama kamienna tekstura co schodki, tylko w niebieskiej tonacji.
      const elevMat = createElevatorMaterial();

      const mesh = new THREE.Mesh(elevGeo, elevMat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.rotation.y = theta;
      mesh.position.set(
        radial.x * (TOWER_RADIUS + PLATFORM_DEPTH * 0.5),
        spec.yMin,
        radial.z * (TOWER_RADIUS + PLATFORM_DEPTH * 0.5)
      );

      this.scene.add(mesh);

      this.elevators.push({
        ...spec,
        mesh,
        currentTopY: spec.yMin + PLATFORM_THICKNESS * 0.5,
        theta,
      });

      // --- Prowadnica ---
      // Przylega bezpośrednio do ściany wieży (TOWER_RADIUS + połowa grubości),
      // dokładnie na środku trasy.
      const railTravel = spec.yMax - spec.yMin;
      const railGeo = new THREE.BoxGeometry(railThickness, railTravel, railThickness);
      const rail = new THREE.Mesh(railGeo, railMat);
      rail.rotation.y = theta;
      // Środek wysokości trasy, by końce zgadzały się z yMin i yMax.
      // Promień: sam mur wieży + pół grubości prowadnicy, żeby przylegała do ściany.
      const railRadius = TOWER_RADIUS + railThickness * 0.5;
      rail.position.set(
        radial.x * railRadius,
        (spec.yMin + spec.yMax) / 2,
        radial.z * railRadius
      );
      rail.receiveShadow = true;
      this.scene.add(rail);
    });
  }

  private buildSprings() {
    const springLocations = this.level.springs;

    springLocations.forEach((sp) => {
      const theta = stepToTheta(sp.x + 0.5);
      const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));

      const springGroup = new THREE.Group();
      const baseMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.45, 0.5, 0.15, 16),
        new THREE.MeshStandardMaterial({ color: "#ef4444", metalness: 0.6, roughness: 0.3 })
      );
      baseMesh.position.y = sp.topY + 0.08;
      springGroup.add(baseMesh);

      const padMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 0.1, 16),
        new THREE.MeshStandardMaterial({
          color: "#fbbf24",
          emissive: "#f59e0b",
          emissiveIntensity: 0.6,
          metalness: 0.8,
        })
      );
      padMesh.position.y = sp.topY + 0.18;
      springGroup.add(padMesh);

      springGroup.position.set(
        radial.x * PLAYER_STAND_RADIUS,
        0,
        radial.z * PLAYER_STAND_RADIUS
      );
      springGroup.rotation.y = theta;
      this.scene.add(springGroup);

      this.springs.push({
        ...sp,
        mesh: baseMesh,
        theta,
        cooldown: 0,
      });
    });
  }

  private buildGems() {
    const gemGeo = new THREE.OctahedronGeometry(0.32, 0);
    const gemMat = new THREE.MeshStandardMaterial({
      color: "#f59e0b",
      emissive: "#d97706",
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.9,
    });

    const gemPoints = this.level.gems;

    this.playerState.totalGems = gemPoints.length;

    gemPoints.forEach((pt) => {
      const theta = stepToTheta(pt.x);
      const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
      const mesh = new THREE.Mesh(gemGeo, gemMat.clone());
      mesh.castShadow = true;
      mesh.position.set(
        radial.x * PLAYER_STAND_RADIUS,
        pt.y,
        radial.z * PLAYER_STAND_RADIUS
      );
      this.scene.add(mesh);

      this.gems.push({
        id: pt.id,
        x: pt.x,
        y: pt.y,
        mesh,
        collected: false,
        theta,
      });
    });
  }

  /**
   * Wybiera środek docelowego schodka dla podskakującej piłki.
   * Jeśli w zadanym kierunku nie ma schodka na tej wysokości, piłka próbuje
   * kierunku przeciwnego. Zmiana kierunku następuje dopiero po lądowaniu.
   */
  private findEnemyLandingX(
    fromX: number,
    topY: number,
    moveSteps: number,
    direction: -1 | 1
  ): number {
    if (moveSteps <= 0) return stairCenterX(stairIndexAt(fromX));

    const fromSlot = stairIndexAt(fromX);
    const candidates = [direction, -direction] as const;

    for (const dir of candidates) {
      const targetSlot = stairIndexAt(fromSlot + dir * moveSteps);
      const exists = this.staticStairs.some(
        (stair) =>
          stairIndexAt(stair.x) === targetSlot &&
          Math.abs(stair.topY - topY) < 0.2
      );
      if (exists) return stairCenterX(targetSlot);
    }

    return stairCenterX(fromSlot);
  }

  private buildHazards() {
    const hazardSpecs = this.level.enemies;

    // Piłka z teksturą schodka przetworzoną na kolor czerwony
    const redStairMat = createEnemyMaterial();
    const orbGeo = new THREE.SphereGeometry(0.32, 14, 14);

    const playerJumpHeight = (JUMP_SPEED * JUMP_SPEED) / (2 * GRAVITY);
    const defaultBallBounceHeight = playerJumpHeight * 0.5;

    hazardSpecs.forEach((spec) => {
      const behavior = spec.behavior ?? "bounce";
      const amplitude = spec.amplitude ?? defaultBallBounceHeight;
      const speed = spec.speed ?? 1.2;

      const slot = stairIndexAt(spec.xCenter);

      // Schodek dla przeciwnika — ten sam slot i podana wysokość.
      let baseY = spec.y;
      for (const plat of this.staticStairs) {
        if (
          stairIndexAt(plat.x) === slot &&
          Math.abs(plat.topY - spec.y) < 0.75
        ) {
          baseY = plat.topY;
          break;
        }
      }

      const enemyX = stairCenterX(slot);
      const moveSteps = Math.max(0, Math.floor(spec.moveSteps ?? 0));
      const direction: -1 | 1 = spec.direction === -1 ? -1 : 1;
      const naturalFlightTime = 2 * Math.sqrt((2 * amplitude) / GRAVITY);
      const bounceDuration = naturalFlightTime / Math.max(0.25, speed);
      const targetX = this.findEnemyLandingX(enemyX, baseY, moveSteps, direction);

      const mesh = new THREE.Mesh(orbGeo, redStairMat);
      mesh.castShadow = true;
      this.scene.add(mesh);

      this.hazards.push({
        id: spec.id,
        x: enemyX,
        y: spec.y,
        behavior,
        amplitude,
        speed,
        currentX: enemyX,
        bounceElapsed: 0,
        bounceDuration,
        bounceBaseY: baseY,
        bounceFromX: enemyX,
        bounceToX: targetX,
        moveSteps,
        direction,
        mesh,
        theta: stepToTheta(enemyX),
      });
    });
  }

  private buildLeversAndTogglableStairs() {
    var armLen = 0.5;
    var armGeo = new THREE.BoxGeometry(0.06, 0.06, armLen);
    var ballGeo = new THREE.SphereGeometry(0.08, 8, 8);
    var redMat = new THREE.MeshStandardMaterial({ color: "#ef4444", emissive: "#7f1d1d", emissiveIntensity: 0.9, roughness: 0.1, metalness: 0.6 });
    this.level.levers.forEach((spec) => {
      var theta = stepToTheta(stairCenterX(stairIndexAt(spec.x)));
      var radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
      var group = new THREE.Group();
      var armGroup = new THREE.Group();
      armGroup.name = "armGroup";
      var arm = new THREE.Mesh(armGeo, new THREE.MeshStandardMaterial({ color: "#cbd5e1", emissive: "#475569", emissiveIntensity: 0.4, metalness: 0.5, roughness: 0.3 }));
      arm.position.set(0, 0, armLen / 2);
      armGroup.add(arm);
      var ball = new THREE.Mesh(ballGeo, redMat.clone());
      ball.position.set(0, 0, armLen);
      ball.userData = { isBall: true };
      armGroup.add(ball);
      armGroup.rotation.x = -0.6;
      group.add(armGroup);
      group.position.set(radial.x * (TOWER_RADIUS + 0.25), spec.topY + 1.2, radial.z * (TOWER_RADIUS + 0.25));
      group.rotation.y = theta;
      this.scene.add(group);
      this.levers.push({ id: spec.id, x: spec.x, topY: spec.topY, theta: theta, mesh: group, extended: false });
    });

this.level.togglableStairs.forEach((spec) => {
      const theta = stepToTheta(stairCenterX(stairIndexAt(spec.x)));
      const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
      const sAL = (TAU * TOWER_RADIUS) / CIRCUMFERENCE_STEPS;
      const group = new THREE.Group();
      const geo = new THREE.BoxGeometry(sAL * 1.02, PLATFORM_THICKNESS, PLATFORM_DEPTH);
      const mat = createTogglableStairMaterial(false);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true; mesh.receiveShadow = true;
      group.add(mesh);
      group.position.set(radial.x * (TOWER_RADIUS - 0.8), spec.topY - PLATFORM_THICKNESS * 0.5, radial.z * (TOWER_RADIUS - 0.8));
      group.rotation.y = theta;
      this.scene.add(group);
      this.togglableStairs.push({ id: spec.id, x: stairCenterX(stairIndexAt(spec.x)), topY: spec.topY, leverId: spec.leverId, theta, mesh: group, extended: false, retractOffset: 0 });
    });
  }

  private buildCollapsingStairs() {
    const mat = createCollapsingStairMaterial();
    this.level.collapsingStairs.forEach((spec) => {
      const centerX = stairCenterX(stairIndexAt(spec.x));
      const theta = stepToTheta(centerX);
      const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
      const group = new THREE.Group();
      const sAL = (TAU * TOWER_RADIUS) / CIRCUMFERENCE_STEPS;
      const geo = new THREE.BoxGeometry(sAL * 1.02, PLATFORM_THICKNESS, PLATFORM_DEPTH);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);
      group.position.set(
        radial.x * PLAYER_STAND_RADIUS,
        spec.topY - PLATFORM_THICKNESS * 0.5,
        radial.z * PLAYER_STAND_RADIUS
      );
      group.rotation.y = theta;
      this.scene.add(group);
      this.collapsingStairs.push({
        id: spec.id,
        x: centerX,
        topY: spec.topY,
        theta,
        mesh: group,
        state: "idle",
        timer: 0,
        retractOffset: 0,
      });
    });
  }

private buildCheckpoints() {
    const cpData = this.level.checkpoints;

    cpData.forEach((cp) => {
      // Flaga zawsze na środku schodka, nigdy pomiędzy dwoma.
      const cpX = stairCenterX(stairIndexAt(cp.x));
      const theta = stepToTheta(cpX);
      const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));

      const group = new THREE.Group();
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 1.8, 8),
        new THREE.MeshStandardMaterial({ color: "#64748b", metalness: 0.8 })
      );
      pole.position.y = cp.y + 0.9;
      group.add(pole);

      const flag = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.4, 0.05),
        new THREE.MeshStandardMaterial({
          color: "#ef4444",
          emissive: "#991b1b",
          emissiveIntensity: 0.3,
        })
      );
      flag.position.set(0.3, cp.y + 1.5, 0);
      group.add(flag);

      group.position.set(
        radial.x * (PLAYER_STAND_RADIUS - 0.4),
        0,
        radial.z * (PLAYER_STAND_RADIUS - 0.4)
      );
      group.rotation.y = theta;
      this.scene.add(group);

      this.checkpoints.push({
        ...cp,
        // Respawn i detekcja celują w środek schodka.
        x: cpX,
        activated: false,
        mesh: group,
      });
    });
  }

  private buildDoors() {
    // W każdej parze niższe drzwi są wejściem (zielone),
    // a wyższe wyjściem (czerwone). Kolor wynika z wysokości, nie z JSON-a.
    const lowestByPair = new Map<string, number>();
    for (const door of this.level.doors) {
      const current = lowestByPair.get(door.pairId);
      if (current === undefined || door.topY < current) {
        lowestByPair.set(door.pairId, door.topY);
      }
    }

    this.level.doors.forEach((doorData) => {
      // Drzwi zawsze stoją na środku schodka, nigdy pomiędzy dwoma.
      const doorX = stairCenterX(stairIndexAt(doorData.x));
      const theta = stepToTheta(doorX);
      const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
      const isEntrance = doorData.topY === lowestByPair.get(doorData.pairId);
      const color = isEntrance ? "#22c55e" : "#ef4444";
      const group = new THREE.Group();

      const stoneMaterial = createDoorFrameMaterial();
      const doorMaterial = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.12,
        roughness: 0.35,
        metalness: 0.55,
      });

      const panel = new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.8, 0.16), doorMaterial);
      panel.position.set(0, 0.95, 0.03);
      panel.castShadow = true;
      group.add(panel);

      const leftPost = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.15, 0.3), stoneMaterial);
      const rightPost = leftPost.clone();
      leftPost.position.set(-0.53, 1.05, 0);
      rightPost.position.set(0.53, 1.05, 0);
      const lintel = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.2, 0.3), stoneMaterial);
      lintel.position.set(0, 2.05, 0);
      group.add(leftPost, rightPost, lintel);

      // A permanent down-arrow communicates the interaction without a HUD popup.
      const arrow = new THREE.Mesh(
        new THREE.ConeGeometry(0.18, 0.35, 4),
        new THREE.MeshBasicMaterial({ color })
      );
      arrow.position.set(0, 2.55, 0.2);
      arrow.rotation.z = Math.PI;
      arrow.userData.baseY = 2.55;
      group.add(arrow);

      group.position.set(
        radial.x * (TOWER_RADIUS + 0.2),
        doorData.topY,
        radial.z * (TOWER_RADIUS + 0.2)
      );
      group.rotation.y = theta;
      this.scene.add(group);

      this.doors.push({
        ...doorData,
        // Zapisujemy przyciągniętą pozycję, żeby teleport i detekcja
        // celowały dokładnie w środek schodka.
        x: doorX,
        color,
        theta,
        mesh: group,
      });
    });
  }

  private buildPlayer() {
    this.playerGroup = new THREE.Group();
    this.scene.add(this.playerGroup);

    this.playerBody = new THREE.Group();
    this.playerBody.position.y = -PLAYER_FOOT_OFFSET;
    this.playerGroup.add(this.playerBody);

    // ==========================================
    // SLIME BODY — jedna ciągła, żelowa bryła.
    // Głowa, tułów i biodra to wspólny profil obrotowy (LatheGeometry),
    // więc nie ma żadnych szwów ani doklejanych kul.
    // ==========================================
    const FOOT_LOCAL_Y = 0.52; // wysokość podeszwy w lokalnej przestrzeni ciała

    // Profil sylwetki: szeroka, ciężka podstawa -> talia -> kopuła głowy
    const slimeProfile: THREE.Vector2[] = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.4, 0.0),
      new THREE.Vector2(0.49, 0.1),
      new THREE.Vector2(0.53, 0.3),
      new THREE.Vector2(0.51, 0.56),
      new THREE.Vector2(0.45, 0.86),
      new THREE.Vector2(0.385, 1.12),
      new THREE.Vector2(0.4, 1.36),
      new THREE.Vector2(0.415, 1.56),
      new THREE.Vector2(0.365, 1.76),
      new THREE.Vector2(0.265, 1.93),
      new THREE.Vector2(0.125, 2.02),
      new THREE.Vector2(0.0, 2.05),
    ].map((p) => new THREE.Vector2(p.x, p.y + FOOT_LOCAL_Y));

    const slimeGeo = new THREE.LatheGeometry(slimeProfile, 24);
    // Body zwężone do środka na 0.9 — ręce, nogi, twarz i diamencik wystają na zewnątrz.
    // Skalujemy tylko promień (X/Z), wysokość zostaje, żeby stopy i czubek były na miejscu.
    slimeGeo.scale(0.9, 1, 0.9);
    slimeGeo.computeVertexNormals();

    // Żelowy, półprzezroczysty materiał – obniżona emisja żeby nie świecił w bloom
    const gelMat = new THREE.MeshStandardMaterial({
      color: "#4ade80",
      emissive: "#000000",
      emissiveIntensity: 0.0,
      roughness: 0.18,
      metalness: 0.0,
      transparent: true,
      opacity: 0.82,
    });

    this.torso = new THREE.Mesh(slimeGeo, gelMat);
    this.torso.castShadow = true;
    this.playerBody.add(this.torso);

    const coreGeo = new THREE.SphereGeometry(0.3, 14, 12);
    coreGeo.scale(1, 1.35, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: "#bbf7d0",
      emissive: "#000000",
      emissiveIntensity: 0.0,
      roughness: 0.3,
      transparent: true,
      opacity: 0.45,
    });
    coreMat.depthWrite = false; // rdzeń ma prześwitywać przez powłokę
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.y = FOOT_LOCAL_Y + 0.72;
    core.renderOrder = 0;
    this.torso.renderOrder = 1; // powłoka rysowana po rdzeniu
    this.torso.add(core);

    // Diamencik na czubku — lewituje kilka pikseli nad glową stworka.
    const topDropGeo = new THREE.OctahedronGeometry(0.11, 0);
    topDropGeo.rotateZ(Math.PI / 6);
    const topDropMat = new THREE.MeshStandardMaterial({
      color: "#6ee7a8",
      emissive: "#000000",
      emissiveIntensity: 0.0,
      metalness: 1.0,
      roughness: 0.02,
    });
    const topDrop = new THREE.Mesh(topDropGeo, topDropMat);
    // Podniesiony o 0.15 jednostki — widoczna przerwa pomiedzy glową a diamencikiem
    topDrop.position.y = FOOT_LOCAL_Y + 2.23;
    topDrop.castShadow = true;
    this.playerBody.add(topDrop);
    this.slimeTopDrop = topDrop;

    // Biała plamka usunięta — diamencik sam w sobie odbija otoczenie w 100%.

    // FACE — dzieci bryły (torso), więc skalują się RAZEM z oddechem i nigdy nie znikają w środku.
    // Pozycje wypchnięte tuż nad powierzchnię zwężonego body (0.9).
    const eyeBaseGeo = new THREE.SphereGeometry(0.08, 10, 10);
    const eyeBaseMat = new THREE.MeshBasicMaterial({ color: "#ffffff" });
    const pupilGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const pupilMat = new THREE.MeshBasicMaterial({ color: "#000000" });

    this.leftEye = new THREE.Mesh(eyeBaseGeo, eyeBaseMat);
    this.leftEye.position.set(-0.13, FOOT_LOCAL_Y + 1.64, 0.32);
    this.leftEye.renderOrder = 3;
    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    leftPupil.position.set(0, 0, 0.05);
    leftPupil.renderOrder = 4;
    this.leftEye.add(leftPupil);
    this.torso.add(this.leftEye);

    this.rightEye = new THREE.Mesh(eyeBaseGeo, eyeBaseMat);
    this.rightEye.position.set(0.13, FOOT_LOCAL_Y + 1.64, 0.32);
    this.rightEye.renderOrder = 3;
    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
    rightPupil.position.set(0, 0, 0.05);
    rightPupil.renderOrder = 4;
    this.rightEye.add(rightPupil);
    this.torso.add(this.rightEye);

    // Nosek — wypukłość z tej samej galarety, ale nieprzezroczysta żeby był widoczny
    const nose = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 10, 10),
      new THREE.MeshStandardMaterial({
        color: "#34d399",
        emissive: "#065f46",
        emissiveIntensity: 0.2,
        roughness: 0.25,
      })
    );
    nose.position.set(0, FOOT_LOCAL_Y + 1.52, 0.37);
    nose.renderOrder = 3;
    this.torso.add(nose);

    // USTA — uśmiechnięty łuk w KOLORZE NOSA (#34d399), wyraźnie na wierzchu twarzy
    const mouth = new THREE.Mesh(
      new THREE.TorusGeometry(0.085, 0.022, 8, 18, Math.PI),
      new THREE.MeshBasicMaterial({ color: "#34d399" })
    );
    mouth.position.set(0, FOOT_LOCAL_Y + 1.44, 0.40);
    mouth.rotation.z = Math.PI; // łuk otwarty do dołu = uśmiech
    mouth.renderOrder = 3;
    this.torso.add(mouth);

    // Żelowe rączki — krótkie krople wyrastające wprost z bryły.
    // Punkt obrotu (Group) siedzi przy korpusie, więc machają od nasady.
    const armGeo = new THREE.SphereGeometry(0.12, 10, 10);
    armGeo.scale(0.75, 1.7, 0.75); // wydłużona kropla
    armGeo.translate(0, -0.17, 0); // origin w nasadzie ramienia

    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.36, FOOT_LOCAL_Y + 1.02, 0);
    this.leftArm.rotation.z = 0.32; // lekko odchylone na zewnątrz
    const leftArmMesh = new THREE.Mesh(armGeo, gelMat);
    leftArmMesh.castShadow = true;
    this.leftArm.add(leftArmMesh);

    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.36, FOOT_LOCAL_Y + 1.02, 0);
    this.rightArm.rotation.z = -0.32;
    const rightArmMesh = new THREE.Mesh(armGeo, gelMat);
    rightArmMesh.castShadow = true;
    this.rightArm.add(rightArmMesh);
    this.playerBody.add(this.leftArm, this.rightArm);

    // Nóżki: krótkie, pękate kikuty wtopione w dolną część bryły.
    // Zachowujemy hierarchię biodro -> goleń, żeby animacja chodu działała.
    const stubGeo = new THREE.SphereGeometry(0.15, 10, 10);
    stubGeo.scale(1, 0.85, 1);
    stubGeo.translate(0, -0.1, 0);

    const createLeg = (x: number) => {
      const hip = new THREE.Group();
      hip.position.set(x, FOOT_LOCAL_Y + 0.3, 0);

      const lower = new THREE.Group();
      lower.position.y = -0.08;
      const stub = new THREE.Mesh(stubGeo, gelMat);
      stub.castShadow = true;
      lower.add(stub);
      hip.add(lower);

      return { hip, lower };
    };

    const leftLegRig = createLeg(-0.19);
    this.leftLeg = leftLegRig.hip;
    this.leftLowerLeg = leftLegRig.lower;

    const rightLegRig = createLeg(0.19);
    this.rightLeg = rightLegRig.hip;
    this.rightLowerLeg = rightLegRig.lower;

    // Stópki: spłaszczone żelowe placki, spód dokładnie na poziomie podeszwy
    const footGeo = new THREE.SphereGeometry(0.15, 10, 10);
    footGeo.scale(1.05, 0.42, 1.35);
    footGeo.translate(0, 0.063, 0.03); // spód na lokalnym y = 0

    this.leftFoot = new THREE.Mesh(footGeo, gelMat);
    this.leftFoot.position.set(-0.19, FOOT_LOCAL_Y, 0.02);
    this.leftFoot.castShadow = true;
    this.playerBody.add(this.leftFoot);

    this.rightFoot = new THREE.Mesh(footGeo, gelMat);
    this.rightFoot.position.set(0.19, FOOT_LOCAL_Y, 0.02);
    this.rightFoot.castShadow = true;
    this.playerBody.add(this.rightFoot);

    this.playerBody.add(this.leftLeg, this.rightLeg);

    // Ambient player glow
    this.playerLight = new THREE.PointLight("#86efac", 0.0, 6, 2);
    this.playerLight.castShadow = false;
    this.playerLight.position.set(0, 1.5, 0);
    this.playerGroup.add(this.playerLight);
  }

  private buildParticleSystem() {
    const geo = new THREE.BufferGeometry();
    this.particleGeoPositions = new Float32Array(this.maxParticles * 3);
    this.particleGeoColors = new Float32Array(this.maxParticles * 3);

    geo.setAttribute("position", new THREE.BufferAttribute(this.particleGeoPositions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(this.particleGeoColors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.particlePointsMesh = new THREE.Points(geo, mat);
    // CRITICAL: disable Three.js frustum culling on particles so they stay
    // visible regardless of the static bounding box computed on an empty BufferGeometry.
    this.particlePointsMesh.frustumCulled = false;
    this.scene.add(this.particlePointsMesh);
  }

  public spawnParticles(
    pos: THREE.Vector3,
    count: number,
    colorHex: number | string,
    speed: number = 2.5
  ) {
    const color = new THREE.Color(colorHex);
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) {
        this.particles.shift();
      }
      this.particles.push({
        pos: pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3)),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * speed,
          Math.random() * speed * 1.2,
          (Math.random() - 0.5) * speed
        ),
        color: color.clone(),
        size: 0.15 + Math.random() * 0.15,
        life: 0,
        maxLife: 0.4 + Math.random() * 0.5,
      });
    }
  }

  // ==========================================
  // PHYSICS SIMULATION (FIXED TIMESTEP)
  // ==========================================
  private stepPhysics(dt: number) {
    // W menu fizyka jest zamrożona (ludzik stoi, nic go nie porusza)
    if (this.sceneMode === "menu") return;

    if (this.playerState.status !== "running") return;

    this.playerState.elapsedTime += dt;

    // Timers
    if (this.playerState.coyoteTimer > 0) this.playerState.coyoteTimer -= dt;
    if (this.playerState.jumpBufferTimer > 0) this.playerState.jumpBufferTimer -= dt;
    if (this.doorCooldown > 0) this.doorCooldown -= dt;
    if (this.playerState.crownFlash > 0) this.playerState.crownFlash = Math.max(0, this.playerState.crownFlash - dt);
    if (this.playerState.enemyHitCooldown > 0) {
      this.playerState.enemyHitCooldown = Math.max(0, this.playerState.enemyHitCooldown - dt);
    }

    // Sprężyna galarety: tłumione drgania wracające do kształtu spoczynkowego
    const jiggleStiffness = 190;
    const jiggleDamping = 11.5;
    this.playerState.jiggleVel +=
      (-jiggleStiffness * this.playerState.jiggle - jiggleDamping * this.playerState.jiggleVel) * dt;
    this.playerState.jiggle += this.playerState.jiggleVel * dt;
    this.playerState.jiggle = THREE.MathUtils.clamp(this.playerState.jiggle, -0.32, 0.32);

    // Levers - check BEFORE doors so they consume doorQueued first
    this.levers.forEach((lev) => {
      var onIt = Math.abs(this.playerState.y - (lev.topY + 1.2)) < 1.5 && wrappedStepDistance(this.playerState.x, lev.x) < 0.9;
      if (onIt && this.input.doorQueued && this.leverCooldown <= 0) {
        this.input.doorQueued = false;
        lev.extended = !lev.extended;
        this.leverCooldown = 0.4;
        soundEngine.playCheckpoint();
        this.togglableStairs.forEach(function(ts){ if(ts.leverId===lev.id) ts.extended=lev.extended; });
      }
      var armGroup = lev.mesh.children.find(function(c){return c.name==="armGroup";}) as unknown as THREE.Group;
      if(armGroup) (armGroup as any).rotation.x = THREE.MathUtils.lerp((armGroup as any).rotation.x, lev.extended ? -0.2 : -1.0, 0.12);
      var ball = armGroup ? (armGroup as any).children.find(function(c:any){return c.userData&&c.userData.isBall;}) as unknown as THREE.Mesh : undefined;
      if (ball && ball.material instanceof THREE.MeshStandardMaterial) {
        ball.material.color.set(lev.extended ? "#4ade80" : "#ef4444"); ball.material.emissive.set(lev.extended ? "#14532d" : "#7f1d1d");
      }
    });
    if (this.leverCooldown > 0) this.leverCooldown -= dt;

    this.togglableStairs.forEach((ts) => {
      var target = ts.extended ? 0 : 1;
      ts.retractOffset = THREE.MathUtils.lerp(ts.retractOffset, target, 1 - Math.exp(-6 * dt));
      if (Math.abs(ts.retractOffset - target) < 0.005) ts.retractOffset = target;
      var tr = new THREE.Vector3(Math.sin(ts.theta), 0, Math.cos(ts.theta));
      var tOuter = TOWER_RADIUS + PLATFORM_DEPTH * 0.5;
      var tInner = TOWER_RADIUS - 0.8;
      var dist = tOuter + (tInner - tOuter) * ts.retractOffset;
      ts.mesh.position.set(tr.x * dist, ts.topY - PLATFORM_THICKNESS * 0.5, tr.z * dist);
      var tMesh = ts.mesh.children[0];
      if (tMesh && tMesh instanceof THREE.Mesh && tMesh.material instanceof THREE.MeshStandardMaterial) {
        var isGreen = ts.retractOffset < 0.5;
        tMesh.material.color.set(isGreen ? "#4ade80" : "#ef4444");
        tMesh.material.emissive.set(isGreen ? "#14532d" : "#7f1d1d");
      }
    });

if (this.input.doorQueued) {
      if (this.doorCooldown <= 0) this.tryUseDoor();
      this.input.doorQueued = false;
    }

    // Collapsing stairs state machine
    this.collapsingStairs.forEach((cs) => {
      var onIt = Math.abs(this.playerState.y - cs.topY) < 0.2 &&
        wrappedStepDistance(this.playerState.x, cs.x) < 0.6;
      switch (cs.state) {
        case "idle": if (onIt && this.playerState.grounded) { cs.state = "retracting"; cs.timer = 1.0; } break;
        case "retracting": cs.timer -= dt; cs.retractOffset = Math.min(1, (1.0 - Math.max(0, cs.timer)) / 1.0); if (cs.timer <= 0) { cs.state = "hidden"; cs.timer = 1.0; cs.retractOffset = 1; } break;
        case "hidden": cs.timer -= dt; if (cs.timer <= 0) { cs.state = "extending"; cs.timer = 1.0; } break;
        case "extending": cs.timer -= dt; cs.retractOffset = Math.max(0, cs.timer / 1.0); if (cs.timer <= 0) { cs.state = "idle"; cs.retractOffset = 0; cs.timer = 0; } break;
      }
      var rad = new THREE.Vector3(Math.sin(cs.theta), 0, Math.cos(cs.theta));
      var outer = PLAYER_STAND_RADIUS;
      var inner = TOWER_RADIUS - 0.8;
      var dist = outer + (inner - outer) * cs.retractOffset;
      cs.mesh.position.set(rad.x * dist, cs.topY - PLATFORM_THICKNESS * 0.5, rad.z * dist);
    });

    // Elevators oscillation
    const timeSec = this.playerState.elapsedTime;
    this.elevators.forEach((elevator) => {
      const normalized = (Math.sin(timeSec * elevator.speed + elevator.phase) + 1) * 0.5;
      const y = THREE.MathUtils.lerp(elevator.yMin, elevator.yMax, normalized);
      if (elevator.mesh) elevator.mesh.position.y = y;
      elevator.currentTopY = y + PLATFORM_THICKNESS * 0.5;
    });

    // Hazards – bouncing / patrolling / static
    this.hazards.forEach((haz) => {
      switch (haz.behavior) {
        case "bounce": {
          haz.bounceElapsed += dt;

          // Lądowanie: dopiero tutaj wolno ustalić/zmienić kierunek następnego skoku.
          if (haz.bounceElapsed >= haz.bounceDuration) {
            haz.bounceElapsed %= haz.bounceDuration;
            haz.x = haz.bounceToX;

            if (haz.moveSteps > 0) {
              const expectedSlot = stairIndexAt(
                stairIndexAt(haz.bounceFromX) + haz.direction * haz.moveSteps
              );
              if (stairIndexAt(haz.x) !== expectedSlot) {
                haz.direction = haz.direction === 1 ? -1 : 1;
              }
            }

            haz.bounceFromX = haz.x;
            haz.bounceToX = this.findEnemyLandingX(
              haz.x,
              haz.bounceBaseY,
              haz.moveSteps,
              haz.direction
            );
          }

          const t = THREE.MathUtils.clamp(
            haz.bounceElapsed / haz.bounceDuration,
            0,
            1
          );

          // Naturalna parabola balistyczna: 0 przy lądowaniu, H w połowie lotu.
          const bounceY = 4 * haz.amplitude * t * (1 - t);

          // Najkrótsza droga po zawiniętym obwodzie, zawsze środek -> środek.
          let dx = haz.bounceToX - haz.bounceFromX;
          if (dx > CIRCUMFERENCE_STEPS * 0.5) dx -= CIRCUMFERENCE_STEPS;
          if (dx < -CIRCUMFERENCE_STEPS * 0.5) dx += CIRCUMFERENCE_STEPS;
          haz.currentX = wrapValue(haz.bounceFromX + dx * t, CIRCUMFERENCE_STEPS);
          haz.theta = stepToTheta(haz.currentX);
          const ballY = haz.bounceBaseY + 0.32 + bounceY;

          if (haz.mesh) {
            const rad = new THREE.Vector3(
              Math.sin(haz.theta),
              0,
              Math.cos(haz.theta)
            );
            haz.mesh.position.set(
              rad.x * PLAYER_STAND_RADIUS,
              ballY,
              rad.z * PLAYER_STAND_RADIUS
            );
            haz.mesh.userData.currentY = ballY;
            // Obrót gumowej/koszykarskiej piłki podczas lotu.
            haz.mesh.rotation.x += dt * 5;
            haz.mesh.rotation.z += dt * 2.5;
          }
          break;
        }
        case "patrol": {
          const patrolN = Math.sin(timeSec * haz.speed);
          haz.currentX = wrapValue(
            haz.x + patrolN * haz.amplitude,
            CIRCUMFERENCE_STEPS
          );
          haz.theta = stepToTheta(haz.currentX);
          if (haz.mesh) {
            const rad = new THREE.Vector3(
              Math.sin(haz.theta),
              0,
              Math.cos(haz.theta)
            );
            haz.mesh.position.set(
              rad.x * PLAYER_STAND_RADIUS,
              haz.bounceBaseY + 0.7,
              rad.z * PLAYER_STAND_RADIUS
            );
            haz.mesh.userData.currentY = haz.bounceBaseY + 0.7;
          }
          break;
        }
        case "static":
        default:
          haz.currentX = haz.x;
          haz.theta = stepToTheta(haz.x);
          if (haz.mesh) {
            const rad = new THREE.Vector3(
              Math.sin(haz.theta),
              0,
              Math.cos(haz.theta)
            );
            haz.mesh.position.set(
              rad.x * PLAYER_STAND_RADIUS,
              haz.bounceBaseY + 0.7,
              rad.z * PLAYER_STAND_RADIUS
            );
            haz.mesh.userData.currentY = haz.bounceBaseY + 0.7;
          }
          break;
      }

      // Kolizja z graczem
      const hazMesh = haz.mesh;
      const hazY =
        hazMesh && (hazMesh.userData as Record<string, number>)?.currentY
          ? (hazMesh.userData as Record<string, number>).currentY
          : haz.y;

      if (
        this.playerState.enemyHitCooldown <= 0 &&
        hazY + 0.32 >= this.playerState.y - 0.1 &&
        hazY - 0.32 <= this.playerState.y + 2.4 &&
        overlapsWrapped(
          this.playerState.x,
          PLAYER_HALF_WIDTH * 1.5,
          haz.currentX,
          0.4
        )
      ) {
        this.playerState.enemyHitCooldown = 0.8;

        // Lekki podskok po uderzeniu. Nie teleportujemy na dół — fizyka
        // ignoruje tylko bieżący schodek i pozwala wylądować na windzie lub
        // najbliższym niższym schodku.
        this.playerState.knockdownFloorY = this.playerState.y;
        this.playerState.vy = 7.5;
        this.playerState.grounded = false;
        this.playerState.rideElevator = -1;
        this.playerState.jiggleVel -= 8;
        this.spawnParticles(this.playerGroup.position, 8, 0xfef08a, 2.0);
      }
    });

    // Springs cooldown
    this.springs.forEach((sp) => {
      if (sp.cooldown > 0) sp.cooldown -= dt;
    });

    // Elevator platform tracking
    if (this.playerState.rideElevator >= 0) {
      const activeElev = this.elevators[this.playerState.rideElevator];
      if (activeElev) {
        if (Math.abs(this.playerState.y - activeElev.currentTopY) < 0.45) {
          this.playerState.y = activeElev.currentTopY;
        }
      }
    }

    // Horizontal Movement
    const moveAxis = (this.input.right ? 1 : 0) - (this.input.left ? 1 : 0);
    this.playerState.vx = moveAxis * WALK_SPEED;
    this.playerState.x = wrapValue(this.playerState.x + this.playerState.vx * dt, CIRCUMFERENCE_STEPS);

    if (moveAxis !== 0) {
      this.playerState.facingRight = moveAxis > 0;
      this.playerState.walkCycle += dt * 9;
      this.playerState.idleTimer = 0;
    } else {
      this.playerState.idleTimer += dt;
    }

    // Jump Input & Coyote Time
    if (this.input.jumpQueued) {
      this.playerState.jumpBufferTimer = 0.12;
      this.input.jumpQueued = false;
    }

    const canJump = this.playerState.grounded || this.playerState.coyoteTimer > 0;
    if (this.playerState.jumpBufferTimer > 0 && canJump) {
      this.playerState.vy = JUMP_SPEED;
      this.playerState.grounded = false;
      this.playerState.coyoteTimer = 0;
      this.playerState.jumpBufferTimer = 0;
      this.playerState.rideElevator = -1;
      this.playerState.jumpCount++;
      soundEngine.playJump();

      // Odbicie: galareta najpierw się rozciąga w górę
      this.playerState.jiggleVel += 6.5;

      const theta = stepToTheta(this.playerState.x);
      const rad = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
      this.spawnParticles(
        new THREE.Vector3(rad.x * PLAYER_STAND_RADIUS, this.playerState.y, rad.z * PLAYER_STAND_RADIUS),
        6,
        0x93c5fd,
        1.5
      );
    }

    // Variable jump height
    if (!this.input.up && this.playerState.vy > 4.0) {
      this.playerState.vy *= 0.88;
    }

    // Gravity
    this.playerState.vy -= GRAVITY * dt;
    const prevY = this.playerState.y;
    const nextY = this.playerState.y + this.playerState.vy * dt;

    // Ground collision test
    const groundHit = this.findGround(prevY, nextY);

    if (groundHit && this.playerState.vy <= 0) {
      // Lądowanie: im mocniejszy upadek, tym większe rozpłaszczenie galarety
      if (!this.playerState.grounded) {
        const impact = Math.min(Math.abs(this.playerState.vy) / JUMP_SPEED, 1.6);
        this.playerState.jiggleVel -= 9 * impact;
      }
      this.playerState.y = groundHit.topY;
      this.playerState.vy = 0;
      this.playerState.grounded = true;
      this.playerState.coyoteTimer = 0;
      this.playerState.rideElevator = groundHit.rideElevator;
      this.playerState.currentStairTopY = groundHit.topY;
      // Prawdziwe lądowanie po strąceniu — winda lub niższy schodek złapały Jelly.
      this.playerState.knockdownFloorY = null;
    } else {
      if (this.playerState.grounded) {
        this.playerState.coyoteTimer = 0.1;
      }
      this.playerState.y = nextY;
      this.playerState.grounded = false;
      this.playerState.rideElevator = -1;
      this.playerState.currentStairTopY = null;
    }

    // Springs Check
    this.springs.forEach((sp) => {
      if (
        sp.cooldown <= 0 &&
        Math.abs(this.playerState.y - sp.topY) < 0.5 &&
        overlapsWrapped(this.playerState.x, PLAYER_HALF_WIDTH * 1.5, sp.x, 0.6) &&
        this.playerState.vy <= 2
      ) {
        sp.cooldown = 0.4;
        this.playerState.vy = sp.bounceForce;
        this.playerState.grounded = false;
        this.playerState.rideElevator = -1;
        soundEngine.playSuperJump();

        const theta = stepToTheta(sp.x + 0.5);
        const rad = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
        this.spawnParticles(
          new THREE.Vector3(rad.x * PLAYER_STAND_RADIUS, sp.topY + 0.2, rad.z * PLAYER_STAND_RADIUS),
          16,
          0xf59e0b,
          4.2
        );
      }
    });

    // Gems Collect Check — całą postacią (od stóp do głowy, ~2.5j)
    this.gems.forEach((gem) => {
      if (
        !gem.collected &&
        gem.y >= this.playerState.y - 0.3 &&
        gem.y <= this.playerState.y + 2.5 &&
        overlapsWrapped(this.playerState.x, PLAYER_HALF_WIDTH, gem.x, 0.6)
      ) {
        gem.collected = true;
        this.playerState.gemsCollected++;
        this.playerState.score += 250;
        this.playerState.crownFlash = 0.2;
        soundEngine.playCoin();

        if (gem.mesh) {
          gem.mesh.visible = false;
          this.spawnParticles(gem.mesh.position, 14, 0xfbbf24, 3.5);
        }
      }
    });

    // Checkpoint Trigger Check
    this.checkpoints.forEach((cp) => {
      if (
        !cp.activated &&
        Math.abs(this.playerState.y - cp.y) < 1.2 &&
        overlapsWrapped(this.playerState.x, PLAYER_HALF_WIDTH * 2, cp.x, 1.2)
      ) {
        cp.activated = true;
        this.activeCheckpoint = cp.id;
        soundEngine.playCheckpoint();
        this.playerState.score += 500;

        if (cp.mesh) {
          const flagMesh = cp.mesh.children[1] as THREE.Mesh;
          if (flagMesh && flagMesh.material instanceof THREE.MeshStandardMaterial) {
            flagMesh.material.color.set("#22c55e");
            flagMesh.material.emissive.set("#15803d");
          }
          this.spawnParticles(cp.mesh.position, 20, 0x22c55e, 3.0);
        }
      }
    });

    // Ocean reaction – when slime falls into water
    const waterSurface = this.waterLevel + 0.25;
    if (this.waterEnterCooldown > 0) this.waterEnterCooldown -= dt;

    if (this.playerState.y <= waterSurface) {
      if (!this.wasInWater && this.playerState.vy < 0 && this.waterEnterCooldown <= 0) {
        // First contact with ocean
        this.wasInWater = true;
        this.waterEnterCooldown = 1.0;

        const theta = stepToTheta(this.playerState.x);
        const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
        const splashPos = new THREE.Vector3(
          radial.x * PLAYER_STAND_RADIUS,
          waterSurface,
          radial.z * PLAYER_STAND_RADIUS
        );

        // Big splash particles (Aegean blue)
        this.spawnParticles(splashPos, 32, 0x4fc3f7, 6.5);
        this.spawnParticles(splashPos.clone().add(new THREE.Vector3(0, 0.2, 0)), 20, 0xffffff, 4.0);

        // Ripple ring expanding on water surface
        this.createWaterRipple(splashPos);

        // Jiggle the slime heavily on splash
        this.playerState.jiggleVel -= 12;

        soundEngine.playGameOver(); // splash sound placeholder
      }

      // Buoyancy / sink slowly in water
      this.playerState.vy = THREE.MathUtils.lerp(this.playerState.vy, -0.8, dt * 2.5);
      this.playerState.vx *= 0.96; // drag in water

      // If deep enough, trigger respawn / gameover
      if (this.playerState.y < this.waterLevel - 1.5) {
        if (this.activeCheckpoint > 0) {
          this.respawnAtCheckpoint();
        } else {
          this.setGameStatus("gameover");
        }
        this.wasInWater = false;
      }
    } else {
      this.wasInWater = false;
    }

    // Fall into deep void (below ocean) – safety net
    if (this.playerState.y < -8) {
      if (this.activeCheckpoint > 0) {
        this.respawnAtCheckpoint();
      } else {
        this.setGameStatus("gameover");
        soundEngine.playGameOver();
      }
    }

    // Summit Victory — requires standing on a stair with topY exactly at towerHeight (48).
    const onTopStep = this.playerState.grounded &&
                      this.playerState.currentStairTopY !== null &&
                      this.playerState.currentStairTopY >= this.towerHeight;
    if (onTopStep) {
      this.setGameStatus("win");
      this.playerState.score += 2000;
      soundEngine.playWin();
      const pos = new THREE.Vector3(0, this.towerHeight + 2, 0);
      this.spawnParticles(pos, 60, 0xfbbf24, 5.0);
      this.spawnParticles(pos, 60, 0x38bdf8, 5.0);
    }
  }

  private createWaterRipple(position: THREE.Vector3) {
    const ringGeo = new THREE.RingGeometry(0.3, 0.45, 24);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x7ec8ff,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(position);
    ring.position.y = this.waterLevel + 0.02;
    (ring as any).userData = { age: 0, maxAge: 1.8 };
    this.scene.add(ring);
    this.waterRipples.push(ring);
  }

  private respawnAtCheckpoint() {
    const cp = this.checkpoints.find((c) => c.id === this.activeCheckpoint);
    soundEngine.playGameOver();
    if (cp) {
      this.playerState.x = cp.x;
      this.playerState.y = cp.y + 0.5;
      this.playerState.vx = 0;
      this.playerState.vy = 0;
      this.playerState.grounded = true;
      this.playerState.rideElevator = -1;
      this.playerState.currentStairTopY = cp.y;
    } else {
      this.playerState.x = FIRST_STEP_CENTER;
      this.playerState.y = 0.5;
      this.playerState.vx = 0;
      this.playerState.vy = 0;
      this.playerState.grounded = true;
      this.playerState.rideElevator = -1;
      this.playerState.currentStairTopY = 0.5;
    }
    this.wasInWater = false;
    this.waterEnterCooldown = 0.8;
  }

  private tryUseDoor() {
    const source = this.doors.find(
      (door) =>
        wrappedStepDistance(this.playerState.x, door.x) < 0.65 &&
        Math.abs(this.playerState.y - door.topY) < 0.75
    );
    if (!source) return;

    const destination = this.doors.find(
      (door) => door.pairId === source.pairId && door.id !== source.id
    );
    if (!destination) return;

    const sourceFx = source.mesh.position.clone().add(new THREE.Vector3(0, 1, 0));
    const destinationFx = destination.mesh.position.clone().add(new THREE.Vector3(0, 1, 0));
    this.spawnParticles(sourceFx, 18, source.color, 3.2);

    this.playerState.x = destination.x;
    this.playerState.y = destination.topY + 0.08;
    this.playerState.vx = 0;
    this.playerState.vy = 0;
    this.playerState.grounded = true;
    this.playerState.rideElevator = -1;
    this.playerState.currentStairTopY = destination.topY;
    this.playerState.smoothCamY = destination.topY;
    this.playerState.idleTimer = 2; // po teleporcie ludzik staje na wprost
    this.doorCooldown = 0.55;

    this.spawnParticles(destinationFx, 18, destination.color, 3.2);
    soundEngine.playCheckpoint();
  }

  private findGround(prevY: number, nextY: number): { topY: number; rideElevator: number } | null {
    let hitTop = -Infinity;
    let ride = -1;
    const ignoredFloor = this.playerState.knockdownFloorY;

    for (const stair of this.staticStairs) {
      if (
        // Po uderzeniu przeciwnika przechodzimy przez bieżący poziom,
        // ale wszystkie platformy PONIŻEJ (oraz windy) dalej są fizyczne.
        (ignoredFloor === null || stair.topY < ignoredFloor - 0.15) &&
        overlapsWrapped(this.playerState.x, PLAYER_HALF_WIDTH, stair.x, stair.width) &&
        prevY >= stair.topY - 0.45 &&
        nextY <= stair.topY + 0.25
      ) {
        if (stair.topY > hitTop) {
          hitTop = stair.topY;
          ride = -1;
        }
      }
    }

    this.elevators.forEach((elev, idx) => {
      if (
        (ignoredFloor === null || elev.currentTopY < ignoredFloor - 0.15) &&
        overlapsWrapped(this.playerState.x, PLAYER_HALF_WIDTH, elev.x, elev.width) &&
        prevY >= elev.currentTopY - 0.45 &&
        nextY <= elev.currentTopY + 0.25
      ) {
        if (elev.currentTopY > hitTop) {
          hitTop = elev.currentTopY;
          ride = idx;
        }
      }
    });

    // Collapsing stairs
    this.collapsingStairs.forEach((cs) => {
      if (
        cs.retractOffset < 0.85 &&
        (ignoredFloor === null || cs.topY < ignoredFloor - 0.01) &&
        wrappedStepDistance(this.playerState.x, cs.x) < 0.6 &&
        prevY >= cs.topY - 0.45 &&
        nextY <= cs.topY + 0.08 &&
        cs.topY > hitTop
      ) {
        hitTop = cs.topY;
        ride = -1;
      }
    });

    this.togglableStairs.forEach((ts) => {
      if (ts.retractOffset > 0.85) return;
      if ((ignoredFloor === null || ts.topY < ignoredFloor - 0.01) &&
          wrappedStepDistance(this.playerState.x, ts.x) < 0.6 &&
          prevY >= ts.topY - 0.45 && nextY <= ts.topY + 0.08 && ts.topY > hitTop) {
        hitTop = ts.topY; ride = -1;
      }
    });

    if (hitTop === -Infinity) return null;
    return { topY: hitTop, rideElevator: ride };
  }

  // ==========================================
  // OCCLUSION & FRUSTUM CULLING PASS
  // ==========================================
  private performCullingPass(camTheta: number, camY: number) {
    this.culler.cullingEnabled = this.config.cullingEnabled;
    this.culler.updateFrustum(this.camera);

    const towerMidRadius = TOWER_RADIUS + PLATFORM_DEPTH * 0.5;

    // 1. Cull Static Stairs
    // When visible, matrix is the full default transform.
    // When culled behind tower, scale is set to (0,0,0) so GPU rasterizer discards it with 0 shading cost.
    let matrixChanged = false;
    this.staticStairs.forEach((stair, idx) => {
      const isVis = this.culler.isItemVisible(
        stair.theta,
        stair.topY,
        towerMidRadius,
        PLATFORM_DEPTH,
        camTheta,
        camY
      );

      if (isVis) {
        this.stairsInstancedMesh.setMatrixAt(idx, stair.defaultMatrix);
      } else {
        this.stairsInstancedMesh.setMatrixAt(idx, stair.culledMatrix);
      }
      matrixChanged = true;
    });

    if (matrixChanged) {
      this.stairsInstancedMesh.instanceMatrix.needsUpdate = true;
    }

    // 2. Cull Elevators
    this.elevators.forEach((elev) => {
      const isVis = this.culler.isItemVisible(
        elev.theta,
        elev.currentTopY,
        towerMidRadius,
        PLATFORM_DEPTH + 0.5,
        camTheta,
        camY
      );
      if (elev.mesh) elev.mesh.visible = isVis;
    });

    // 3. Cull Gems
    this.gems.forEach((gem) => {
      if (gem.collected) return;
      const isVis = this.culler.isItemVisible(
        gem.theta,
        gem.y,
        PLAYER_STAND_RADIUS,
        0.5,
        camTheta,
        camY
      );
      if (gem.mesh) gem.mesh.visible = isVis;
    });

    // 4. Cull Springs
    this.springs.forEach((sp) => {
      const isVis = this.culler.isItemVisible(
        sp.theta,
        sp.topY,
        PLAYER_STAND_RADIUS,
        0.6,
        camTheta,
        camY
      );
      if (sp.mesh && sp.mesh.parent) (sp.mesh.parent as THREE.Group).visible = isVis;
    });

    // 5. Cull Hazards
    this.hazards.forEach((haz) => {
      const isVis = this.culler.isItemVisible(
        haz.theta,
        haz.y,
        PLAYER_STAND_RADIUS,
        0.5,
        camTheta,
        camY
      );
      if (haz.mesh) haz.mesh.visible = isVis;
    });

    // 6. Cull paired doors behind the solid tower shaft
    this.doors.forEach((door) => {
      const isVis = this.culler.isItemVisible(
        door.theta,
        door.topY + 1,
        TOWER_RADIUS + 0.25,
        1.5,
        camTheta,
        camY
      );
      door.mesh.visible = isVis;
    });

    // 6.5 Collapsing Stairs
    this.collapsingStairs.forEach((cs) => {
      const isVis = this.culler.isItemVisible(cs.theta, cs.topY, PLAYER_STAND_RADIUS, 0.5, camTheta, camY);
      cs.mesh.visible = isVis;
    });

    // 7. Summit Beacon
    const summitVis = !this.config.cullingEnabled || camY > this.towerHeight - 22;
    this.topRing.visible = summitVis;
    this.summitCrown.visible = summitVis;
  }

  // ==========================================
  // RENDER & ANIMATION LOOP
  // ==========================================
  private startLoop() {
    const loop = (time: number) => {
      this.animFrameId = window.requestAnimationFrame(loop);

      // Low-End Hardware Throttle Simulator (e.g. 15 FPS / 30 FPS)
      if (this.config.simulatedFpsThrottle > 0) {
        const throttleInterval = 1000 / this.config.simulatedFpsThrottle;
        if (time - this.lastThrottleTime < throttleInterval) {
          return;
        }
        this.lastThrottleTime = time;
      }

      // Delta time calculation with clamp
      let frameDelta = Math.min((time - this.lastTime) / 1000, MAX_ACCUMULATOR);
      this.lastTime = time;

      // FIXED TIMESTEP ACCUMULATOR:
      // Physics executes in exact 60Hz increments regardless of rendering frame rate!
      // This ensures constant gameplay tempo on weak hardware without slow-motion lag.
      this.accumulator += frameDelta;
      while (this.accumulator >= FIXED_DT) {
        this.stepPhysics(FIXED_DT);
        this.accumulator -= FIXED_DT;
      }

      // Visual animations
      this.updateVisuals(time * 0.001);

      // Sky clouds time uniform (slow drift)
      if (this.sky && (this.sky as any).material?.uniforms?.time) {
        (this.sky as any).material.uniforms.time.value = time * 0.00005;
      }
      if (this.water && (this.water.material as any).uniforms?.time) {
        (this.water.material.uniforms).time.value += 1.0 / 60.0;
      }

      if (this.composer) {
        this.composer.render();
      } else {
        this.renderer.render(this.scene, this.camera);
      }
      // Periodic player state sync for the HUD.
      this.playerHudTimer += frameDelta;
      if (this.playerHudTimer >= 0.1) {
        this.playerHudTimer = 0;
        this.onPlayerStateUpdate?.(this.playerState);
      }
    };

    this.animFrameId = window.requestAnimationFrame(loop);
  }

  private updateVisuals(sec: number) {
    // Player world positioning
    const theta = stepToTheta(this.playerState.x);
    const radial = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
    const worldFeet = new THREE.Vector3(
      radial.x * PLAYER_STAND_RADIUS,
      this.playerState.y,
      radial.z * PLAYER_STAND_RADIUS
    );

    this.playerGroup.position.copy(worldFeet);

    // ==========================================
    // Kierunek postaci:
    //  - w ruchu (lub w ciagu 1 s po zatrzymaniu) -> bokiem, w strone marszu
    //  - po >= 1 s bezruchu                       -> na wprost, twarza do kamery
    //
    // Docelowy yaw wyliczamy wzgledem "twarzy do kamery" (kierunek radialny
    // wychodzacy z wiezy). Prawo/lewo to obrot o +/- 90 stopni wokol osi Y.
    // ==========================================
    const idleThreshold = 1.0;
    const wantsSideways = this.playerState.idleTimer < idleThreshold;

    const baseYaw = Math.atan2(radial.x, radial.z); // twarza do kamery (na wprost)
    let targetYaw = baseYaw;
    if (wantsSideways) {
      targetYaw = baseYaw + (this.playerState.facingRight ? Math.PI / 2 : -Math.PI / 2);
    }

    // Zawiniecie roznicy katow do [-PI, PI] dla najkrotszej sciezki obrotu
    let delta = targetYaw - this.playerState.facingYaw;
    delta = ((delta + Math.PI) % TAU + TAU) % TAU - Math.PI;

    // Szybszy obrot w bok podczas ruchu, wolniejszy powrot do frontu
    const turnRate = wantsSideways ? 18 : 6;
    const step = Math.sign(delta) * Math.min(Math.abs(delta), turnRate * FIXED_DT);
    this.playerState.facingYaw += step;

    this.playerGroup.rotation.set(0, this.playerState.facingYaw, 0);

    // ==========================================
    // PROCEDURAL CHARACTER ANIMATIONS:
    //  - Breathing (Idle animation)
    //  - Blinking eyes (mruganie)
    //  - Crouch & Squat on jumps & landings (przykucnięcie)
    //  - Foot rotation & heel-to-toe roll (ruchome stopy)
    // ==========================================
    const isGrounded = this.playerState.grounded;
    const isMoving = Math.abs(this.playerState.vx) > 0.1;
    const walkCycle = this.playerState.walkCycle;

    // 1. Idle Breathing (Oddech)
    // Soft sinusoidal vertical expansion at 4.5Hz when resting
    const breatheSway = !isMoving && isGrounded ? Math.sin(sec * 4.5) * 0.025 : 0;
    
    // 2. Galareta: squash & stretch ze sprężyny + rozciąganie w locie
    const verticalVel = this.playerState.vy;
    const airStretch = !isGrounded ? THREE.MathUtils.clamp(verticalVel / 40, -0.1, 0.1) : 0;

    // jiggle < 0 -> rozpłaszczenie po lądowaniu, jiggle > 0 -> wyciągnięcie przy odbiciu
    const squashY = airStretch + this.playerState.jiggle;

    // Zachowanie objętości: spłaszczenie w pionie rozlewa bryłę na boki
    const finalScaleY = 1.0 + breatheSway + squashY;
    const finalScaleXZ = 1.0 - (breatheSway + squashY) * 0.5;

    this.torso.scale.set(finalScaleXZ, finalScaleY, finalScaleXZ);
    this.playerBody.position.y = -PLAYER_FOOT_OFFSET;

    // Stópki rozlewają się na boki razem z bryłą, spód zostaje na schodku
    const footSpread = 1 - squashY * 0.8;
    this.leftFoot.scale.set(footSpread, 1 + squashY * 0.35, footSpread);
    this.rightFoot.scale.set(footSpread, 1 + squashY * 0.35, footSpread);

    // Diamencik na czubku — zielona stal 100% odbijająca, plus złoty rozbłysk 0.2s po diamentach
    this.slimeTopDrop.position.y =
      PLAYER_FOOT_OFFSET + 2.08 + this.playerState.jiggle * 0.55 + breatheSway * 1.5;
    this.slimeTopDrop.rotation.y += FIXED_DT * 1.6;
    this.slimeTopDrop.rotation.z = Math.sin(sec * 3.1) * 0.16 - this.playerState.vx * 0.05;
    this.slimeTopDrop.scale.set(1 - squashY * 0.4, 1 + squashY * 0.8, 1 - squashY * 0.4);

    const mat = this.slimeTopDrop.material as THREE.MeshStandardMaterial;
    if (this.playerState.crownFlash > 0) {
      const t = 1 - this.playerState.crownFlash / 0.2;
      const gold = new THREE.Color("#fbbf24");
      const green = new THREE.Color("#6ee7a8");
      mat.color.lerpColors(gold, green, t);
      mat.emissive.set(green.clone().multiplyScalar(0.3).lerp(gold.clone().multiplyScalar(0.6), 1 - t));
      mat.emissiveIntensity = 0.85 - t * 0.55;
      const flashScale = 1 + (1 - t) * 0.85;
      this.slimeTopDrop.scale.multiplyScalar(flashScale);
    } else {
      mat.color.set("#6ee7a8");
      mat.emissive.set("#064e3b");
      mat.emissiveIntensity = 0.18;
    }

    // 3. Eye Blinking (Mruganie)
    // Blinks for 0.15 seconds every 3.5 seconds
    const blinkFraction = sec % 3.5;
    const isBlinking = blinkFraction < 0.15;
    this.leftEye.scale.y = isBlinking ? 0.08 : 1.0;
    this.rightEye.scale.y = isBlinking ? 0.08 : 1.0;

    // 4. Arm and Leg Animation
    if (isGrounded && isMoving) {
      const stride = Math.sin(walkCycle);

      // Walk swings arm forward/back
      this.leftArm.rotation.x = stride * 0.48;
      this.rightArm.rotation.x = -stride * 0.48;

      // Hips move only a little; most of the walking shape comes from knees.
      // This prevents the old "fence sticks" effect.
      this.leftLeg.rotation.x = -stride * 0.24;
      this.rightLeg.rotation.x = stride * 0.24;
      this.leftLowerLeg.rotation.x = Math.max(0, stride) * 0.55;
      this.rightLowerLeg.rotation.x = Math.max(0, -stride) * 0.55;
    } else {
      // Idle state / Midair pose
      this.leftArm.rotation.x = breatheSway * 1.5;
      this.rightArm.rotation.x = -breatheSway * 1.5;

      if (!isGrounded) {
        // Compact, bent-knee pose during flight.
        this.leftLeg.rotation.x = -0.12;
        this.rightLeg.rotation.x = 0.08;
        this.leftLowerLeg.rotation.x = 0.5;
        this.rightLowerLeg.rotation.x = 0.42;
      } else {
        // Flat ground idle
        this.leftLeg.rotation.x = 0;
        this.rightLeg.rotation.x = 0;
        this.leftLowerLeg.rotation.x = 0;
        this.rightLowerLeg.rotation.x = 0;
      }
    }

    // 5. Heel-to-Toe Foot Rolling (Ruchome stopy)
    if (isGrounded && isMoving) {
      // Feet roll and pivot up on heels during walk step phases
      this.leftFoot.rotation.x = Math.sin(walkCycle) * 0.28;
      this.rightFoot.rotation.x = -Math.sin(walkCycle) * 0.28;
    } else {
      this.leftFoot.rotation.x = 0;
      this.rightFoot.rotation.x = 0;
    }

    // ==========================================
    // CAMERA: STEP-BASED LEAD SYSTEM
    // Podczas chodzenia:
    //   - schodek, na który gracz zaraz wejdzie  -> ŚRODEK EKRANU (punkt lookAt)
    //   - stworek                                -> jeden schodek PRZED nim (bliżej kamery)
    //   - kamera                                 -> na NASTĘPNYM schodku w stronę patrzenia
    // Podczas stania: wszystko zjeżdża do zera -> gracz idealnie na środku ekranu.
    // ==========================================
    const stepAngle = TAU / CIRCUMFERENCE_STEPS; // kąt jednego stopnia (15°)
    const dir = this.playerState.facingRight ? 1 : -1;

    // Opóźnienie powrotu kamery w poziomie = takie same jak powrót rotacji ludzika (1s próg bezczynności)
    // Podczas chodzenia lub w ciągu 1s po zatrzymaniu kamera trzyma wyprzedzenie,
    // dopiero po 1s bezruchu wraca do zera.
    const cameraWantsLead = this.playerState.idleTimer < idleThreshold;
    const targetLeadAngle = cameraWantsLead ? dir * stepAngle : 0;

    // Płynne wyrównywanie kamery (szybciej się rozpędza, wolniej wraca do centrum)
    this.playerState.camLeadAngle = THREE.MathUtils.lerp(
      this.playerState.camLeadAngle,
      targetLeadAngle,
      cameraWantsLead ? 0.09 : 0.055
    );

    const lead = this.playerState.camLeadAngle;      // 1 stopień do przodu
    const camOrbitTheta = theta + lead * 2;          // kamera: 2 stopnie do przodu

    // Spirala wznosi się o STEP_HEIGHT na każdy stopień obwodu
    const verticalLead = (lead / stepAngle) * STEP_HEIGHT;

    // ==========================================
    // VERTICAL CAMERA LAG:
    // When jumping or falling, the camera height (smoothCamY) trails behind.
    // The camera doesn't follow jump vibrations instantly, letting the player
    // spring upwards/downwards in the viewport. When flat, it catches up.
    // ==========================================
    // Slower tracking while airborne (0.045) to accentuate jump peaks, faster when grounded (0.09) to settle down.
    const verticalLerpSpeed = isGrounded ? 0.09 : 0.045;
    
    this.playerState.smoothCamY = THREE.MathUtils.lerp(
      this.playerState.smoothCamY,
      this.playerState.y,
      verticalLerpSpeed
    );

    // Punkt centralny kadru = schodek, na który gracz zaraz wejdzie, uwzględniając płynną wysokość smoothCamY
    const focusPoint = new THREE.Vector3(
      Math.sin(theta + lead) * PLAYER_STAND_RADIUS,
      this.playerState.smoothCamY + 1.9 + verticalLead * 0.55,
      Math.cos(theta + lead) * PLAYER_STAND_RADIUS
    );

    // Pozycja kamery:
    //  - w MENU: wolny orbit wokół całej wieży, z daleka i z góry (widać wieżę w całości)
    //  - w GRZE: standardowe wyprzedzenie o dwa stopnie w stronę marszu
    let cameraDesired: THREE.Vector3;
    let cameraLookTarget: THREE.Vector3;

    if (this.sceneMode === "menu") {
      this.menuCamAngle += FIXED_DT * 0.15; // powolny obrót
      const orbitRadius = 42;
      const orbitHeight = this.towerHeight * 0.55 + 6;
      cameraDesired = new THREE.Vector3(
        Math.sin(this.menuCamAngle) * orbitRadius,
        orbitHeight,
        Math.cos(this.menuCamAngle) * orbitRadius
      );
      // Patrzy w środek wieży, mniej więcej na połowę jej wysokości
      cameraLookTarget = new THREE.Vector3(0, this.towerHeight * 0.45, 0);
      // Snap szybciej w menu, żeby nie „wpłynąć" powoli po restarcie
      this.camera.position.lerp(cameraDesired, 0.06);
    } else {
      const camRadial = new THREE.Vector3(Math.sin(camOrbitTheta), 0, Math.cos(camOrbitTheta));
      // Oczy na 1/3 wys. ekranu od dołu: kamera idzie do góry i patrzy nieco wyżej niż schodek.
      // 0.9 jednostki podniesienia = ~6-7° poniżej środka kadru = dokładnie 1/3 od dołu przy FOV 38°.
      const verticalLookUp = 0.9;
      cameraDesired = focusPoint.clone()
        .add(camRadial.multiplyScalar(14.0))
        .add(new THREE.Vector3(0, 4.5 + verticalLookUp, 0)); // kamera wyżej: 4.5 -> 5.4
      cameraLookTarget = focusPoint.clone().add(new THREE.Vector3(0, verticalLookUp, 0)); // punkt patrzenia wyżej
      this.camera.position.lerp(cameraDesired, 0.1);
    }

    this.camera.lookAt(cameraLookTarget);

    // One light, one shadow direction, no motion updates.
    this.sunLight.target.position.set(0, this.towerHeight * 0.5, 0);
    this.sunLight.target.updateMatrixWorld();
    this.sunLight.shadow.camera.lookAt(this.sunLight.target.position);
    this.sunLight.shadow.camera.updateProjectionMatrix();
    this.sunLight.shadow.needsUpdate = true;

    // Sky stays at origin (shader makes it infinite), but keep legacy skyMesh position for compatibility
    // No need to move skyMesh as its shader uses cameraPosition internally
    // this.skyMesh.position.set(...)

    // Rotate Gems
    this.gems.forEach((gem) => {
      if (gem.mesh && gem.mesh.visible) {
        gem.mesh.rotation.y = sec * 2.2;
        gem.mesh.position.y = gem.y + Math.sin(sec * 3.5 + gem.x) * 0.12;
      }
    });

    this.doors.forEach((door, index) => {
      if (!door.mesh.visible) return;
      const arrow = door.mesh.children.find((child) => child.userData.baseY !== undefined);
      if (arrow) arrow.position.y = Number(arrow.userData.baseY) + Math.sin(sec * 4 + index) * 0.12;
    });

    // Rotate Summit Crown
    if (this.summitCrown && this.summitCrown.visible) {
      this.summitCrown.rotation.y = sec * 0.5;
      const trophy = this.summitCrown.children[1];
      if (trophy) trophy.rotation.y = sec * 1.5;
    }

    // Update Particles
    this.updateParticles(FIXED_DT);

    // Update water ripples (expanding rings where slime fell)
    for (let i = this.waterRipples.length - 1; i >= 0; i--) {
      const ripple = this.waterRipples[i];
      const data = (ripple as any).userData as { age: number; maxAge: number };
      data.age += FIXED_DT;
      const t = data.age / data.maxAge;
      if (t >= 1) {
        this.scene.remove(ripple);
        ripple.geometry.dispose();
        (ripple.material as THREE.Material).dispose();
        this.waterRipples.splice(i, 1);
        continue;
      }
      const scale = 1 + t * 8;
      ripple.scale.setScalar(scale);
      (ripple.material as THREE.Material & { opacity: number }).opacity = 0.65 * (1 - t);
    }

    // Culling pass using camera position
    const camTheta = Math.atan2(this.camera.position.x, this.camera.position.z);
    this.performCullingPass(camTheta, this.camera.position.y);
  }

  private updateParticles(dt: number) {
    let activeCount = 0;
    const posArr = this.particleGeoPositions;
    const colArr = this.particleGeoColors;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }

      p.pos.addScaledVector(p.vel, dt);
      p.vel.y -= GRAVITY * 0.3 * dt;

      const idx = activeCount * 3;
      posArr[idx] = p.pos.x;
      posArr[idx + 1] = p.pos.y;
      posArr[idx + 2] = p.pos.z;

      const alpha = 1 - p.life / p.maxLife;
      colArr[idx] = p.color.r * alpha;
      colArr[idx + 1] = p.color.g * alpha;
      colArr[idx + 2] = p.color.b * alpha;

      activeCount++;
    }

    this.particlePointsMesh.geometry.attributes.position.needsUpdate = true;
    this.particlePointsMesh.geometry.attributes.color.needsUpdate = true;
    this.particlePointsMesh.geometry.setDrawRange(0, activeCount);
  }

  private setupEvents() {
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(e.key)) {
      e.preventDefault();
    }
    if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") this.input.left = true;
    if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") this.input.right = true;
    if ((e.key === "ArrowUp" || e.key.toLowerCase() === "w" || e.key === " ") && !this.input.up) {
      this.input.jumpQueued = true;
      this.input.up = true;
    }
    if ((e.key === "ArrowDown" || e.key.toLowerCase() === "s") && !this.input.down) {
      this.input.doorQueued = true;
      this.input.down = true;
    }
    if (e.key.toLowerCase() === "r") {
      this.restartGame();
    }
  };

  private onKeyUp = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") this.input.left = false;
    if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") this.input.right = false;
    if (e.key === "ArrowUp" || e.key.toLowerCase() === "w" || e.key === " ") this.input.up = false;
    if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") this.input.down = false;
  };

  public setGameStatus(status: GameStatus) {
    this.playerState.status = status;
    if (this.onGameStatusChange) {
      this.onGameStatusChange(status);
    }
  }

  /**
   * Zmienia natywną rozdzielczość renderowania (bufor klatki), nie rozciągając obrazu.
   * FOV jest korygowany tak, aby poziome pole widzenia było co najmniej takie
   * jak w bazowym kadrze 4:3 — dzięki temu na wąskich ekranach nic nie „ucieka" z boków.
   */
  public setRenderResolution(width: number, height: number) {
    const s = this.config.renderScale;
    const w = width * s;
    const h = height * s;
    const aspect = w / h;

    this.renderer.setPixelRatio(1);
    this.renderer.setSize(w, h, false);

    const baseHalfHTan =
      Math.tan(THREE.MathUtils.degToRad(BASE_VERTICAL_FOV) / 2) * ASPECT_RATIO;

    if (aspect < ASPECT_RATIO) {
      // Kadr węższy niż 4:3 → poszerzamy pionowe FOV, by utrzymać poziomy zasięg
      const vFov = THREE.MathUtils.radToDeg(2 * Math.atan(baseHalfHTan / aspect));
      this.camera.fov = Math.min(vFov, MAX_VERTICAL_FOV);
    } else {
      this.camera.fov = BASE_VERTICAL_FOV;
    }

    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();

    this.renderer.domElement.id = `game-canvas-${width}x${height}`;
  }

  public setSceneMode(mode: "menu" | "play") {
    this.sceneMode = mode;
    if (mode === "menu") {
      // Zerujemy wejście, żeby ludzik stał
      this.resetInput();
      // Resetujemy gracza na startową pozycję poziomu
      this.playerState.x = this.level.start.x;
      this.playerState.y = this.level.start.y;
      this.playerState.vx = 0;
      this.playerState.vy = 0;
      this.playerState.grounded = true;
      this.playerState.status = "running";
      this.playerState.elapsedTime = 0;
      this.playerState.jumpCount = 0;
      this.playerState.score = 0;
      this.playerState.gemsCollected = 0;
      this.playerState.smoothCamY = this.level.start.y;
      this.playerState.camLeadAngle = 0;
      this.playerState.idleTimer = 3;
      // Wskaźnik gemsCollected na 0 wymaga też przywrócenia niewykorzystanych diamentów
      this.gems.forEach((g) => {
        g.collected = false;
        if (g.mesh) g.mesh.visible = true;
      });
      this.checkpoints.forEach((cp) => {
        cp.activated = false;
      });
      this.activeCheckpoint = 0;
      this.collapsingStairs.forEach((cs) => { cs.state = "idle"; cs.retractOffset = 0; cs.timer = 0; });
      this.levers.forEach((l) => { l.extended = false; });
      this.togglableStairs.forEach((ts) => { ts.extended = false; });
    }
  }

  public restartGame() {
    // Kluczowe przy przejściu mobile między poziomami: kasuje przytrzymane
    // przyciski dotykowe oraz kolejki skoku/drzwi, zanim fizyka ruszy ponownie.
    this.resetInput();
    this.playerState.x = this.level.start.x;
    this.playerState.y = this.level.start.y;
    this.playerState.vx = 0;
    this.playerState.vy = 0;
    this.playerState.grounded = true;
    this.playerState.rideElevator = -1;
    this.playerState.score = 0;
    this.playerState.gemsCollected = 0;
    this.playerState.jumpCount = 0;
    this.playerState.elapsedTime = 0;
    this.playerState.camLeadAngle = 0;
    this.playerState.smoothCamY = this.level.start.y;
    this.playerState.knockdownFloorY = null;
    this.playerState.currentStairTopY = null;
    this.playerState.enemyHitCooldown = 0;
    this.playerState.idleTimer = 2; // Zaraz po restarcie ludzik stoi na wprost
    this.playerState.facingYaw = Math.atan2(
      Math.sin(stepToTheta(this.level.start.x)),
      Math.cos(stepToTheta(this.level.start.x))
    );
    this.activeCheckpoint = 0;
    this.doorCooldown = 0;
    this.collapsingStairs.forEach((cs) => { cs.state = "idle"; cs.retractOffset = 0; cs.timer = 0; });
    this.levers.forEach((l) => { l.extended = false; });
    this.togglableStairs.forEach((ts) => { ts.extended = false; });

    this.gems.forEach((g) => {
      g.collected = false;
      if (g.mesh) g.mesh.visible = true;
    });

    this.collapsingStairs.forEach((cs) => { cs.state = "idle"; cs.retractOffset = 0; cs.timer = 0; });
    this.checkpoints.forEach((cp) => {
      cp.activated = false;
      if (cp.mesh) {
        const flagMesh = cp.mesh.children[1] as THREE.Mesh;
        if (flagMesh && flagMesh.material instanceof THREE.MeshStandardMaterial) {
          flagMesh.material.color.set("#ef4444");
          flagMesh.material.emissive.set("#991b1b");
        }
      }
    });

    this.setGameStatus("running");
  }

  /** Czyści bieżący stan klawiatury i dotyku. */
  private resetInput() {
    this.input.left = false;
    this.input.right = false;
    this.input.up = false;
    this.input.down = false;
    this.input.jumpQueued = false;
    this.input.doorQueued = false;
  }

  public dispose() {
    window.cancelAnimationFrame(this.animFrameId);
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);

    this.renderer.dispose();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }

    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    });
  }
}

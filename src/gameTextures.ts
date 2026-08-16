import * as THREE from "three";

function configureColorMap(
  texture: THREE.Texture,
  opts: {
    wrapS?: THREE.Wrapping;
    wrapT?: THREE.Wrapping;
    repeat?: [number, number];
    anisotropy?: number;
  } = {}
): THREE.Texture {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = opts.wrapS ?? THREE.ClampToEdgeWrapping;
  texture.wrapT = opts.wrapT ?? THREE.ClampToEdgeWrapping;
  if (opts.repeat) texture.repeat.set(opts.repeat[0], opts.repeat[1]);
  if (opts.anisotropy !== undefined) texture.anisotropy = opts.anisotropy;
  return texture;
}

function configureNormalMap(
  texture: THREE.Texture,
  opts: {
    wrapS?: THREE.Wrapping;
    wrapT?: THREE.Wrapping;
    repeat?: [number, number];
    anisotropy?: number;
  } = {}
): THREE.Texture {
  texture.colorSpace = THREE.NoColorSpace;
  texture.wrapS = opts.wrapS ?? THREE.ClampToEdgeWrapping;
  texture.wrapT = opts.wrapT ?? THREE.ClampToEdgeWrapping;
  if (opts.repeat) texture.repeat.set(opts.repeat[0], opts.repeat[1]);
  if (opts.anisotropy !== undefined) texture.anisotropy = opts.anisotropy;
  return texture;
}

// High-performance canvas-generated textures with mipmaps and anisotropy
function createProceduralCanvas(
  width: number,
  height: number,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    draw(ctx, width, height);
  }
  return canvas;
}

/** Paleta pojedynczego stopnia — pozwala odbić tę samą teksturę w innym kolorze. */
interface StepPalette {
  /** Jasna krawędź górna i lewa. */
  highlight: string;
  /** Górny pas gradientu tuż pod krawędzią. */
  faceTop: string;
  /** Dolny pas gradientu. */
  faceBottom: string;
  /** Najciemniejszy cień u samego dołu. */
  shadow: string;
  /** Kontur runy na środku stopnia. */
  rune: string;
  /** Barwienie całego materiału. */
  tint: string;
}


function createStepMaterial(palette: StepPalette): THREE.MeshStandardMaterial {
  const canvas = createProceduralCanvas(128, 128, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, palette.highlight);
    grad.addColorStop(0.12, palette.faceTop);
    grad.addColorStop(0.85, palette.faceBottom);
    grad.addColorStop(1, palette.shadow);

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Bevel edges
    ctx.fillStyle = palette.highlight;
    ctx.fillRect(0, 0, w, 6);
    ctx.fillRect(0, 0, 6, h);

    ctx.fillStyle = palette.shadow;
    ctx.fillRect(w - 6, 0, 6, h);
    ctx.fillRect(0, h - 6, w, 6);

    // Center rune
    ctx.strokeStyle = palette.rune;
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.2, h * 0.25, w * 0.6, h * 0.5);
  });

  const texture = configureColorMap(new THREE.CanvasTexture(canvas));

  return new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.5,
    metalness: 0.35,
    color: palette.tint,
  });
}

const BROWN_RAIL_PALETTE: StepPalette = {
  highlight: "#d97706",
  faceTop: "#78350f",
  faceBottom: "#451a03",
  shadow: "#290f02",
  rune: "rgba(217, 119, 6, 0.4)",
  tint: "#fcd34d",
};

export function createElevatorRailMaterial(): THREE.MeshStandardMaterial {
  return createStepMaterial(BROWN_RAIL_PALETTE);
}

export function createDoorMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const liftColorUrl = new URL("./textures/door/door_col.jpg", import.meta.url).href;
  const liftNormalUrl = new URL("./textures/door/door_nrm.jpg", import.meta.url).href;

  const colorTexture = configureColorMap(textureLoader.load(liftColorUrl), { anisotropy: 8 });
  const normalTexture = configureNormalMap(textureLoader.load(liftNormalUrl), { anisotropy: 8 });

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(1.0, 1.0),
    roughness: 1.0,
    metalness: 0.18,
  });
}

export function createDoorFrameMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const liftColorUrl = new URL("./textures/lift/STEP_col.png", import.meta.url).href;
  const liftNormalUrl = new URL("./textures/lift/STEP_nrm.png", import.meta.url).href;

  const colorTexture = configureColorMap(textureLoader.load(liftColorUrl), { anisotropy: 8 });
  const normalTexture = configureNormalMap(textureLoader.load(liftNormalUrl), { anisotropy: 8 });

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(1.0, 1.0),
    roughness: 1.0,
    metalness: 0.18,
  });
}

export function createTowerMaterial(
  loader?: THREE.TextureLoader,
  _radius: number = 6.12,
  _height: number = 52
): THREE.Material {
  const textureLoader = loader ?? new THREE.TextureLoader();

  const wallColorTextureUrl = new URL("./textures/wall/WALL_col.jpg", import.meta.url).href;
  const wallNormalTextureUrl = new URL("./textures/wall/WALL_nrm.jpg", import.meta.url).href;

  const repeatU = 10;
  const repeatV = Math.max(1, Math.ceil((_height || 52) / 4));
  const repeat: [number, number] = [repeatU, repeatV];

  const texture = configureColorMap(textureLoader.load(wallColorTextureUrl), {
    wrapS: THREE.RepeatWrapping,
    wrapT: THREE.RepeatWrapping,
    repeat,
    anisotropy: 10,
  });
  const normalTexture = configureNormalMap(textureLoader.load(wallNormalTextureUrl), {
    wrapS: THREE.RepeatWrapping,
    wrapT: THREE.RepeatWrapping,
    repeat,
    anisotropy: 10,
  });

  return new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(1.85, 1.85),
    roughness: 1.0,
    metalness: 0.18,
  });
}

// --- STAIRS MATERIAL ----------------------------------------------------------

export function createStairsMaterial(loader?: THREE.TextureLoader): THREE.Material {
  const textureLoader = loader || new THREE.TextureLoader();

  const stepColorUrl = new URL("./textures/step/STEP_col.jpg", import.meta.url).href;
  const stepNormalUrl = new URL("./textures/step/STEP_nrm.jpg", import.meta.url).href;

  const colorTexture = configureColorMap(textureLoader.load(stepColorUrl));
  const normalTexture = configureNormalMap(textureLoader.load(stepNormalUrl));

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    roughness: 1.0,
    metalness: 0.1,
  });
}

// --- ELEVATOR MATERIAL ----------------------------------------------------------

export function createElevatorMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const liftColorUrl = new URL("./textures/lift/STEP_col.png", import.meta.url).href;
  const liftNormalUrl = new URL("./textures/lift/STEP_nrm.png", import.meta.url).href;

  const colorTexture = configureColorMap(textureLoader.load(liftColorUrl));
  const normalTexture = configureNormalMap(textureLoader.load(liftNormalUrl));

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(1.85, 1.85),
    roughness: 1.0,
    metalness: 0.2,
  });
}


// --- ENEMY MATERIAL ----------------------------------------------------------

export function createEnemyMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const enemyColorUrl = new URL("./textures/enemy/ENEMY_col.jpg", import.meta.url).href;
  const enemyNormalUrl = new URL("./textures/enemy/ENEMY_nrm.jpg", import.meta.url).href;

  const colorTexture = textureLoader.load(enemyColorUrl);
  const normalTexture = textureLoader.load(enemyNormalUrl);

  colorTexture.wrapS = THREE.ClampToEdgeWrapping;
  colorTexture.wrapT = THREE.ClampToEdgeWrapping;
  normalTexture.wrapS = THREE.ClampToEdgeWrapping;
  normalTexture.wrapT = THREE.ClampToEdgeWrapping;

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    roughness: 0.6,
    metalness: 0.2,
  });
}

// --- DOOR FRAME ----------------------------------------------------------

export function createCollapsingStairMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const colUrl = new URL("./textures/collapse/STEP_col.png", import.meta.url).href;
  const nrmUrl = new URL("./textures/collapse/STEP_nrm.png", import.meta.url).href;

  const map = configureColorMap(textureLoader.load(colUrl));
  const normalMap = configureNormalMap(textureLoader.load(nrmUrl));

  return new THREE.MeshStandardMaterial({
    map,
    normalMap,
    roughness: 0.6,
    metalness: 0.2,
  });
}
export function createTogglableStairMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const colUrl = new URL("./textures/step/STEP_col.jpg", import.meta.url).href;
  const nrmUrl = new URL("./textures/step/STEP_nrm.jpg", import.meta.url).href;

  const map = configureColorMap(textureLoader.load(colUrl));
  const normalMap = configureNormalMap(textureLoader.load(nrmUrl));

  return new THREE.MeshStandardMaterial({
    map,
    normalMap,
    roughness: 0.6,
    metalness: 0.2,
  });
}
export function createGemTexture(): THREE.Texture {
  const canvas = createProceduralCanvas(64, 64, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const grad = ctx.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
    grad.addColorStop(0, "rgba(255, 255, 255, 1)");
    grad.addColorStop(0.3, "rgba(251, 191, 36, 0.95)");
    grad.addColorStop(0.7, "rgba(245, 158, 11, 0.6)");
    grad.addColorStop(1, "rgba(217, 119, 6, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  });
  return configureColorMap(new THREE.CanvasTexture(canvas));
}

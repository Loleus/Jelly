import * as THREE from "three";

const wallColorTextureUrl = new URL("./textures/wall/WALL_col.png", import.meta.url).href;
const wallNormalTextureUrl = new URL("./textures/wall/WALL_nrm.png", import.meta.url).href;

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

export function createTowerMaterial(
  loader?: THREE.TextureLoader,
  _radius: number = 6.12,
  _height: number = 52
): THREE.Material {
  const textureLoader = loader ?? new THREE.TextureLoader();
  const texture = textureLoader.load(wallColorTextureUrl);
  const normalTexture = textureLoader.load(wallNormalTextureUrl);

  const repeatU = 18;
  const repeatV = Math.max(1, Math.ceil((_height || 52) / 2));

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatU, repeatV);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 18;

  normalTexture.wrapS = THREE.RepeatWrapping;
  normalTexture.wrapT = THREE.RepeatWrapping;
  normalTexture.repeat.set(repeatU, repeatV);
  normalTexture.colorSpace = THREE.NoColorSpace;
  normalTexture.anisotropy = 18;

  return new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(0.85, 0.85),
    roughness: 1.0,
    metalness: 0.08,
    color: "#9aa7b8",
  });
}

export function createFloorMaterial(
  _loader?: THREE.TextureLoader,
  maxAnisotropy: number = 4
): THREE.Material {
  const canvas = createProceduralCanvas(256, 256, (ctx, w, h) => {
    // Checkerboard plaza cobblestone
    ctx.fillStyle = "#0c1524";
    ctx.fillRect(0, 0, w, h);

    const tileSize = w / 4;
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if ((x + y) % 2 === 0) {
          ctx.fillStyle = "#1e293b";
        } else {
          ctx.fillStyle = "#111c2e";
        }
        ctx.fillRect(x * tileSize + 2, y * tileSize + 2, tileSize - 4, tileSize - 4);

        // Inner border
        ctx.strokeStyle = "rgba(99, 102, 241, 0.25)";
        ctx.lineWidth = 1;
        ctx.strokeRect(x * tileSize + 5, y * tileSize + 5, tileSize - 10, tileSize - 10);
      }
    }
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(24, 24);
  texture.anisotropy = maxAnisotropy;

  return new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.7,
    metalness: 0.2,
    color: "#64748b",
  });
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

const STONE_STEP_PALETTE: StepPalette = {
  highlight: "#f59e0b",
  faceTop: "#334155",
  faceBottom: "#1e293b",
  shadow: "#0f172a",
  rune: "rgba(251, 191, 36, 0.4)",
  tint: "#e2e8f0",
};

/**
 * Winda: dokładnie ten sam kamienny stopień co schodki.
 * Różni się wyłącznie krawędzią — zamiast złotej jest niebieska.
 */
const BLUE_EDGE_STEP_PALETTE: StepPalette = {
  highlight: "#38bdf8",
  faceTop: STONE_STEP_PALETTE.faceTop,
  faceBottom: STONE_STEP_PALETTE.faceBottom,
  shadow: STONE_STEP_PALETTE.shadow,
  rune: "rgba(56, 189, 248, 0.4)",
  tint: STONE_STEP_PALETTE.tint,
};

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

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  return new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.5,
    metalness: 0.35,
    color: palette.tint,
  });
}

export function createStairsMaterial(loader?: THREE.TextureLoader): THREE.Material {
  const textureLoader = loader || new THREE.TextureLoader();
  
  const stepColorUrl = new URL("./textures/step/step_col.png", import.meta.url).href;
  const stepNormalUrl = new URL("./textures/step/step_nrm.png", import.meta.url).href;
  
  const colorTexture = textureLoader.load(stepColorUrl);
  const normalTexture = textureLoader.load(stepNormalUrl);
  
  // Brak powtórzeń — każdy schodek ma swoją teksturę zmapowaną
  colorTexture.wrapS = THREE.ClampToEdgeWrapping;
  colorTexture.wrapT = THREE.ClampToEdgeWrapping;
  normalTexture.wrapS = THREE.ClampToEdgeWrapping;
  normalTexture.wrapT = THREE.ClampToEdgeWrapping;
  
  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    roughness: 0.7,
    metalness: 0.1,
  });
}

export function createElevatorMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();
  
  const liftColorUrl = new URL("./textures/lift/lift_col.png", import.meta.url).href;
  const liftNormalUrl = new URL("./textures/lift/lift_nrm.png", import.meta.url).href;
  
  const colorTexture = textureLoader.load(liftColorUrl);
  const normalTexture = textureLoader.load(liftNormalUrl);
  
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

const RED_ENEMY_PALETTE: StepPalette = {
  highlight: "#ef4444",
  faceTop: STONE_STEP_PALETTE.faceTop,
  faceBottom: STONE_STEP_PALETTE.faceBottom,
  shadow: STONE_STEP_PALETTE.shadow,
  rune: "rgba(239, 68, 68, 0.4)",
  tint: STONE_STEP_PALETTE.tint,
};

export function createEnemyMaterial(): THREE.MeshStandardMaterial {
  return createStepMaterial(RED_ENEMY_PALETTE);
}

const RED_EDGE_STEP_PALETTE: StepPalette = {
  highlight: "#ef4444",
  faceTop: "#7f1d1d",
  faceBottom: "#450a0a",
  shadow: "#1c0505",
  rune: "rgba(239, 68, 68, 0.4)",
  tint: "#fecaca",
};

const GREEN_EDGE_STEP_PALETTE: StepPalette = { highlight: '#4ade80', faceTop: STONE_STEP_PALETTE.faceTop, faceBottom: STONE_STEP_PALETTE.faceBottom, shadow: STONE_STEP_PALETTE.shadow, rune: 'rgba(74,222,128,0.4)', tint: STONE_STEP_PALETTE.tint };

export function createTogglableStairMaterial(extended: boolean): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();
  
  const liftColorUrl = new URL("./textures/lift/lift_col.png", import.meta.url).href;
  const liftNormalUrl = new URL("./textures/lift/lift_nrm.png", import.meta.url).href;
  
  const colorTexture = textureLoader.load(liftColorUrl);
  const normalTexture = textureLoader.load(liftNormalUrl);
  
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

export function createCollapsingStairMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();
  
  const liftColorUrl = new URL("./textures/lift/lift_col.png", import.meta.url).href;
  const liftNormalUrl = new URL("./textures/lift/lift_nrm.png", import.meta.url).href;
  
  const colorTexture = textureLoader.load(liftColorUrl);
  const normalTexture = textureLoader.load(liftNormalUrl);
  
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

export function createDoorFrameMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();
  
  const liftColorUrl = new URL("./textures/lift/lift_col.png", import.meta.url).href;
  const liftNormalUrl = new URL("./textures/lift/lift_nrm.png", import.meta.url).href;
  
  const colorTexture = textureLoader.load(liftColorUrl);
  const normalTexture = textureLoader.load(liftNormalUrl);
  
  colorTexture.wrapS = THREE.ClampToEdgeWrapping;
  colorTexture.wrapT = THREE.ClampToEdgeWrapping;
  normalTexture.wrapS = THREE.ClampToEdgeWrapping;
  normalTexture.wrapT = THREE.ClampToEdgeWrapping;
  
  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    roughness: 0.5,
    metalness: 0.3,
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
  return new THREE.CanvasTexture(canvas);
}

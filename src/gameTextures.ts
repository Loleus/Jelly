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

export function createElevatorRailMaterial(): THREE.MeshStandardMaterial {
  return createDoorFrameMaterial();
}

export function createDoorMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const liftColorUrl = "/textures/door/door_col.jpg";
  const liftNormalUrl = "/textures/door/door_nrm.jpg";

  const colorTexture = configureColorMap(textureLoader.load(liftColorUrl));
  const normalTexture = configureNormalMap(textureLoader.load(liftNormalUrl));

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(5.0, 5.0),
    roughness: 1.0,
    metalness: 0.01,
  });
}

export function createDoorFrameMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const liftColorUrl = "/textures/step/STEP_col.jpg";
  const liftNormalUrl = "/textures/step/STEP_nrm.jpg";

  const repeat: [number, number] = [0.5, 0.9];

  const texture = configureColorMap(textureLoader.load(liftColorUrl), {
    wrapS: THREE.RepeatWrapping,
    wrapT: THREE.RepeatWrapping,
    repeat,
    anisotropy: 7,
  });

  const normalTexture = configureNormalMap(textureLoader.load(liftNormalUrl), {
    wrapS: THREE.RepeatWrapping,
    wrapT: THREE.RepeatWrapping,
    repeat,
    anisotropy: 7,
  });

  return new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(30.0, 30.0),
    roughness: 1.0,
    metalness: 0.1,
  });
}

export function createTowerMaterial(
  loader?: THREE.TextureLoader,
  _radius: number = 6.12,
  _height: number = 52
): THREE.Material {
  const textureLoader = loader ?? new THREE.TextureLoader();

  const wallColorTextureUrl = "/textures/wall/WALL_col.jpg";
  const wallNormalTextureUrl = "/textures/wall/WALL_nrm.jpg";

  const repeatU = 7;
  const repeatV = Math.max(1, Math.ceil((_height || 52) / 6));
  const repeat: [number, number] = [repeatU, repeatV];

  const texture = configureColorMap(textureLoader.load(wallColorTextureUrl), {
    wrapS: THREE.RepeatWrapping,
    wrapT: THREE.RepeatWrapping,
    repeat,
    anisotropy: 7,
  });

  const normalTexture = configureNormalMap(textureLoader.load(wallNormalTextureUrl), {
    wrapS: THREE.RepeatWrapping,
    wrapT: THREE.RepeatWrapping,
    repeat,
    anisotropy: 7,
  });

  return new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(3.85, 3.85),
    roughness: 1.0,
    metalness: 0.18,
  });
}

// --- STAIRS MATERIAL ----------------------------------------------------------

export function createStairsMaterial(loader?: THREE.TextureLoader): THREE.Material {
  const textureLoader = loader || new THREE.TextureLoader();

  const stepColorUrl = "/textures/step/STEP_col.jpg";
  const stepNormalUrl = "/textures/step/STEP_nrm.jpg";

  const colorTexture = configureColorMap(textureLoader.load(stepColorUrl));
  const normalTexture = configureNormalMap(textureLoader.load(stepNormalUrl));

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(20, 20),
    roughness: 1.0,
    metalness: 0.07,
  });
}

// --- ELEVATOR MATERIAL ----------------------------------------------------------

export function createElevatorMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const liftColorUrl = "/textures/lift/STEP_col.png";
  const liftNormalUrl = "/textures/lift/STEP_nrm.png";

  const colorTexture = configureColorMap(textureLoader.load(liftColorUrl));
  const normalTexture = configureNormalMap(textureLoader.load(liftNormalUrl));

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(3, 3),
    roughness: 1.0,
    metalness: 0.2,
  });
}

// --- ENEMY MATERIAL ----------------------------------------------------------

export function createEnemyMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const enemyColorUrl = "/textures/enemy/ENEMY_col.jpg";
  const enemyNormalUrl = "/textures/enemy/ENEMY_nrm.jpg";

  const colorTexture = textureLoader.load(enemyColorUrl);
  const normalTexture = textureLoader.load(enemyNormalUrl);

  colorTexture.wrapS = THREE.ClampToEdgeWrapping;
  colorTexture.wrapT = THREE.ClampToEdgeWrapping;
  normalTexture.wrapS = THREE.ClampToEdgeWrapping;
  normalTexture.wrapT = THREE.ClampToEdgeWrapping;

  return new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    normalScale: new THREE.Vector2(3.4, 3.4),
    roughness: 1.0,
    metalness: 0.1,
  });
}

// --- COLLAPSING STAIR ----------------------------------------------------------

export function createCollapsingStairMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const colUrl = "/textures/collapse/STEP_col.jpg";
  const nrmUrl = "/textures/collapse/STEP_nrm.jpg";

  const map = configureColorMap(textureLoader.load(colUrl));
  const normalMap = configureNormalMap(textureLoader.load(nrmUrl));

  return new THREE.MeshStandardMaterial({
    map,
    normalMap,
    normalScale: new THREE.Vector2(5, 5),
    roughness: 0.6,
    metalness: 0.2,
  });
}

// --- TOGGLABLE STAIR ----------------------------------------------------------

export function createTogglableStairMaterial(): THREE.MeshStandardMaterial {
  const textureLoader = new THREE.TextureLoader();

  const colUrl = "/textures/step/STEP_col.jpg";
  const nrmUrl = "/textures/step/STEP_nrm.jpg";

  const map = configureColorMap(textureLoader.load(colUrl));
  const normalMap = configureNormalMap(textureLoader.load(nrmUrl));

  return new THREE.MeshStandardMaterial({
    map,
    normalMap,
    normalScale: new THREE.Vector2(20, 20),
    roughness: 0.6,
    metalness: 0.2,
  });
}

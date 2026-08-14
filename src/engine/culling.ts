import * as THREE from "three";

export class TowerCullingManager {
  private frustum: THREE.Frustum = new THREE.Frustum();
  private projScreenMatrix: THREE.Matrix4 = new THREE.Matrix4();
  private tempSphere: THREE.Sphere = new THREE.Sphere();
  private tempVec: THREE.Vector3 = new THREE.Vector3();

  // Angular cutoff for back-of-tower occlusion (radians).
  // Tower radius = 6.0, Platform radius = 7.1, Camera distance ≈ 18.0.
  // The tangent visibility cone is ±110° (1.92 rad). Anything > 2.0 rad is safely hidden behind the tower shaft.
  public maxAngularSpread: number = 2.05; // ~117 degrees
  public verticalSpread: number = 38.0; // Generous vertical window ensuring all visible steps are rendered
  public cullingEnabled: boolean = true;

  public updateFrustum(camera: THREE.Camera) {
    this.projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    this.frustum.setFromProjectionMatrix(this.projScreenMatrix);
  }

  /**
   * Fast Cylindrical Tower Occlusion + Vertical Window + Frustum Test
   */
  public isItemVisible(
    itemTheta: number,
    itemY: number,
    itemRadius: number,
    itemBoundingRadius: number,
    cameraTheta: number,
    cameraY: number
  ): boolean {
    if (!this.cullingEnabled) return true;

    // 1. Vertical Window Test (generous window to never clip platforms in flight/view)
    if (Math.abs(itemY - cameraY) > this.verticalSpread + itemBoundingRadius) {
      return false;
    }

    // 2. Angular Occlusion behind the solid tower cylinder
    // Normalize angular difference to [-PI, PI]
    let dTheta = (itemTheta - cameraTheta) % (Math.PI * 2);
    if (dTheta > Math.PI) dTheta -= Math.PI * 2;
    if (dTheta < -Math.PI) dTheta += Math.PI * 2;

    const angularThreshold = this.maxAngularSpread + itemBoundingRadius / itemRadius;
    if (Math.abs(dTheta) > angularThreshold) {
      // Confirmed 100% hidden behind the solid stone tower shaft
      return false;
    }

    // 3. Frustum Sphere intersection test
    const wx = Math.sin(itemTheta) * itemRadius;
    const wz = Math.cos(itemTheta) * itemRadius;
    this.tempVec.set(wx, itemY, wz);
    this.tempSphere.set(this.tempVec, Math.max(itemBoundingRadius, 2.5));

    return this.frustum.intersectsSphere(this.tempSphere);
  }
}

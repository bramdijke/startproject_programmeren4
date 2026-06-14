import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "../resources.js";

export class Background extends Actor {
  constructor(startX) {
    super({
      x: startX,
      y: 360,
      width: 1280,
      height: 720,
      z: -1,
      collisionType: CollisionType.PreventCollision,
    });
    this.startX = startX;
  }

  onInitialize() {
    const sprite = Resources.Background.toSprite();
    this.graphics.use(sprite);

    this.graphics.current.scale = new Vector(
      this.width / sprite.width,
      this.height / sprite.height,
    );
  }

  onPreUpdate(engine) {
    const camX = engine.currentScene.camera.pos.x;

    // 1. PARALLAX: Closer to 1.0 means it scrolls slower across the screen
    this.pos.x = this.startX + camX * 0.7;

    // 2. LEAPFROG: If the camera gets a full image-width ahead, snap the image forward!
    if (camX - this.pos.x > this.width) {
      this.startX += this.width * 2;
    }
  }
}

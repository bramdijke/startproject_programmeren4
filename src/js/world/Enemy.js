import { Actor, CollisionType, vec } from "excalibur";

export class Enemy extends Actor {
  constructor(config) {
    super({
      name: config.name ?? "enemy",
      pos: vec(config.x, config.y),
      width: config.width ?? 64,
      height: config.height ?? 64,
      collisionType: config.collisionType ?? CollisionType.Fixed,
    });
  }

  onInitialize(engine) {
    if (this.sprite) {
      this.graphics.use(this.sprite);
      this.graphics.current.scale = vec(
        this.width / this.sprite.width,
        this.height / this.sprite.height,
      );
    }
  }
}

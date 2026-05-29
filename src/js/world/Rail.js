import { Actor, CollisionType } from "excalibur";
import { Resources } from "../resources.js";

export class Rail extends Actor {
  constructor(x, y) {
    super({
      x: x,
      y: y,
      width: 64,
      height: 64,
      collisionType: CollisionType.Fixed,
    });
  }

  onInitialize() {
    this.graphics.use(Resources.RailTile.toSprite());
  }
}

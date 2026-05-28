import { Actor, CollisionType } from "excalibur";
import { Resources } from "../resources.js";

export class Minecart extends Actor {
  constructor(x, y) {
    super({
      x: x,
      y: y,
      width: 64, 
      height: 64, 

      // This makes the cart affected by gravity and physical collisions!
      collisionType: CollisionType.Active,
    });
  }

  onInitialize() {
    this.graphics.use(Resources.Minecart.toSprite());

    this.body.bounciness = 0.0; 
    this.body.friction = 0.1; 
  }
}

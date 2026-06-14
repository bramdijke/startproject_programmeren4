import { Actor, CollisionType, Keys } from "excalibur";
import { Resources } from "../resources.js";
import { Rock } from "../world/Rock.js"; // <-- ADD THIS IMPORT

export class Minecart extends Actor {
  constructor(x, y) {
    super({
      x: x,
      y: y,
      width: 64,
      height: 64,
      collisionType: CollisionType.Active,
    });

    this.jumpForce = -600;
    this.forwardSpeed = 200;
  }

  onInitialize(engine) {
    this.graphics.use(Resources.Minecart.toSprite());
    this.vel.x = this.forwardSpeed;

    console.log("Minecart collisionType:", this.body.collisionType);

    this.on("collisionstart", (evt) => {
      console.log("collisionstart event:", evt);
      console.log("other:", evt.other);

      const otherActor = evt.other.owner ?? evt.other;
      console.log("otherActor.name:", otherActor.name);

      if (otherActor.name === "rock") {
        engine.goToScene("gameover");
        console.log("Jaa");
      }
    });
  }

  onPreUpdate(engine) {
    this.vel.x = this.forwardSpeed;

    const jumpPressed = engine.input.keyboard.wasPressed(Keys.Space);

    const isGrounded = Math.abs(this.vel.y) < 1;

    if (jumpPressed && isGrounded) {
      this.vel.y = this.jumpForce;

      if (!Resources.JumpSound.isPlaying()) {
        Resources.JumpSound.volume = 0.3;
        Resources.JumpSound.play();
      }
    }

    if (this.pos.y > 700) {
      engine.goToScene("title");
    }
  }
}

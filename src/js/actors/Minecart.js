import { Actor, CollisionType, Keys } from "excalibur";
import { Resources } from "../resources.js";

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
    // Set sprite
    this.graphics.use(Resources.Minecart.toSprite());

    // Set initial speed
    this.vel.x = this.forwardSpeed;
  }

  onPreUpdate(engine) {
    // 1. Force the cart to always move forward
    this.vel.x = this.forwardSpeed;

    // 2. Check if the spacebar was just pressed
    const jumpPressed = engine.input.keyboard.wasPressed(Keys.Space);

    // 3. Check if grounded (Y-velocity is resting at basically 0)
    const isGrounded = Math.abs(this.vel.y) < 1;

    // 4. JUMP AND SOUND LOGIC
    if (jumpPressed && isGrounded) {
      this.vel.y = this.jumpForce;

      // Only play the sound if we actually jumped!
      if (!Resources.JumpSound.isPlaying()) {
        Resources.JumpSound.volume = 0.3;
        Resources.JumpSound.play();
      }
    }

    // 5. Game Over check (falling in a pit)
    if (this.pos.y > 700) {
      // Send them back to the start if they fall off the track
      engine.goToScene("title");
    }
  }
}

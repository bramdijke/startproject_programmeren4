import { Actor, CollisionType, Color, vec } from "excalibur";
import { Resources } from "../resources";
export class Rock extends Actor {
  constructor(x, y) {
    super({
      // We subtract from the Y position so the rock sits ON TOP of the rail,
      // instead of clipping directly inside the middle of it.
      pos: vec(x, y - 64),
      width: 64,
      height: 64,
      collisionType: CollisionType.Fixed,
    });
  }

  onInitialize(engine) {
    // 1. Convert your image resource into a usable sprite
    const rockSprite = Resources.Rock.toSprite();

    // 2. Set the graphics to use your new sprite
    this.graphics.use(rockSprite);

    // OPTIONAL: If the original image file is way too big (like 500x500 pixels),
    // this line forces the image to shrink down to perfectly fit your 64x64 hitbox!
    this.graphics.current.scale = vec(
      this.width / rockSprite.width,
      this.height / rockSprite.height,
    );
  }
}

import { CollisionType, vec } from "excalibur";
import { Resources } from "../resources";
import { Enemy } from "./Enemy.js";

export class Rock extends Enemy {
  constructor(x, y) {
    super({
      name: "rock",
      x: x,
      y: y - 64,
      width: 64,
      height: 64,
      collisionType: CollisionType.Fixed,
    });

    this.sprite = Resources.Rock.toSprite();
  }
}

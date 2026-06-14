import { Scene } from "excalibur";
import { Minecart } from "../actors/minecart.js";
import { Rail } from "../world/rail.js";
import { Background } from "../world/background.js";
import { Score } from "../ui/Score.js";
import { Resources } from "../resources.js";
import { Rock } from "../world/Rock.js";

export class LevelScene extends Scene {
  onActivate(context) {
    // Enable looping so the song repeats forever
    Resources.BackgroundMusic.loop = true;
    Resources.BackgroundMusic.volume = 0.5;
    Resources.BackgroundMusic.play();
  }

  onDeactivate(context) {
    Resources.BackgroundMusic.stop();
  }
  onInitialize(engine) {

    this.bg1 = new Background(0);
    this.bg2 = new Background(1280);
    this.add(this.bg1);
    this.add(this.bg2);

    this.cart = new Minecart(100, 300);
    this.add(this.cart);

    this.scoreUI = new Score(20, 20);
    this.add(this.scoreUI);

    this.trackRightEdge = -700;
    this.lastRockSpawnX = 0;
    this.spawnTrackChunk();
  }

  onPreUpdate(engine) {
    // The camera and track spawning logic stays here
    this.camera.pos.x = this.cart.pos.x + 400;

    if (this.cart.pos.x + 1500 > this.trackRightEdge) {
      this.spawnTrackChunk();
    }
  }

  spawnTrackChunk() {
    // 2. SET A MINIMUM DISTANCE: 
    // 384 pixels is exactly 6 track tiles (64 * 6). 
    // This gives the player enough time to land from a jump!
    const minimumDistance = 384; 

    for (let i = 0; i < 20; i++) {
      const rail = new Rail(this.trackRightEdge, 500);
      this.add(rail);

      if (Math.random() < 0.10 && this.trackRightEdge > 1000) {        
        if (this.trackRightEdge - this.lastRockSpawnX > minimumDistance) {
          const rock = new Rock(this.trackRightEdge, 500);
          this.add(rock);
          this.lastRockSpawnX = this.trackRightEdge;
        }
      }
      this.trackRightEdge += 64;
    }
  }
}


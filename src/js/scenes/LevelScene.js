import { Scene } from "excalibur";
import { Minecart } from "../actors/Minecart.js";
import { Rail } from "../world/Rail.js";
import { Background } from "../world/Background.js";
import { Score } from "../ui/Score.js";
import { Resources } from "../resources.js";
import { Rock } from "../world/Rock.js";
// import { Bat } from "../world/Bat.js";

export class LevelScene extends Scene {
  onActivate(context) {
    Resources.BackgroundMusic.loop = true;
    Resources.BackgroundMusic.volume = 0.5;
    Resources.BackgroundMusic.play();

    this.resetLevel();
  }

  onDeactivate(context) {
    Resources.BackgroundMusic.stop();
  }

  onInitialize(engine) {
    this.engine = engine;

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

  resetLevel() {
    this.clear();

    // Re-add background
    this.bg1 = new Background(0);
    this.bg2 = new Background(1280);
    this.add(this.bg1);
    this.add(this.bg2);

    // Reset cart position
    this.cart = new Minecart(100, 300);
    this.add(this.cart);

    // Reset score UI
    this.scoreUI = new Score(20, 20);
    this.add(this.scoreUI);

    // Reset track spawning state
    this.trackRightEdge = -700;
    this.lastRockSpawnX = 0;
    this.spawnTrackChunk();

    // Reset camera position
    this.camera.pos.x = this.cart.pos.x + 400;
  }

  onPreUpdate(engine) {
    this.camera.pos.x = this.cart.pos.x + 400;

    if (this.cart.pos.x + 1500 > this.trackRightEdge) {
      this.spawnTrackChunk();
    }
  }

  spawnTrackChunk() {
    const minimumDistance = 384;

    for (let i = 0; i < 20; i++) {
      const rail = new Rail(this.trackRightEdge, 500);
      this.add(rail);

      if (Math.random() < 0.1 && this.trackRightEdge > 1000) {
        if (this.trackRightEdge - this.lastRockSpawnX > minimumDistance) {
          const rock = new Rock(this.trackRightEdge, 500);
          this.add(rock);
          this.lastRockSpawnX = this.trackRightEdge;
        }
      }

    //   if (Math.random() < 0.03 && this.trackRightEdge > 1500) {
    //     const bat = new Bat(this.trackRightEdge, 380); 
    //     this.add(bat);
    //   }

      this.trackRightEdge += 64;
    }
  }
}

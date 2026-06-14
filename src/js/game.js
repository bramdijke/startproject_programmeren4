import "../css/style.css";
import { Engine, DisplayMode, vec } from "excalibur";
import { ResourceLoader } from "./resources.js";
import { TitleScene } from "./scenes/TitleScene.js";
import { LevelScene } from "./scenes/LevelScene.js";
import { GameOverScene } from "./scenes/GameOverScene.js";

export class Game extends Engine {
  constructor() {
    super({
      width: 1280,
      height: 720,
      maxFps: 60,
      displayMode: DisplayMode.FitScreen,
      physics: {
        gravity: vec(0, 1200),
      },
    });

    this.addScene("title", new TitleScene());
    this.addScene("level", new LevelScene());
    this.addScene("gameover", new GameOverScene());

    this.start(ResourceLoader).then(() => {
      this.goToScene("title");
    });
  }
}

new Game();

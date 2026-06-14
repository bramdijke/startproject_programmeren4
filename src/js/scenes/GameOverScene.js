import { Scene, Label, Font, Color, Vector, Keys } from "excalibur";

export class GameOverScene extends Scene {
  onInitialize(engine) {
    const gameOverLabel = new Label({
      text: "GAME OVER",
      pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight - 50),
      font: new Font({
        family: "sans-serif",
        size: 64,
        color: Color.Red,
        bold: true,
        textAlign: "center",
      }),
    });
    this.add(gameOverLabel);

    const restartLabel = new Label({
      text: "Press SPACE to Try Again",
      pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight + 50),
      font: new Font({
        family: "sans-serif",
        size: 32,
        color: Color.White,
        textAlign: "center",
      }),
    });
    this.add(restartLabel);
  }

  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(Keys.Space)) {
      engine.goToScene("level");
    }
  }
}

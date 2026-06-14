import { Scene, Label, Font, Color, Vector, Keys } from "excalibur";

export class TitleScene extends Scene {
  onInitialize(engine) {
    const titleLabel = new Label({
      text: "MINECART MADNESS",
      pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight - 50),
      font: new Font({
        family: "sans-serif",
        size: 64,
        color: Color.White,
        bold: true,
        textAlign: "center", // Centers the text exactly on the position
      }),
    });
    this.add(titleLabel);

    const startLabel = new Label({
      text: "Press SPACE to Start",
      pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight + 50),
      font: new Font({
        family: "sans-serif",
        size: 32,
        color: Color.Yellow,
        textAlign: "center",
      }),
    });
    this.add(startLabel);
  }

  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(Keys.Space)) {
      engine.goToScene("level");
    }
  }
}

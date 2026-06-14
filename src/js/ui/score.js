import { Label, Font, Color, Vector, CoordPlane } from "excalibur";

export class Score extends Label {
  constructor(x, y) {
    super({
      text: "Score: 0",
      pos: new Vector(x, y),
      font: new Font({
        family: "'Press Start 2P', cursive",
        size: 20, // You might need to lower the size, pixel fonts are usually big!
        color: Color.White,
        bold: true,
      }),
      z: 100, // Ensures it renders on top of the backgrounds and tracks
    });

    // CRITICAL: This locks the UI to the screen so the camera doesn't leave it behind
    this.transform.coordPlane = CoordPlane.Screen;

    this.currentScore = 0;
    this.isAlive = true;
  }

  onPreUpdate(engine, delta) {
    if (this.isAlive) {
      // 'delta' is the time in milliseconds since the last frame.
      // Multiplying by 0.01 roughly gives you 10 points per second.
      // Increase this multiplier if you want the score to go up faster!
      this.currentScore += delta * 0.01;

      // Update the label text with a nice, rounded whole number
      this.text = `Score: ${Math.floor(this.currentScore)}`;
    }
  }

  // You can call this method later when the cart hits an obstacle
  gameOver() {
    this.isAlive = false;
  }
}

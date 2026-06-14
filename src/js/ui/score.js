import { Label, Font, Color, Vector, CoordPlane } from "excalibur";

export class Score extends Label {
  constructor(x, y) {
    super({
      text: "Score: 0",
      pos: new Vector(x, y),
      font: new Font({
        family: "'Press Start 2P', cursive",
        size: 20,
        color: Color.White,
        bold: true,
      }),
      z: 100,
    });

    this.transform.coordPlane = CoordPlane.Screen;

    this.currentScore = 0;
    this.isAlive = true;

    // Load high score from localStorage (defaults to 0 if none saved)
    this.highScore = Number(localStorage.getItem("highScore")) || 0;
  }

  onPreUpdate(engine, delta) {
    if (this.isAlive) {
      this.currentScore += delta * 0.01;

      this.text = `Score: ${Math.floor(this.currentScore)} | High Score: ${Math.floor(this.highScore)}`;
    }
  }

  // Call this when the cart hits an obstacle
  gameOver() {
    this.isAlive = false;

    // Check and save new high score
    if (this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
      localStorage.setItem("highScore", Math.floor(this.highScore));
    }
  }
}

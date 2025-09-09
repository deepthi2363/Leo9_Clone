import React, { useState } from "react";
import Sketch from "react-p5";
import p5Types from "p5";

export default function HeroAnimation() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  class LionShape {
    constructor(p) {
      this.p = p;
                  this.finalPositions = [
                    // Face features
                    { pos: createVector(0, 0), color: '#EE82EE', size: 9.6 }, // Nose (middle, violet)
                    { pos: createVector(-25, -25), color: '#000000', size: 6.4 }, // Left eye (black)
                    { pos: createVector(25, -25), color: '#000000', size: 6.4 }, // Right eye (black)
                    { pos: createVector(-30, -35), color: '#ff8080', size: 4.8 }, // Left eyebrow (light red)
                    { pos: createVector(30, -35), color: '#99ccff', size: 4.8 }, // Right eyebrow (light blue)
                    { pos: createVector(-40, 15), color: '#ff8080', size: 4.8 }, // Left whisker top (light red)
                    { pos: createVector(40, 15), color: '#99ccff', size: 4.8 }, // Right whisker top (light blue)
                    { pos: createVector(-40, 30), color: '#ff8080', size: 4.8 }, // Left whisker middle (light red)
                    { pos: createVector(40, 30), color: '#99ccff', size: 4.8 }, // Right whisker middle (light blue)
                    { pos: createVector(-40, 45), color: '#ff8080', size: 4.8 }, // Left whisker bottom (light red)
                    { pos: createVector(40, 45), color: '#99ccff', size: 4.8 }, // Right whisker bottom (light blue)
                    { pos: createVector(-20, 55), color: '#ff8080', size: 4.8 }, // Left mouth corner (light red)
                    { pos: createVector(20, 55), color: '#99ccff', size: 4.8 }, // Right mouth corner (light blue)

                    // Inner Mane
                    { pos: createVector(-55, -55), color: '#ff8080', size: 6.4 }, // Left ear top (light red)
                    { pos: createVector(55, -55), color: '#99ccff', size: 6.4 }, // Right ear top (light blue)
                    { pos: createVector(-75, -15), color: '#ff8080', size: 6.4 }, // Left mid-upper mane (light red)
                    { pos: createVector(75, -15), color: '#99ccff', size: 6.4 }, // Right mid-upper mane (light blue)
                    { pos: createVector(-75, 25), color: '#ff8080', size: 6.4 }, // Left mid-lower mane (light red)
                    { pos: createVector(75, 25), color: '#99ccff', size: 6.4 }, // Right mid-lower mane (light blue)
                    { pos: createVector(-55, 65), color: '#ff8080', size: 6.4 }, // Left lower mane (light red)
                    { pos: createVector(55, 65), color: '#99ccff', size: 6.4 }, // Right lower mane (light blue)

                    // Outer Mane
                    { pos: createVector(-110, -80), color: '#ff8080', size: 8 }, // Top left mane (light red)
                    { pos: createVector(110, -80), color: '#99ccff', size: 8 }, // Top right mane (light blue)
                    { pos: createVector(-130, -40), color: '#ff8080', size: 8 }, // Upper left mane (light red)
                    { pos: createVector(130, -40), color: '#99ccff', size: 8 }, // Upper right mane (light blue)
                    { pos: createVector(-140, 0), color: '#ff8080', size: 8 }, // Mid left mane (light red)
                    { pos: createVector(140, 0), color: '#99ccff', size: 8 }, // Mid right mane (light blue)
                    { pos: createVector(-130, 40), color: '#ff8080', size: 8 }, // Lower left mane (light red)
                    { pos: createVector(130, 40), color: '#99ccff', size: 8 }, // Lower right mane (light blue)
                    { pos: createVector(-110, 80), color: '#ff8080', size: 8 }, // Bottom left mane (light red)
                    { pos: createVector(110, 80), color: '#99ccff', size: 8 }, // Bottom right mane (light blue)
                    { pos: createVector(-80, 100), color: '#ff8080', size: 8 }, // Bottom left spike (light red)
                    { pos: createVector(80, 100), color: '#99ccff', size: 8 }, // Bottom right spike (light blue)
                    { pos: createVector(0, 110), color: '#EE82EE', size: 8 }, // Bottom center mane (violet)
                    { pos: createVector(-50, -100), color: '#ff8080', size: 8 }, // Top left spike (light red)
                    { pos: createVector(50, -100), color: '#99ccff', size: 8 } // Top right spike (light blue)
                ];

                this.edges = [
                    // Face outline
                    [0, 1], [0, 2], [1, 3], [2, 4], [1, 5], [2, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 12],
                    // Inner mane loop
                    [13, 15], [15, 17], [17, 19], [19, 20], [20, 18], [18, 16], [16, 14], [14, 13],
                    // Outer mane loop
                    [21, 23], [23, 25], [25, 27], [27, 29], [29, 31], [31, 32], [32, 30], [30, 28], [28, 26], [26, 24], [24, 22], [22, 34], [34, 21],
                    // Connect face to inner mane
                    [0, 15], [0, 16], [1, 13], [2, 14], [9, 17], [10, 18], [11, 19], [12, 20],
                    // Connect inner to outer mane
                    [13, 21], [14, 22], [15, 23], [16, 24], [17, 25], [18, 26], [19, 27], [20, 28]
                ];

      this.animationProgress = 0;
      this.initialPoints = [];
      for (let i = 0; i < this.finalPositions.length; i++) {
        const radius = Math.random() * 5 + 5;
        const angle = Math.random() * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        this.initialPoints.push(p.createVector(x, y));
      }
    }

    update() {
      if (this.animationProgress < 1) {
        this.animationProgress += 0.005;
      }
    }

    display() {
      const p = this.p;
      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.scale(1.6);

      for (let i = 0; i < this.finalPositions.length; i++) {
        const finalPos = this.finalPositions[i].pos;
        const initialPos = this.initialPoints[i];
        const currentPos = p5.Vector.lerp(initialPos, finalPos, this.animationProgress);

        let dotColor = this.finalPositions[i].color;
        if (i === 1 || i === 2) {
          dotColor = isDarkMode ? "#FFFFFF" : "#000000";
        }
        p.fill(dotColor);
        p.noStroke();
        p.circle(currentPos.x, currentPos.y, this.finalPositions[i].size);
      }

      if (this.animationProgress > 0.4) {
        const lineOpacity = p.map(this.animationProgress, 0.4, 1, 0, 255);
        p.stroke(0, lineOpacity);
        p.strokeWeight(1);
        p.drawingContext.setLineDash([5, 5]);
        for (let edge of this.edges) {
          if (edge[0] < this.finalPositions.length && edge[1] < this.finalPositions.length) {
            const startPoint = this.finalPositions[edge[0]].pos;
            const endPoint = this.finalPositions[edge[1]].pos;
            const currentStart = p5.Vector.lerp(this.initialPoints[edge[0]], startPoint, this.animationProgress);
            const currentEnd = p5.Vector.lerp(this.initialPoints[edge[1]], endPoint, this.animationProgress);
            p.line(currentStart.x, currentStart.y, currentEnd.x, currentEnd.y);
          }
        }
        p.drawingContext.setLineDash([]);
      }
      p.pop();
    }
  }

  let myLion;

  const setup = (p, canvasParentRef) => {
    p.createCanvas(p.windowWidth / 2, p.windowHeight / 2).parent(canvasParentRef);
    myLion = new LionShape(p);
  };

  const draw = (p) => {
    p.background(isDarkMode ? "#1A1A1A" : "#FFFFFF");
    myLion.update();
    myLion.display();
  };

  const windowResized = (p) => {
    p.resizeCanvas(p.windowWidth / 2, p.windowHeight / 2);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
}

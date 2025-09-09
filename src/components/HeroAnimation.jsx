import React, { useEffect, useRef } from "react";
import p5 from "p5";

export default function HeroAnimation() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let myLion;
      let isDarkMode = false;

      class LionShape {
        constructor() {
          this.finalPositions = [
            { pos: p.createVector(0, 0), color: '#EE82EE', size: 9.6 }, 
            { pos: p.createVector(-25, -25), color: '#000000', size: 6.4 }, 
            { pos: p.createVector(25, -25), color: '#000000', size: 6.4 },
            { pos: p.createVector(-30, -35), color: '#ff8080', size: 4.8 },
            { pos: p.createVector(30, -35), color: '#99ccff', size: 4.8 },
            { pos: p.createVector(-40, 15), color: '#ff8080', size: 4.8 },
            { pos: p.createVector(40, 15), color: '#99ccff', size: 4.8 },
            { pos: p.createVector(-40, 30), color: '#ff8080', size: 4.8 },
            { pos: p.createVector(40, 30), color: '#99ccff', size: 4.8 },
            { pos: p.createVector(-40, 45), color: '#ff8080', size: 4.8 },
            { pos: p.createVector(40, 45), color: '#99ccff', size: 4.8 },
            { pos: p.createVector(-20, 55), color: '#ff8080', size: 4.8 },
            { pos: p.createVector(20, 55), color: '#99ccff', size: 4.8 },
            { pos: p.createVector(-55, -55), color: '#ff8080', size: 6.4 },
            { pos: p.createVector(55, -55), color: '#99ccff', size: 6.4 },
            { pos: p.createVector(-75, -15), color: '#ff8080', size: 6.4 },
            { pos: p.createVector(75, -15), color: '#99ccff', size: 6.4 },
            { pos: p.createVector(-75, 25), color: '#ff8080', size: 6.4 },
            { pos: p.createVector(75, 25), color: '#99ccff', size: 6.4 },
            { pos: p.createVector(-55, 65), color: '#ff8080', size: 6.4 },
            { pos: p.createVector(55, 65), color: '#99ccff', size: 6.4 },
            { pos: p.createVector(-110, -80), color: '#ff8080', size: 8 },
            { pos: p.createVector(110, -80), color: '#99ccff', size: 8 },
            { pos: p.createVector(-130, -40), color: '#ff8080', size: 8 },
            { pos: p.createVector(130, -40), color: '#99ccff', size: 8 },
            { pos: p.createVector(-140, 0), color: '#ff8080', size: 8 },
            { pos: p.createVector(140, 0), color: '#99ccff', size: 8 },
            { pos: p.createVector(-130, 40), color: '#ff8080', size: 8 },
            { pos: p.createVector(130, 40), color: '#99ccff', size: 8 },
            { pos: p.createVector(-110, 80), color: '#ff8080', size: 8 },
            { pos: p.createVector(110, 80), color: '#99ccff', size: 8 },
            { pos: p.createVector(-80, 100), color: '#ff8080', size: 8 },
            { pos: p.createVector(80, 100), color: '#99ccff', size: 8 },
            { pos: p.createVector(0, 110), color: '#EE82EE', size: 8 },
            { pos: p.createVector(-50, -100), color: '#ff8080', size: 8 },
            { pos: p.createVector(50, -100), color: '#99ccff', size: 8 }
          ];

          this.edges = [
            [0, 1],[0, 2],[1, 3],[2, 4],[1, 5],[2, 6],[5, 7],[6, 8],[7, 9],[8, 10],[9, 11],[10, 12],[11, 12],
            [13, 15],[15, 17],[17, 19],[19, 20],[20, 18],[18, 16],[16, 14],[14, 13],
            [21, 23],[23, 25],[25, 27],[27, 29],[29, 31],[31, 32],[32, 30],[30, 28],[28, 26],[26, 24],[24, 22],[22, 34],[34, 21],
            [0, 15],[0, 16],[1, 13],[2, 14],[9, 17],[10, 18],[11, 19],[12, 20],
            [13, 21],[14, 22],[15, 23],[16, 24],[17, 25],[18, 26],[19, 27],[20, 28]
          ];

          this.animationProgress = 0;
          this.initialPoints = this.finalPositions.map(() => {
            const radius = p.random(5, 10);
            const angle = p.random(p.TWO_PI);
            return p.createVector(Math.cos(angle) * radius, Math.sin(angle) * radius);
          });
        }

        update() {
          if (this.animationProgress < 1) this.animationProgress += 0.005;
        }

        display() {
          p.push();
          p.translate(p.width / 2, p.height / 2);
          p.scale(1.6);

          this.finalPositions.forEach((dot, i) => {
            const currentPos = p5.Vector.lerp(this.initialPoints[i], dot.pos, this.animationProgress);
            let dotColor = dot.color;
            if (i === 1 || i === 2) dotColor = isDarkMode ? '#FFFFFF' : '#000000';
            p.fill(dotColor);
            p.noStroke();
            p.circle(currentPos.x, currentPos.y, dot.size);
          });

          if (this.animationProgress > 0.4) {
            const lineOpacity = p.map(this.animationProgress, 0.4, 1, 0, 255);
            p.stroke(0, lineOpacity);
            p.strokeWeight(1);
            p.drawingContext.setLineDash([5, 5]);
            this.edges.forEach(([a, b]) => {
              if (a < this.finalPositions.length && b < this.finalPositions.length) {
                const start = p5.Vector.lerp(this.initialPoints[a], this.finalPositions[a].pos, this.animationProgress);
                const end = p5.Vector.lerp(this.initialPoints[b], this.finalPositions[b].pos, this.animationProgress);
                p.line(start.x, start.y, end.x, end.y);
              }
            });
            p.drawingContext.setLineDash([]);
          }

          p.pop();
        }
      }

      p.setup = () => {
        p.createCanvas(sketchRef.current.offsetWidth, sketchRef.current.offsetHeight);
        p.clear();
        myLion = new LionShape();
      };

      p.draw = () => {
        //p.background(isDarkMode ? '#1A1A1A' : '#FFFFFF');
        p.clear();
        myLion.update();
        myLion.display();
      };

      p.windowResized = () => {
        p.resizeCanvas(sketchRef.current.offsetWidth, sketchRef.current.offsetHeight);
      };

      // Optional: toggle dark mode with click
      p.mousePressed = () => {
        isDarkMode = !isDarkMode;
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => myP5.remove(); // Cleanup on unmount
  }, []);

  return <div ref={sketchRef} className="w-full h-full rounded-2xl" />;
}

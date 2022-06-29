const SCALE = 0.7; 
const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

export default class LoginBlob {
  constructor(canvas) {
    this.wobbleIncrement = 0;
    // use this to change the size of the blob
    this.radius = 1000;
    // think of this as detail level
    // number of conections in the `bezierSkin`
    this.segments = 15;
    this.step = HALF_PI / this.segments;
    this.anchors = [];
    this.radii = [];
    this.thetaOff = [];

    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    const bumpRadius = 100;
    const halfBumpRadius = bumpRadius / 2;

    for (let i = 0; i < this.segments + 2; i++) {
      this.anchors.push(0, 0);
      this.radii.push(Math.random() * bumpRadius - halfBumpRadius);
      this.thetaOff.push(Math.random() * TWO_PI);
    }

    this.theta = 0;
    this.thetaRamp = 0;
    this.thetaRampDest = 12;
    this.rampDamp = 25;
  }
  update() {
    this.thetaRamp += (this.thetaRampDest - this.thetaRamp) / this.rampDamp;
    this.theta += 0.03;

    this.anchors = [0, this.radius];
    for (let i = 0; i <= this.segments + 2; i++) {
      const sine = Math.sin(this.thetaOff[i] + this.theta + this.thetaRamp);
      const rad = this.radius + this.radii[i] * sine;
      const x = rad * Math.sin(this.step * i);
      const y = rad * Math.cos(this.step * i);
      this.anchors.push(x, y);
    }

    const c = this.context;
    c.save();
    c.translate(0, 0);
    c.scale(SCALE, SCALE);
    c.fillStyle = "#303030";
    c.beginPath();
    c.moveTo(0, 0);
    this.bezierSkin(this.anchors, false);

    c.lineTo(0, 0);
    c.fill();
    c.restore();
  }
  // 
  loop() {
    const c = this.context;
    c.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.update();
    window.requestAnimationFrame(this.loop.bind(this));
  }  

  // array of xy coords, closed boolean
  bezierSkin(bez, closed = true) {
    const avg = this.calcAvgs(bez);
    const leng = bez.length;
    const c = this.context;
  
    if (closed) {
      c.moveTo(avg[0], avg[1]);
      for (let i = 2; i < leng; i += 2) {
        let n = i + 1;
        c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
      }
      c.quadraticCurveTo(bez[0], bez[1], avg[0], avg[1]);
    } else {
      c.moveTo(bez[0], bez[1]);
      c.lineTo(avg[0], avg[1]);
      for (let i = 2; i < leng - 2; i += 2) {
        let n = i + 1;
        c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
      }
      c.lineTo(bez[leng - 2], bez[leng - 1]);
    }
  }
  
  // create anchor points by averaging the control points
  calcAvgs(p) {
    const avg = [];
    const leng = p.length;
    let prev;
  
    for (let i = 2; i < leng; i++) {
      prev = i - 2;
      avg.push((p[prev] + p[i]) / 2);
    }
    // close
    avg.push((p[0] + p[leng - 2]) / 2, (p[1] + p[leng - 1]) / 2);
    return avg;
  }
}

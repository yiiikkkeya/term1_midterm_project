let alph = 100;
let number = 8000; 
let v = 0.0001;
let zoom = 100;
let a = 1;
let e = 5; 
let c = 20;
let n = 0;
let i = 0;
let d = 1;
let p = 1;
let r = 125;
let g = 125;
let b = 125;
let x, y;

function setup() {
  createCanvas(1200, 800);
  angleMode(DEGREES);
  background(0);
  frameRate(5);
}

function draw() {
  if (d > 0) {
    a = a + random(-0.04, 0.025);
    e = e + random(-0.02, 0.01);
    c = c + random(-0.05, 0.05);
    r = r + random(-10, 10);
    g = g + random(-20, 10);
    b = b + random(-10, 15);

    if ((shape = 1)) {
      if (a > 20) {
        a = 1.5;
      }
      if (a < 1.5) {
        a = 20;
      }
      if (e > 20) {
        e = 1.5;
      }
      if (e < 1.5) {
        e = 20;
      }
      if (c < 1) {
        c = 20;
      }
      if (c > 20) {
        c = 1;
      }
    }
    if ((shape = 2)) {
      if (a > 20) {
        a = 2.0;
      }
      if (a < 2.0) {
        a = 20;
      }
      if (e > 20) {
        e = 2.0;
      }
      if (e < 2.0) {
        e = 20;
      }
      if (c < 8) {
        c = 20;
      }
      if (c > 20) {
        c = 8;
      }
    }
    if (r > 256) {
      r = 0;
    }
    if (r < 0) {
      r = 256;
    }
    if (g < 0) {
      g = 256;
    }
    if (g > 256) {
      g = 0;
    }
    if (b > 256) {
      b = 0;
    }
    if (b < 0) {
      b = 256;
    }

    beginShape();
    for (var n = 0; n < number; n++) {
      if (shape == 1) {
        x = (a - e) * cos(n) + c * cos((a / e - 1) * n);
        y = (a - e) * sin(n) - c * sin((a / e - 1) * n);
      } else if (shape == 2) {
        x = (a + e) * cos(n) - c * cos((a / e + 1) * n);
        y = (a + e) * sin(n) - c * sin((a / e + 1) * n);
      }
      noFill();
      stroke(r, g, b, alph);
      strokeWeight(0.1);
      if (x > 0) {
        sketch = x;
      }
      vertex(width / 2  + x * zoom, height / 2  + y * zoom);
    }
    endShape();
    
    zoom = (width / 2 - 30) / sketch;
    i = i + v;
  }
}

  function keyPressed(){
  if(key === 'p');
  save("img.png");  
  
}

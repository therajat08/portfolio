let x = 0;
let y = 0;
let spacing = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(random(255));
  strokeWeight(random(6));
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing); //forward slash
  } else {
    line(x, y + spacing, x + spacing, y); //backward slash
  }

  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}

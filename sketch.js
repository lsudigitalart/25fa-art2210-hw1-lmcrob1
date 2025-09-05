function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);  // Light gray background
  
  // Set all ellipses to black
  fill(0);
  noStroke();
  
  // Draw three ellipses in a row
  ellipse(100, 200, 50, 50);
  ellipse(200, 200, 50, 50);
  ellipse(300, 200, 50, 50);
  ellipse(300, 100, 50, 25);
  ellipse(100, 100, 50, 25);
  ellipse(100, 300, 50, 25);
  ellipse(100, 200, 50, 25);
  ellipse(300, 300, 50, 25);
  ellipse(200, 100, 25, 80);
  ellipse(200, 300, 25, 80);
fill(255);
ellipse(200, 100, 80, 40);
ellipse(200, 200, 80, 20);
ellipse(200, 300, 80, 40);
ellipse(100, 200, 25, 80);
ellipse(300, 200, 25, 80);
}

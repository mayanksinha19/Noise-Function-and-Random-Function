var xOff = 0;
var yOff = 1000;

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(51);  

  //x = random(width);
  
  var x = map(noise(xOff),0,1,0,width);
  var y = map(noise(yOff),0,1,0,height);

  xOff += 0.03;
  yOff += 0.03;

  fill(255);
  ellipse(x,y,24,24);
 
}
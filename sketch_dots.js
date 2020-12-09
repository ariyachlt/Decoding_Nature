// Final: Speaker

// declaring variables to deal with audio input
let mic;
let micLevel;

// declaring color variables
let rd;           // red
let gr = 20;      // green
let bl = 180;     // blue

function setup() {
  createCanvas(680, 500);
  background(0);
  
// get audio input from computer mic and turn mic on
  mic = new p5.AudioIn();
  mic.start();
}

// function draws circle that changes color and size based on amplitude
// greater amplitude = more red and larger circle
function draw() {
  // get amplitude
  micLevel = mic.getLevel();
  
  // set value for red based on amplitude
  rd = 1000*micLevel
  
  if(rd > 225){
    rd = 225;
  }
      
  // drawing the circle with radius based on amplitude and stroke weight
  stroke(rd,gr,bl);
  fill(0,0,0)
  strokeWeight(micLevel * 100)
  ellipse(width/2, height/2, 100 + micLevel*2000)
}


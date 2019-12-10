let canvasWidth =800;
let canvasHeight=600;
let wait;
let end;
let time;

function preload() {
  wait = loadImage('wait.jpg');
  end = loadImage('end.jpg');
}

function setup()
{
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  time = random(10,30);
  createCanvas(800,600);
  textAlign(CENTER);
  textSize(50);
  text(int(time), width/2,height/2);
  image(wait,0,0);
}

function draw()
{
  background(255);
  if (frameCount % 60 == 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    time --;
  }
  if (time == 0) {
    image(end,0,0);
  }
}

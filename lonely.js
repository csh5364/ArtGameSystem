let canvasWidth =800;
let canvasHeight=600;
let time;

function setup()
{
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  time = random(10,30);
  createCanvas(800,600);
}

function draw()
{
  background(255);
  textAlign(CENTER);
  textSize(50);
  text(int(time), width/2,height/2);

  if (frameCount % 60 == 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    time --;
  }
}

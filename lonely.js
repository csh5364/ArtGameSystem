let canvasWidth =800;
let canvasHeight=420;
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
  time = random(1, 5);
  createCanvas(800,420);
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
  if (time == 0) {
    image(end,0,0);
  }
  else {
    image(wait,0,0);}
}

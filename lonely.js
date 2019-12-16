let canvasWidth =800;
let canvasHeight=420;
let wait_1;
let wait_2;
let end_1;
let end_2;
let time;

function preload() {
  image1 = loadImage('1.png');
  image2 = loadImage('2.png');
  image3 = loadImage('3.png');
  image4 = loadImage('4.png');

  let i = random(1,2);
}

function setup()
{
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  time = 5//random(1, 5);
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

  if (i == 1){
  if (time == 0) {
    image(image1,0,0);
  }
  else {
    image(image3,0,0);}
  }

  if (i == 2){
  if (time == 0) {
    image(image2,0,0);
  }
  else {
    image(image4,0,0);}
  }
}

let canvasWidth =800;
let canvasHeight=420;
let image1;
let image2;
let image3;
let image4;
let time;
//let i;
//var countdown;

function preload() {
  image1 = loadImage('1.png');
  image2 = loadImage('2.png');
  image3 = loadImage('3.png');
  image4 = loadImage('4.png');

  clock = loadSound("clock.mp3")
}

function setup()
{
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  //countdown = 10; //random(10, 60);
  time = 28; //random(1, 5);
  //i = 1 //random(1,2);
  createCanvas(800,420);

}

function draw()
{
  background(255);
  clock.play();
  textAlign(CENTER);
  textSize(50);
  text(int(time), width/2,height/2);

  /* deltaTime = 1/frameRate();
  countdown -= deltaTime;
  if (countdown <= 0) {
    image(image3,0,0);
  } else {image(image1,0,0);}
  */

  if (frameCount % 60 == 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    time --;
  }

  if (time == 0) {
    image(image4,0,0);
    clock.stop();
  }
  else {
    image(image2,0,0);
  }
}

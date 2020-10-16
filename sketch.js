var sun, sunimg;
var planet1, planet2, planet3, planet4, planet5;
var planet1img, planet2img, planet3img, planet4img, planet5img;
var backdropimg;
var backdrop;

function preload() {

  sunimg = loadImage('assets/sun.png');
  backdropimg = loadImage('assets/background.jpg');
  planet1img = loadImage('assets/planet1.png');
  planet2img = loadImage('assets/planet2.png');
  planet3img = loadImage('assets/planet3.png');
  planet4img = loadImage('assets/planet4.png');
  planet5img = loadImage('assets/planet5.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backdrop = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  planet1 = createSprite(windowWidth/2, windowHeight/2-100);
  planet1.addImage(planet1img);
  planet1.rotateToDirection = true;
  planet1.velocityX = 5;
  planet2 = createSprite(windowWidth/2, windowHeight/2-150);
  planet2.addImage(planet2img);
  planet2.rotateToDirection = true;
  planet2.velocityX = 3;
  planet3 = createSprite(windowWidth/2, windowHeight/2-250);
  planet3.addImage(planet3img);
  planet3.rotateToDirection = true;
  planet3.velocityX = 3;
  planet4 = createSprite(windowWidth/2, windowHeight/2-300);
  planet4.addImage(planet4img);
  planet4.rotateToDirection = true;
  planet4.velocityX = 3;
  planet5 = createSprite(windowWidth/2, windowHeight/2-400);
  planet5.addImage(planet5img);
  planet5.rotateToDirection = true;
  planet5.velocityX = 3;
  sun = createSprite(windowWidth/2, windowHeight/2);
  sun.addImage(sunimg);
  backdrop.addImage(backdropimg);
  sun.scale = 0.2;
  planet1.scale = 0.09;
  planet2.scale = 0.09;
  planet3.scale = 0.09;
  planet4.scale = 0.09;
  planet5.scale = 0.1;
}

function draw() {
  background(255);
  fill(255, 100, 0);

  if(frameCount % 1 === 0 && sun.scale < 5){
    sun.scale+=0.01
  }


  sun.rotation+=1;
  planet1.rotation+=3;
  planet2.rotation+=1;
  planet3.rotation+=0.7;
  planet4.rotation+=0.575;
  planet5.rotation+=0.425;
  drawSprites();
}


var runnerImages, runner;

var pathImage, path;

var leftBoundary, rightBoundary;

function preload(){

  //pre-load images

  runnerImages=loadAnimation("Runner-1.png","Runner-2.png");
 
  pathImage=loadImage("path.png");
  
}

function setup(){

  createCanvas(400,400);
  
  //create sprites here
  runner = createSprite(200,300,40,50);
  runner.addAnimation("running",runnerImages);
  runner.scale=0.05;
  
  path = createSprite(200,200,150,200);
  path.addImage("path",pathImage);
  path.y=path.width/2;
  path.velocityY=4;

  leftBoundary = createSprite(20,200,50,400);
  leftBoundary.visible = false

  rightBoundary = createSprite(380,200,50,400);
  rightBoundary.visible = false;

  path.depth=runner.depth;
  runner.depth=runner.depth+1;
}

function draw() {
  background(180);

  if(path.y>400){
    path.y=path.width/2;
    }

  if(keyDown("right")){
    runner.x = runner.x+3
  }
 
  if(keyDown("left")){
    runner.x = runner.x-3
  }

  runner.x=World.mouseX;

  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  createEdgeSprites();
  drawSprites();
}

  
  



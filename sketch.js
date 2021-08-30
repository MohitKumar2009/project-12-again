var garden,rabbit;
var gardenImg,rabbitImg;
var apples,appleImg;
var leave,leaveImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaveImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  spawnapple();

  drawSprites();
  rabbit.x = mouseX;
}

function spawnapple() {

if (frameCount % 100 === 0){
  apples = createSprite(200,0,20,20)
  apples.velocityY = 2;
  apples.scale = 0.07;
  apples.addImage(appleImg);
  apples.x = Math.round(random(10,350));

  apples.depth= rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
}
if (frameCount % 120 === 0){
  leave = createSprite(200,0,20,20)
  leave.velocityY = 1;
  leave.scale = 0.04;
  leave.addImage(leaveImg);
  leave.x = Math.round(random(5,380));

  leave.depth= rabbit.depth;
  rabbit.depth = rabbit.depth + 1;
}

}


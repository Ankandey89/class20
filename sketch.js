var movingRectangle, fixedRectangle;
function setup() {

  createCanvas(800,400);
  fixedRectangle= createSprite(400, 200, 80, 50);
  fixedRectangle.shapeColor="blue";
  fixedRectangle.debug=true;
  movingRectangle=createSprite(600,400, 50, 80);
  movingRectangle.shapeColor="red";
  movingRectangle.debug=true;
}

function draw() {
  background(255,255,255);
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  if(movingRectangle.x-fixedRectangle.x < movingRectangle.width/2+fixedRectangle.width/2 
    && fixedRectangle.x-movingRectangle.x < movingRectangle.width/2+fixedRectangle.width/2
    && movingRectangle.y-fixedRectangle.y < movingRectangle.height/2+fixedRectangle.height/2 
    && fixedRectangle.y-movingRectangle.y < movingRectangle.height/2+fixedRectangle.height/2){
    movingRectangle.shapeColor="green";
    fixedRectangle.shapeColor="green";
  }
  else{
    movingRectangle.shapeColor="red";
    fixedRectangle.shapeColor="blue";
  }
  drawSprites();
}
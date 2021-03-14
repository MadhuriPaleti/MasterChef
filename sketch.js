var fixedRect, movingRect,gameobj1,gameobj2,gameobj3,gameobj4,object1,object2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobj1=createSprite(100,100,50,50);
  gameobj2=createSprite(200,100,50,50);
  gameobj3=createSprite(300,100,50,50);
  gameobj4=createSprite(400,100,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,gameobj2))
 {
        movingRect.shapeColor = "blue";
        gameobj2.shapeColor = "blue";
       }
       else{
        movingRect.shapeColor = "green";
        gameobj2.shapeColor = "green";
       }

 
  drawSprites();
}


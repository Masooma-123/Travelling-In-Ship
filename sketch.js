var ship,ship_running, edges;
var seaImage;

function preload(){
   ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
   
   seaImage = loadAnimation("sea.png")
   
   
}

function setup(){
  createCanvas(600,500);


  sea=createSprite(600,300);
  sea.addAnimation("running",seaImage);
  sea.scale= 1;
  sea.velocityX= -1;

  // creating ship
  ship = createSprite(50,200,20,50);
  ship.addAnimation("running", ship_running);
  edges = createEdgeSprites();

  //adding scale and position to trex
  ship.scale = 0.25;
  ship.x = 90;
  ship.y = 300;
}

function draw() {
 //set background color
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  

   //jump when space key is pressed
  if(keyDown("space")){
    ship.velocityY = -10
    
  }

  ship.velocityY = ship.velocityY +0.5;


  //stop trex from falling down
  ship.collide(edges[3])
drawSprites(); 
}
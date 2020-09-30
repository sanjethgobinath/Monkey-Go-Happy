  
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup
var ground
var score
var survivalTime = 0;

function preload(){
  
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  //monkey.collide(ground);
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  //ground
  ground = createSprite(400,350,900,10);
  ground.x = ground.width/2;
  
  

  
}


function draw() {
  background(255);
 
  obstacles();
  fruits();
  //ground.velocity = -4;
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  var survivalTime=0;
stroke( "white");
textSize(20);

fill("white"),

text("Score:" + score, 500, 50) ;
stroke("black");

textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+ survivalTime, 100,50);

  
  
  
  
  
   drawSprites();
  
}

function obstacles(){
if(frameCount%80 === 0){
     obstacle = createSprite(400,325,20,20);
  obstacle.addImage("obstacle", obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -4  
    
    obstacle.lifetime = 100;
     
  }
  
}


function fruits(){
if(frameCount%80 === 0){
  fruit = createSprite(400,250,20,20);
  fruit.addImage("fruit", bananaImage);
  fruit.scale = 0.1;
  fruit.velocityX = -4  
      
  fruit.lifetime = 100;
     
  }
  
}












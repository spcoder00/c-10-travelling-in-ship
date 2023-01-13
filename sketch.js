
var ship,shipImg;
var sea,seaImg;

function preload(){
shipImg = loadAnimation ("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
seaImg=loadImage("sea.png");
}

function setup(){

createCanvas(400,400);

sea = createSprite(400,200);
sea.addImage(seaImg);
sea.velocityX=-5;
sea.scale = 0.3;

ship=createSprite(130,200,30,30);
ship.addAnimation("moving ship",shipImg);
ship.scale=0.25;


}

function draw(){
background(0);
if (sea.x<0) {
  sea.x=sea.width/10;
}



drawSprites();
}


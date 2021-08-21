var garden,rabbit;
var gardenImg,rabbitImg;
var apple

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  oleafImg = loadImage("orangeLeaf.png");
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
  
 apple()
 leaf()
 oleaf()

 drawSprites();
}

function apple(){
  if(frameCount%80===0){
  var apple=createSprite(random(50,350),40,10,10)
  apple.addImage("apple",appleImg)
  apple.scale=0.04
  apple.velocityY=2
 
 apple.depth=rabbit.depth
 rabbit.depth=rabbit.depth+1
}
}

function leaf(){
  if(frameCount%80===0){
  var leaf=createSprite(random(50,350),40,10,10)
  leaf.addImage("leaf",leafImg)
  leaf.scale=0.04
  leaf.velocityY=2
 
  leaf.depth=rabbit.depth
 rabbit.depth=rabbit.depth+1
}
}

function oleaf(){
  if(frameCount%80===0){
  var oleaf=createSprite(random(50,350),40,10,10)
  oleaf.addImage("oleaf",oleafImg)
  oleaf.scale=0.04
  oleaf.velocityY=2
 
  oleaf.depth=rabbit.depth
 rabbit.depth=rabbit.depth+1
}
}
var boy, boy_running,path;
var bg, invisibleBlock, groundImg
function preload(){
  //pre-load images
  boy_running= loadAnimation('jake1.png', 'jake2.png','jake3.png','jake4.PNG', 'jake5.png');
  pathImg= loadImage ('path.png');
  
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,20,20)
  path.addImage(pathImg);
 path.velocityY=4
  
  boy=createSprite(200,200,20,20);
  boy.addAnimation ('boy_running',boy_running);
  boy. scale=0.5;
  
  invisibleBlock1= createSprite(70,200,40,400);
   invisibleBlock2= createSprite(340,200,40,400);
  invisibleBlock1.visible=false;
  invisibleBlock2.visible=false;
  
}

function draw() {
  background('black');
  
  boy.x=mouseX;
  boy.y=mouseY;
  boy.collide(invisibleBlock1);
  boy.collide(invisibleBlock2);
  
  if(path.y> 400){
     path.y=height/2;
     }
 
drawSprites();
  
}

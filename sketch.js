var spaceCraft,spaceBacg,spaceBacgg,Docker,DockerImg,spaceCraftImg,iss,issImg,spaceCraftImgLeft,spaceCraftImgRight,spaceCraftImgForward;
var hasDocked=false

function preload(){
  issImg=loadImage('iss.png')
  spaceBacgg=loadImage('spacebg.jpg')
  spaceCraftImg=loadImage('spacecraft1.png')
  spaceCraftImgLeft=loadImage('spacecraft4.png')
  spaceCraftImgRight=loadImage('spacecraft3.png')
  spaceCraftImgForward=loadImage('spacecraft2.png')
}


function setup() {
  createCanvas(800,400);
 iss=createSprite(300,200,20,20)
 iss.addImage(issImg)
 iss.scale= 0.5
 spaceCraft=createSprite(200,350,20,20)
 spaceCraft.addImage(spaceCraftImg)
 spaceCraft.scale= 0.1

}

function draw() {
  background(spaceBacgg);  
 
  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1)
  }
 if(keyDown(UP_ARROW)){
   spaceCraft.y=spaceCraft.y-2
   spaceCraft.addImage(spaceCraftImgForward)
 }
 if(keyDown(RIGHT_ARROW)){
  spaceCraft.x=spaceCraft.x+2
  spaceCraft.addImage(spaceCraftImgRight)
}
if(keyDown(LEFT_ARROW)){
  spaceCraft.x=spaceCraft.x-2
  spaceCraft.addImage(spaceCraftImgLeft)
}
if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10))
{ hasDocked = true;
   textSize(25);
    fill("white")
     text("Docking Successful!", 200, 300); }

  drawSprites();
}
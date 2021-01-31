var flappybird,flappy_img;
var pipe1,pipe2,pipe3,pipe4;
var back_img,back1;
var p1_img,p2_img,p3_img,p4_img;
var p1_group,p2_group,p3_group,p4_group;
var play=1;
var end=0;
var gameState=play;

function preload(){
flappy_img=loadImage("Flappy.jpg");
back_img=loadImage("BackGround.png");
p1_img=loadImage("Pipe1.png");
p2_img=loadImage("Pipe2.png");
p3_img=loadImage("Pipe3.png");
p4_img=loadImage("Pipe4.png");


}


function setup() {
	createCanvas(800, 700);
	flappybird=createSprite(200,650,20,20);
	  flappybird.addImage("bird",flappy_img);
	  flappybird.scale=0.17;
	  p1_group=new Group();
	  p2_group=new Group();
	  p3_group=new Group();
	  p4_group=new Group();
}


function draw() {
 background(back_img);
 if(gameState===play){
  console.log(flappybird.y)
	if(keyDown("space")){
 flappybird.velocityY = -15;
  }
flappybird.velocityY=flappybird.velocityY+0.8;

 pipes();
 pipes1();


if(p1_group.isTouching(flappybird)||p2_group.isTouching(flappybird)
||p3_group.isTouching(flappybird)||p4_group.isTouching(flappybird)){
gameState=end;
}
}
else if(gameState===end){
flappybird.x=200;
flappybird.y=650;
flappybird.velocityY=0;
p1_group.setVelocityXEach(0);
p2_group.setVelocityXEach(0);
p3_group.setVelocityXEach(0);
p4_group.setVelocityXEach(0);
p1_group.setLifetimeEach(-1);
p2_group.setLifetimeEach(-1);
p3_group.setLifetimeEach(-1);
p4_group.setLifetimeEach(-1);
}
 //createEdgeSprites();
 flappybird.collide(p1_group);
 flappybird.collide(p2_group);
 flappybird.collide(p3_group);
 flappybird.collide(p4_group);
 
  drawSprites();

}
function pipes(){
if(frameCount%300===0){
pipe1=createSprite(600,640,20,20);
pipe1.addImage("pipes",p1_img);
pipe1.velocityX=-2;
pipe1.scale=0.8;
pipe1.lifetime=300;
p1_group.add(pipe1);
pipe2=createSprite(600,40,20,20);
pipe2.addImage("pipes",p3_img);
pipe2.velocityX=-2;
pipe2.scale=0.8;
pipe2.lifetime=300;
p2_group.add(pipe2);
}

}
function pipes1(){
	if(frameCount%700===0){
	pipe3=createSprite(600,640,20,20);
	pipe3.addImage("pipes",p4_img);
	pipe3.velocityX=-2;
	pipe3.scale=0.8;
	pipe3.lifetime=300;
	p3_group.add(pipe3);
	pipe4=createSprite(600,40,20,20);
	pipe4.addImage("pipes",p2_img);
	pipe4.velocityX=-2;
	pipe4.scale=0.8;
	pipe4.lifetime=300;
	p4_group.add(pipe4);
	}
}

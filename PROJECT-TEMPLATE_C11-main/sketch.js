var gary , crey;
var ataque ,  atqueIMGD , ataque2 , ataqueIMG2
var fafas , lalau
var chao , chaoIMG
var GIMG , GIMGE
//var mal , mal1 , mal2
var corida , pulo

function preload(){
ataqueIMG = loadImage("imported piskel (3).gif");
ataqueIMG2 = loadImage("imported piskel (4).gif");
fafas = loadImage("Gparada.png");
lalau = loadImage("iniparado1.png");
chaoIMG = loadImage("começo.jpg");
GIMG  = loadImage("Gataque.png");
GIMGE  = loadImage("GataqueE.png");
corida = loadAnimation("GA1.png","GA2.png","GA3.png","GA4.png","GA5.png","GA6.png");
pulo  = loadImage("Gpulo.png");


} 


function setup(){
  createCanvas(1365,650);
  gary = createSprite(200,700,10,10);
  //gary.scale = 0.5;
  gary.addImage(fafas);
     // gary.addAnimation("runing",corida);


  crey = createSprite(700,600,10,10);
  crey.addImage(lalau);
  crey.scale = 1.5;

  ataque = createSprite(1, 1, 1, 1);
  ataque.addImage(ataqueIMG);
  ataque.visible = false 
  ataque.scale = 0.2

  ataque2 = createSprite(1, 1, 1, 1);
  ataque2.addImage(ataqueIMG2);
  ataque2.visible = false 
  ataque2.scale = 0.2

  chao = createSprite(630,740,1500,200);

  gary.debug = true;
  crey.debug = true;
  ataque.debug = true;
  chao.visible = false 

  gary.setCollider("circle",0,-20,50);
  crey.setCollider("circle",-15,0,35);

}

function draw() {
  background(chaoIMG);

   if(keyDown("d")){
    gary.x=gary.x+7 ;
    gary.changeAnimation(corida);
  }
  /*else{
    gary.addImage(fafas);
  }*/
   if(keyDown("a")){
    gary.x=gary.x-7 ;

  }

if(keyDown(RIGHT_ARROW)){
    ataque.visible = true
    ataque.x = gary.x + 30;
    ataque.y = gary.y;
    gary.addImage(GIMG);
  }
  else{
    ataque.visible = false 
    gary.addImage(fafas);
  }
  /*?if(keyDown(LEFT_ARROW)){
    ataque2.visible = true
    ataque2.x = gary.x - 30;
    ataque2.y = gary.y;
    gary.addImage(GIMGE);
  }
  else{
    ataque2.visible = false 
    gary.addImage(fafas);
  }*/
  if (keyDown("space"/*&& gary.y >= 500*/)) {
    gary.velocityY = -8;
    gary.addImage(pulo);

  }

  if (ataque.isTouching(crey)) {
    crey.destroy();
  }
  gary.velocityY = gary.velocityY + 0.8;
  crey.velocityY = 8;
  gary.collide(chao);
  crey.collide(chao);
  gary.collide(crey);
      drawSprites();
}
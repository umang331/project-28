
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree;
var stone;
var boyImage,boy;
var launcher;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
 boyImage=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,height,1200,20);
	
    tree=new Tree(590,700);

	

	boy=createSprite(200,640,10,10);
	boy.addImage(boyImage);
	boy.scale=0.08;

	stone=new Stone(150,600,20,20);
	
	mango1=new Mango(450,350,20);
	mango2=new Mango(550,200,20);
	mango3=new Mango(650,330,20);
	mango4=new Mango(520,275,20);
	mango5=new Mango(670,250,20);
	mango6=new Mango(600,300,20);

    launcher=new Launcher(stone.body,{x:150,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("PINK");

  textSize(25);
  text("PRESS SPACE TO GET A NEW STONE zoom out to see full screen",30 ,50);
  
 ground.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 
 launcher.display();
 stone.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);


 drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body);
	}
}



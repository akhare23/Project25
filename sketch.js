
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
	paper = new Paper(10,500);
	ground = new Ground();

	
	box2 = new Box(550,610,20,100);
	box3 = new Box(650,610,20,100);
	box1 = new Box(600,650,100,20)
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
	}
}




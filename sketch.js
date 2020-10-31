const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,ground,dustbin1,dustbin2,dustbin3,dustbinImg;

function preload()
{ dustbinImg = loadImage("dustbin.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(80,620)
    ground = new Ground(400,700,800,20);
	dustbin1 = new Dustbin(700,680,200,20);
	dustbin2 = new Dustbin(600,650,20,250);
	dustbin3 = new Dustbin(790,650,20,250);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  paperObject.display(); 
ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
image(dustbinImg,589,500,230,200);


}

function keyPressed(){

	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:550,y:-550});
	}
}




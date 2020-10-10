
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	backgroundImg = loadImage("sprite/bg.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new paper(130, 596, 90);

	dustbin1 = new dustbin(530, 530, 200, 200);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  paper1.display();
  dustbin1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85});
	}
}




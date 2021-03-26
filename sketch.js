const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//suspension=createSprite(290,200,600,200);

  ground1 = new Ground(400,380,800,40);
  ball1 = new Ball(200,100,80)
  rope1 = new Rope(ball1.body,{x:320,y:20})
  box1 = new Box(500,300,70,70)
  box2 = new Box(500,300,70,70)
  box3 = new Box(500,300,70,70)
  box4 = new Box(500,300,70,70)
  box5 = new Box(600,300,70,70)
  box6 = new Box(600,300,70,70)
  box7 = new Box(600,300,70,70)
  box8 = new Box(600,300,70,70)
  box9 = new Box(700,300,70,70)
  box10 = new Box(700,300,70,70)
  box11= new Box(700,300,70,70)
  box12 = new Box(700,300,70,70)
  box13 = new Box(700,300,70,70)
	Engine.run(engine);
  
}


function draw() {
  background("Gold");
  fill("Brown")
  ground1.display()
  fill("red")
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  fill("Green")
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  fill("Violet")
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  ball1.display()
  rope1.display()


  drawSprites ();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}





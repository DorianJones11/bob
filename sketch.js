const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3
//var ground1




function preload()
{

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);



	
	

	
   
	var Top = createSprite(525,300,300,10 , {isStattic:false});

	bob1 = new bob(410,450,40)
	bob2 = new bob(450,450,40)
	bob3 = new bob(490,450,40)

	//ground1 = new ground(200,700,1600,10)

	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  drawSprites();


 
 
}

/*function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-500});
	 }
   }*/

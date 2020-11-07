
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var engine,world,object;


function setup() {
  createCanvas(400,400);
///creating angry bird universe
  engine=Engine.create();
  //angry bird world

  world=engine.world;

var options={

  isStatic:true
}


  ///create Object 
  object=Bodies.rectangle(200,370,400,10,options); 
  World.add(world,object); 
  console.log(object)
}

function draw() {
  background(0); 

  Engine.update(engine);
rectMode(CENTER);
  rect(object.position.x,object.position.y,400,10);
  
}
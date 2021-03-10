const Engine = Matter.Enigine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var border1,border2,border3,border4,ground;



function setup() {
  var canvas = createCanvas(480,655);
  engine = Engine.create();
  world = engine.world;

  border1 = new Border(600,655,1200,10);
  border2 = new Border(600,2,1200,10);
  border3 = new Border(180,100,1200,10);
  border4 = new Border(100,599,1200,20);
  ground = new Ground(600,645,1200,10);
}

function draw() {
  background(0,0,0);  
  ground.display();
  border1.display();
  border2.display();
  border3.display();
  border4.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var border1,border2,border3,border4,ground;



function setup() {
  createCanvas(480,655);
  engine = Engine.create();
  world = engine.world;

  border1 = new Border(600,2,1200,10);
  border2 = new Border(600,655,1200,10);
  border3 = new Border(1,360,10,755);
  border4 = new Border(480,360,10,755);
  ground = new Ground(600,645,1200,10);
}

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

for(var k = 0; k <= width; k = k + 80)
{
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for( var j = 40; j <= width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j <= width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}

for(var j = 15; j <= width-10; j=j+50)
{
  plinkos.push(new Plinko(j,275));
}

for(var j = 15; j <= width-10; j=j+50)
{
  plinkos.push(new Plinko(j,375));
}

if(frameCount%60===0)
{
  particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
}

for(var j = 0; j < particles.length; j++)
{
  particles[j].display();
}

for(var k = 0; k < divisions.length; k++)
{
  divisions[k].display();
}

function draw() {
  background(0,0,0);  
  ground.display();
  border1.display();
  border2.display();
  border3.display();
  border4.display();
}


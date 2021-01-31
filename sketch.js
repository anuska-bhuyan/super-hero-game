const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var backgroundIMG


function preload() {
backgroungIMG=loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;

     ground=new Ground(1500,750,3000,40);
     hero=new Hero(800,200,30);
     fly=new Fly(hero.body,{x:800,y:200});

}

function draw() {
  background(backgroundIMG);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();



}

function mouseDragged(){
  Matter.body.setPosition(hero.body,{x:mouseX, y:mouseY});

}


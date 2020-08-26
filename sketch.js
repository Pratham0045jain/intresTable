const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var form;

function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;

  form = new Form();

  //createSprite(400, 200, 50, 50);
}

function preload(){
  bg = loadImage("Images/background.png");
  calenderImg = loadImage("Images/calendar.png");
  logoImg = loadImage("Images/logo.png");
  //createElement('hr',100, 100);

}

function draw() {
  background(bg);  

  Engine.update(engine);

  image(calenderImg,10,10,100,100);
  image(logoImg,105,10,290,100);

  
  
  //drawSprites();
}
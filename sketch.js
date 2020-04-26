
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var ground,rectangle,rectangle1,rectangle2,rectangle3,rectangle4
var circle,circle1,circle2



function setup() {
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,390,400,20)
   rectangle = new Rectangle(200,320,60,120)
   rectangle1 = new Rectangle(255,330,50,100)
   rectangle2 = new Rectangle(145,330,50,100)
   rectangle3 = new Rectangle(295,305,30,150)
   rectangle4 = new Rectangle(105,305,30,150)
   
   

   circle = new Circle(295,210,20,20)
   circle1 = new Circle(105,210,20,20)
   circle2 = new Circle(300,70,60,60)
   
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  rectangle.display();
  rectangle1.display();
  rectangle2.display();
  circle2.display();
  circle1.display();
  circle.display();
  rectangle3.display();
  rectangle4.display();
  //tri.display();
  triangle(230, 260, 168, 260, 200, 205)
  triangle(285, 280, 225, 280, 250, 235)
  triangle(115, 280, 175, 280, 150, 235)
  triangle.shapeColor = color ("yellow")
  
  
  
  drawSprites();
  
}
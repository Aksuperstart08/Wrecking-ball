 const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies


var myEngine, myWorld, ground1, ball;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create()
  myWorld = myEngine.world 

  ground1 = new Ground(800,20);
  ball = new Ball(150,20,50,50);

}

function draw() {
  background(220);  


ground1.display(); 
ball.display();

}
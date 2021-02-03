const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pigg;
var pole1,pole3,pole4;
var box3,box4,pole2,pigg2;
var box5

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(100,height,2400,20)
    box1 = new Box(400,450,50,50);
    box2 = new Box(600,450,50,50);
    pigg =new pig(500,450);
    pole1=new pole(500,400,260,PI/2);
    box3 = new Box(400,350,50,50);
    box4 = new Box(600,350,50,50);
    pigg2 =new pig(500,350);
    pole2=new pole(500,300,260,PI/2);
    box5=new Box(500,250,50,50)
    pole3= new pole(460,200,160,PI/7)
    
    pole4=new pole(570,200,160,-PI/7)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.angle)
    ground.display();
    box1.display()
    box2.display();
    pigg.display();
    pole1.display();
    box3.display()
    box4.display();
    pigg2.display();
    pole2.display();
    box5.display();
    pole3.display();
    pole4.display();
}
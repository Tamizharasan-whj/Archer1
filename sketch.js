const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer,computerBase;
var angle = 120;

var arrow,arrow1;


function setup() {
  canvas = createCanvas(1200,1000);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300,800, 180, 150);
  player = new Player(300,660,80,160); 
  //Create Player Archer Object

 computerBase = new ComputerBase(900,800,180,150);
 computer  = new Computer(900,660,80,160);
 arrow = new Hand(850,580,120,140,angle);
 

  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  
 // playerArcher.display();
  //computerArcher.display()


  //Display arrow();
  arrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher


  }
}




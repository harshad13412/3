const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var fruitimage,bgimage,rabitimage;

function preload (){
 fruitimage = loadImage("melon.png")
 bgimage = loadImage("background.png")
 rabitimage = loadImage("Rabbit-01.png")


}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
   rabbit = createSprite(250,600,100,100)
   rabbit.addImage (rabitimage)
   rabbit.scale = 0.2
   button = createImg("cut_btn.png")
   button.position(220,30)
   button.size (50,50)
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER)
  button.mouseClicked(drop)
}

function draw() 
{
  background(51);
  image(bgimage,width/2,height/2,width,height)
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,30,30);
  image (fruitimage,fruit.position.x,fruit.position.y,100,100)
  Engine.update(engine);
  ground.show();

 
drawSprites()  
 }
function drop (){
  rope.break()
  fruit_con.detach()
  fruit_con = null;

}

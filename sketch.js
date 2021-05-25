const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2,stand3;
var ball;
var slingshot;
var polygon
var polygon_img;



function preload(){
  polygon_img=loadImage("polygon.png");
}



function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();


  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

 // polygon = new Polygon(200,200)

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(polygon,{x:150 , y:200});

  
 
  //1 pyramid
  //level one
  block1 = new Block(300,275);
  console.log(block1);
  block2 = new Block(330,275);
  block3 = new Block(360,275);
  block4 = new Block(390,275);
  block5 = new Block(420,275);
  block6 = new Block(450,275);
  block7 = new Block(480,275);
  //level two
  block8 = new Block(330,235);
  block9 = new Block(360,235);
  block10 = new Block(390,235);
  block11 = new Block(420,235);
  block12 = new Block(450,235);
  //level three
  block13 = new Block(360,195);
  block14 = new Block(390,195);
  block15 = new Block(420,195);
//top
  block16 = new Block(390,155);


// 2 pyramid
// base level
  block_1 = new Block(630,175);
  block_2 = new Block(660,175);
  block_3 = new Block(690,175);
  block_4 = new Block(720,175);
  block_5 = new Block(750,175);

//1 floor
  block_6 = new Block(650,130);
  block_7 = new Block(680,130);
  block_8 = new Block(710,130);
  block_9 = new Block(740,130);

 //2 floor
  block_10 = new Block(665,90);
  block_11 = new Block(695,90);
  block_12 = new Block(725,90);

//3 floor
  block_13 = new Block(677.5,50);
  block_14 = new Block(710,50);

//4 floor
  block_15 = new Block(690,10);
}




function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 

  strokeWeight(2)
  stroke(15);
  fill("grey");
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();

  fill("turquoise");
  block_6.display();
  block_7.display();
  block_8.display();
  block_9.display();

  fill("pink");
  block_10.display();
  block_11.display();
  block_12.display();

  fill("skyblue");
  block_13.display();
  block_14.display();

  fill("lightgreen");
  block_15.display();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)


  slingshot.display();

}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
if(keyCode===32){
  slingshot.attach(polygon.body)
}


}

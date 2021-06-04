var scubaDiver, scubaDiverImg
var turtle, turtleImg, turtleGroup, crab, crabImg, crabGroup;
var angelfish, angelfishImg, angelfiGroup, whale, whaleImg, whaleGroup;
var underwaterBG;

var score;


function preload(){
  underwaterBG = loadImage("Underwater.png");

  scubaDriverImg = loadAnimation("ScubaDiver.png");
  turtleImg = loadImage("Turtle.png");
  crabImg = loadImage("Crab.png");
  angelfishImg = loadImage("Angel Fish.png");
  whaleImg = loadImage("Whale.png");
}

function setup() {
  createCanvas(450,400);
  
  scubaDiver = createSprite(220,350,20,50);
  scubaDiver.addAnimation("scuba",scubaDiverImg);
  scubaDiver.scale = 0,5;

  turtleGroup = new Group();
  crabGroup = new Group();
  angelfishGroup = new Group();
  whaleGroup = new Group();

  scubaDiver.setCollider("rectangle",10, 120, 400, 100, 00);
  scubaDiver.debug = true;
  
  score = 0;
  
}


function draw() {
  background(underwaterBG);
  stroke("white")
  textSize(20);
  fill("white")
  text("Creatures Collected: "+ score, 120,50);
  
  turtles();
  crabs();
  angelfishes();
  whales();

  if (keyDown("up")) {
    scubaDiver.y = scubaDiver.y -2;
  }
  
  if (keyDown("down")) {
    scubaDiver.y = scubaDiver.y +2;
  }


  if (keyDown("right")) {
    scubaDiver.x = scubaDiver.x +2;
  }

  if (keyDown("left")) {
    scubaDiver.x = scubaDiver.x -2;
  }
 
  drawSprites();
  fill("white")
  text("Creatures Collected: "+ score, 120,50);

}

function turtles(){
  if(World.frameCount%34 === 0){
    turtle = createSprite(450,76,100,100);
    turtle.scale = 0.3;
    turtle.addImage("turtle",turtleImg);
    turtle.y = Math.round(random(80,350));
    turtle.velocityX = -5;
    turtle.setLifetime = 50;
    
    turtleGroup.add(turtle);
  }
}
function crabs(){
  if(World.frameCount%50 === 0){
    crab = createSprite(450,0,100,100);
    crab.scale = 0.3;
    crab.addImage("crab",crabImg);
    crab.y = Math.round(random(80,350));
    crab.velocityX = -5;
    crab.setLifetime = 50;
    
    crabGroup.add(crab);
  }
}
function angelfishes(){
  if(World.frameCount%70 === 0){
    angelfish = createSprite(450,120,100,100);
    angelfish.scale = 0.1;
    angelfish.addImage("angelfish",angelfishImg);
    angelfish.y = Math.round(random(80,350));
    angelfish.velocityX = -5;
    angelfish.setLifetime = 50;
    
    angelfishGroup.add(angelfish);
  }
}
function whales(){
  if(World.frameCount%90 === 0){
    whale = createSprite(450,200,100,100);
    whale.scale = 0.1;
    whale.addImage("whale",whaleImg);
    whale.y = Math.round(random(80,350));
    whale.velocityX = -5;
    whale.setLifetime = 50;
    
    whaleGroup.add(whale);
  }
}

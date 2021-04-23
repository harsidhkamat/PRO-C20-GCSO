var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800, 400);

  //creating speed and weight
  speed = random(10,170);
  weight = random(400,1500);

  // creating the car and wall sprites
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(700,200,60, height/2);

  
}

function draw() {
  background(0);

//velocity of the car
car.velocityX = speed;

//dectecting if the car has touched the wall
if(wall.x - car.x < (car.width + wall.width)/2){
  car.velocityX = 0;

  // creating the deformation
  deformation = 0.5 * weight * speed * speed / 22509;

  if(deformation > 180){
    car.shapeColor = "red";
  }
  if(deformation < 180 && deformation > 100){
    car.shapeColor = "yellow";
  }
  if(deformation < 100){
    car.shapeColor = "green";
  }
}

  drawSprites();
}
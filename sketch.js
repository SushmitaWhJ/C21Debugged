var wall, thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight= random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
 // bullet.velocityX = 5;
    //  this.x = 50
    //  this.y = 200
   wall = createSprite(1200, 200, thickness, height/2);
    wall.shapeColor = "red" ;
    
    // thickness=random(22,83)
    // whight=random(30,52)
    // speed=random(223,321)
}



function draw() {
  background(0,0,0);  
  function hasCollided(bullet, wall) 
{
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
 return false;
}
if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed*speed/(thickness*thickness*thickness);

  if(damage<10)
 {
    wall.shapeColor=color(0,255,0);
 }
}
  drawSprites();
 }
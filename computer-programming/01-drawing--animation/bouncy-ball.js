/**
 * Challenge: Bouncy Ball
 * 
 * 
 * Step 1: Bounce off the floor!
 * Our ball is moving down the canvas, but it keeps going down forever.
 * Add an if statement to make it reverse direction once it gets to the bottom of the canvas.
 * Remember you can click restart to re-run the program from the beginning.
 * 
 * 
 * Step 2: Bounce off the ceiling!
 * Okay, now let's get the ball to reverse once it hits the ceiling too, so that it keeps going down and up forever.
 */

// position of the ball
var y = 0;
// how far the ball moves every time
var speed = 2;

draw = function() {
  background(127, 204, 255);
  
  fill(66, 66, 66);
  ellipse(200, y, 50, 50);
  
  if (y > 375) { speed = -5; }
  if (y < 25) { speed = 5; }

  // move the ball
  y = y + speed;
};
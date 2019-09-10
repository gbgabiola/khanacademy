/**
 * Challenge: Exploding Sun
 * 
 * 
 * Step 1: Prepare to animate!
 * Right now, this program just draws a sun that never moves (boring!).
 * To prepare to animate it, make a draw() function and move all the shape drawing commands inside of it.
 * 
 * Be careful about how you write the (parenthesis) and {curly braces} after draw = function.
 * 
 * 
 * Step 2: Explode the sun!
 * Now, to make the sun get bigger, add 1 to the sunSize variable inside the draw function.
 * 
 * Remember you can press 'Restart' to restart the animation.
 */

noStroke();
// the beautiful blue sky
background(82, 222, 240);

// the starting size for the sun
var sunSize = 30;

draw = function() {
  // The sun, a little circle on the horizon
  fill(255, 204, 0);
  ellipse(200, 298, sunSize, sunSize);
  
  // The land, blocking half of the sun
  fill(76, 168, 67);
  rect(0, 300, 400, 100);
  
  sunSize++;
};
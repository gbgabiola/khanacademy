/**
 * Project: Shooting star
 * 
 * 
 * Now that you've learnt the basics of animation with variables, make a shooting star!
 * We've started off this program with just a star positioned using 2 variables, and it's up to you to decide how to animate it.
 * Here are the steps we suggest:
  1. Decide what side of the canvas you want the star to start from, the top, bottom, left or right, and position your star there.
  2. Decide what direction you want the star to move in. Change the variables inside draw so that the star moves the way you wanted.
  3. Add another star or other shape, and animate it going in a different direction.
  4. Bonus: Change the star into a different shape, or have it shoot out of a cannon.
  5. Bonus: Add a backdrop, like a starry night or skyscrapers.
 */

var xPos = 50;
var yPos = 50;
var xPos2 = 350;
var yPos2 = 50;

draw = function() {
  background(29, 40, 115);
  fill(255, 242, 0);
  ellipse(xPos, yPos, 10, 10); // start 1
  xPos += 5;
  yPos += 5;
  
  ellipse(xPos2, yPos2, 10, 10); // star 2
  xPos2 -= 2;
  yPos2 += 2;
};
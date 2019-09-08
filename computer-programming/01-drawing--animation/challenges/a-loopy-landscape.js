/**
 * Challenge: A Loopy Landscape
 * 
 * 
 * Step 1: Use a variable for the x position
 * Use your knowledge about while loops to fill the canvas with a beautiful landscape.
 * As a first step, make a new variable and use it for the x position of the tree and grass images.
 * 
 * 
 * Step 2: Use a while loop to change the x position
 * You're ready to create your landscape.
 * Use a while loop to draw grass and trees across the canvas, from left to right:
  - Start off by making a while loop that draws the tree and the grass;
  - Make sure your variable starts close to the left edge of the canvas;
  - Increment the variable, so that each tree and grass patch is drawn close to the last;
  - It should keep drawing while the x position variable is inside the canvas;
 *
 * Tip: Be careful with the condition of your while loop, and make sure you increment the variable properly inside it.
 * Otherwise, your while loop will run forever and ever and ever...
 * 
 */

background(144, 240, 234);

// Draw the sun
noStroke();
fill(255, 140, 0);
ellipse(335, 66, 70, 70);

// Get images from library and remember in variables
var grass = getImage("cute/GrassBlock");
var tree = getImage("cute/TreeUgly");
var x = 0;

// Draw the tree and grass once
while (x < 400) {
  image(grass, x, 270);
  image(tree, x, 200);
  x += 100;
}
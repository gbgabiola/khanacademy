/**
 * Challenge: Mouse movement mania
 * 
 * 
 * Step 1: Colorful Colors!
 * This program paints colorful shapes on the screen wherever the user's mouse moves, and you're going to change it up! First, change the fill() function call so that the circles become a different color.
 * Remember: You can use mouseX and mouseY as parameters to create a variety of colors.
 * 
 * 
 * Step 2: Shape the Shapes!
 * Now change the ellipse() function call somehow.
 * You can make the ellipses a different size, or you can make them change shape by using mouseX and mouseY as parameters.
 * 
 * 
 * Step 3: Outline the Outlines!
 * Now, add a stroke color to the ellipses.
 * Remove the noStroke() call and call stroke() inside the draw function.
 */

draw = function() {
  stroke(224, 20, 224);
  fill(mouseX, 45, 156);
  ellipse(mouseX, mouseY, 20, 20);
};
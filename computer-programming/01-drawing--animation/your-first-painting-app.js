/**
 * Challenge: Your First Painting App
 * 
 * 
 * Step 1: Is the mouse pressed?
 * Try moving your mouse over the canvas.
 * Do you see the circles follow your mouse? Do you notice how it's hard to draw a picture because the computer never stops drawing circles?
 * Let's fix this by making the program draw circles only if your mouse is pressed!
 * 
 * Hint: Be careful with the placement of your (parenthesis) and {brackets}, they have to look exactly like the hint code.
 * 
 * 
 * Step 2: Add some color!
 * Awesome! How's it look?
 * Now, fill the circles in with a color and remove the stroke, so it's more like a paintbrush.
 */

draw = function() {
  if (mouseIsPressed) {
  noStroke();
  fill(70, 206, 240);
  ellipse(mouseX, mouseY, 20, 20);
  }
};
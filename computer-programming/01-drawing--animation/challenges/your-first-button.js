/**
 * Challenge: Your First Button
 * 
 * 
 * Step 1: Is the mouse pressed?
 * Buttons often change color when they're pressed, so that the user realizes they've pressed something.
 * In this challenge, you'll change the code so that this button turns red when you press it.
 * For this first step, add an if that colors the button red when you press the mouse anywhere on the canvas.
 * 
 * 
 * Step 2: But WHERE is the mouse pressed?
 * Did you notice that the rectangle changes its color when you click on the bottom half of the canvas? Buttons aren't supposed to activate when you click outside of them.
 * 
 * Change the if condition so that the color of the button changes when the mouse is both pressed and on the upper half of the canvas.
 */

draw = function() {
  fill(0, 255, 68); // start color
  if (mouseIsPressed && mouseY < 200) {
      fill(255, 0, 0);
  }
  rect(0, 0, 400, 200);  // the button
  
  

  // The button text
  fill(0, 0, 0);
  textSize(30);
  text("Press me!", 145, 115);
};
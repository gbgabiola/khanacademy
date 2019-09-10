/**
 * Challenge: Smarter Button
 * 
 * 
 * Step 1: Where is the mouse pressed?
 * Right now, if you press anywhere on the canvas, the button will change color (Try it!).
 * We want the button to change color only when we press inside of it.
 * To do that, you'll need to use comparison operators (>, <) with the current mouse x and mouse y position.
 * You'll have to check multiple conditions (like that the x is greater than one number but less than another), so you'll also use &&.
 */

draw = function() {
  fill(0, 255, 68); // start color

  if (mouseIsPressed && mouseX > 50 && mouseX < 300 && mouseY < 250 && mouseY > 150) { 
    fill(33, 112, 52); // click color
  }
  rect(50, 150, 250, 100);  // the button

  // The button text
  fill(0, 0, 0);
  textSize(30);
  text("PRESS ME!", 93, 193);
};
/**
 * Challenge: Mouse Tracker
 * 
 * 
 * Step 1: Follow the mouse with the pink ball!
 * To start our mouse tracking program, make it so that the ellipse() shows up at the user's mouse position, instead of always being in the same position.
 * 
 * Hint: Use the mouseX and mouseY variables to position your ellipse.
 * 
 * 
 * Step 2: Display the coordinates!
 * To make this tracker more useful, you're going to constantly display a label with the current x and y mouse coordinates next to the dot. To do that:
  - Add together mouseX, a string with a comma, and mouseY;
  - Store that in a variable;
  - Pass the variable into the text command and show it next to the ball.
 */

fill(255, 0, 255);

draw = function() {
  background(255, 255, 255);
  ellipse(mouseX, mouseY, 12, 12);
  var label = "\n\t\t\t\t " + mouseX + " , " + mouseY;
  text(label, mouseX, mouseY);
};
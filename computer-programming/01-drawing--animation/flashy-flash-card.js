/**
 * Challenge: Flashy Flash Card
 * 
 * 
 * Step 1: Show the answer!
 * Make a flash card to help remember fun facts.
 * You'll display the answer when the mouse is pressed, and the question when it isn't.
 * 
 * Hint: Use the mouseIsPressed variable to check if the mouse button is pressed.
 */

draw = function() {
  background(165, 219, 162);
  fill(255, 254, 222);
  rect(20, 100, 364, 200);

  fill(0, 0, 0);
  textSize(20);
  if (!mouseIsPressed) {
      text("What programming language is this?", 39, 200);
  } else {
      text("JavaScript", 150, 200);
  }
};
/**
 * Challenge: Constellation Maker
 * 
 * 
 * Step 1: Add a star
 * This program displays an array of stars based on two arrays, one of x positions and one of y positions.
 * Add another star by adding a new number to each array.
 * 
 * 
 * Step 2: Add stars on click
 * Make this program more dynamic, by making it add stars when the user clicks the mouse.
 * 
 * Add a mouseClicked function at the end of the program that should:
  - push a new x and y position onto the arrays based on the current mouse position (mouseX and mouseY);
  - redraw the stars, using the drawStars function.
 */

var xPositions = [100, 200];
var yPositions = [200, 200];

var drawStars = function() {
  background(9, 5, 59);
  imageMode(CENTER);
  for (var i = 0; i < yPositions.length; i++) {
      image(getImage("space/star"), xPositions[i], yPositions[i], 30, 30);
  }
};

mouseClicked = function() {
  xPositions.push(mouseX);
  yPositions.push(mouseY);
  drawStars();
};
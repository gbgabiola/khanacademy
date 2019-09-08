/**
 * Project: Make it Rain
 * 
 * 
 * To make an animation of rain, it's best if we use arrays to keep track of the drops and their different properties.
 * Start with this simple code and build on it to make a cool rain animation.
 * 
  1. Add more drops to the arrays.
  You can do that by using a for loop and random() function at the beginning of the program, or using an array modification method during animation.
  You could even add more drops in response to user interaction.
  2. Make it so that the drops start back at their original position once they've gone past the edge of the canvas, using a conditional or % operator.
  3. Bonus: Make an array of colors, so that every drop is a different color.
  4. Bonus: Make other things rain, like snowflakes (using more shape commands) or avatars (using the image commands).
 */

var xPositions = [200];
var yPositions = [0];

var star = getImage("space/star");
var colors = [random(0,255)];
var colorNum = 0;

draw = function() {
  background(204, 247, 255);

  for (var i = 0; i < xPositions.length; i++) {
    noStroke();
    fill(0, 200, 255);
    image(star, xPositions[i], yPositions[i] % 400, 20, 20);
    image(star, xPositions[i], yPositions[i], 20, 20);
    // ellipse(xPositions[i], yPositions[i], 10, 10);
    yPositions[i] += 5;
  }
  
};

mouseClicked = function() {
  xPositions.push(mouseX);
  yPositions.push(mouseY);
  colors.push(random(0, 255));
  
};
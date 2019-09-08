/**
 * Challenge: Parting Clouds
 * 
 * 
 * Step 1: Cover the sun!
 * In this challenge, you'll use your magical programmer powers to create a cloudy sky, and then animate it into a bright and sunny sky.
 * Start off by changing the position of the clouds so that they cover the sun, but still let a little sun peek out.
 * 
 * Hint: try changing the value of the leftX and rightX variables.
 * 
 * 
 * Step 2: Part the clouds!
 * The clouds are hiding the sun now, and we want to animate them moving in opposite directions away from it.
 * Make it so that the left cloud moves 1 pixel to the left in each frame, and the right cloud moves 1 pixel to the right.
 * Remember you can click Restart to re-run your program.
 * 
 * Hint: Use the shortcuts to add or subtract 1 to the leftX and rightX variables.
 * 
 * 
 * Step 3: Grow the sun!
 * Let's make it so the clouds are running away from a sun that's getting bigger and BIGGER.
 * Increment the sun radius by 2 pixels in each frame.
 */

noStroke();
var leftX = 149;
var rightX = 259;
var sunRadius = 100;

draw = function() {
    background(184, 236, 255);
    
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    
    // right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
    
    leftX -= 1;
    rightX += 1;
    sunRadius += 2;
};
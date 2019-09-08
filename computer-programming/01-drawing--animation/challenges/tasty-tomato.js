/**
 * Challenge: Tasty Tomato
 * 
 * 
 * Step 1: Bigger bite!
 * Before we make this program respond to mouse interaction, let's make a little change.
 * 
 * Tip: the bite is being drawn as an ellipse. To make it bigger, you have to replace the width and height of the bite ellipse with numbers greater than 30.
 * 
 * 
 * Step 2: Prepare to eat!
 * Right now, there's just one bite in this tomato - but we want to be able to eat it all!
 * We can do that by drawing a new bite everytime the user moves the mouse.
 * The first step is to create a draw() function, and move the bite drawing code into it.
 * Remember: moving code into a function - or putting it inside a function - means putting the code between the {curly braces} that appear after the function.
 * 
 * Tip: You can select and drag the bite drawing code to easily move it around.
 */

background(255, 255, 255);

// tomato
noStroke();
fill(224, 90, 90);
ellipse(150, 200, 150, 150);
ellipse(212, 200, 150, 150);

// stem
fill(48, 130, 31);
rect(176, 103, 12, 32); 



draw = function() {
  // take a bite out of the tomato!
  fill(255, 255, 255);
  ellipse(mouseX, mouseY, 144, 115);
};
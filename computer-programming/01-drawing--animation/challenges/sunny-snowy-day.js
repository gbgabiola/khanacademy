/**
 * Challenge: Sunny snowy day
 * 
 * 
 * Step 1: Color the sky!
 * We've drawn a snowman on a sunny day, and you'll add color to this drawing so that the snowman knows how sunny it really is!
 * 
 * Start off by using the background() command to change the color of the sky (Blue might be a nice color to use).
 * 
 * 
 * Step 2: Color the ground!
 * Use the fill() command to change the color of the ground (Green might be a nice color to use).
 * 
 * Remember that, you'll need the fill() command to come before the rect() command that draws the ground.
 * Don't worry if the color of the other shapes changes too, you'll fix them later!
 * 
 * 
 * Step 3: Color the sun!
 * Now, add another fill() command to change the color of the sun (Orange or yellow might be nice colors to use).
 * Don't worry if the color of the snowman changes too, you'll fix him next!
 * 
 * 
 * Step 4: What about the snowman!?
 * Now, add another fill() command to change the color of the snowman (White might be a nice color to use).
 * All three parts of the snowman's body should be one color, not three different colors, so you only need to add one fill() command for this step.
 */

background(50, 200, 200);
// The ground
fill(0, 255, 0);
rect(0, 300, 400, 100);  

// The sun
fill(255, 255, 0);
ellipse(80, 64, 100, 100);  

// The snowman
fill(255, 255, 255);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);
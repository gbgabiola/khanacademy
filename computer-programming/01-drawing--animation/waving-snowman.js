/**
 * Challenge: Waving snowman
 * 
 * 
 * Step 1: Draw the ground
 * Use the rect() command to draw the ground, so that the snowman isn't just floating in air.
 * You should add your rect() command before the ellipse() commands for the snowman, so that the snowman looks like he is in front of the ground.
 * 
 * 
 * Step 2: Make him wave!
 * Now you'll make it look like the snowman is waving by adding arms on both sides of his body, using the line() command.
 * 
 * You will need to add two line() commands, one for each arm.
 * You should add your line() commands after the ellipse() commands for the snowman, so that the arms look like they are in front of the snowman.
 */


rect(0, 360, 400, 40);       // ground
ellipse(200, 300, 150, 150); // bottom
ellipse(200, 200, 100, 100); // middle
ellipse(200, 120, 75, 75);   // head
line(160, 200, 20, 50);      // left hand
line(240, 200, 379, 48);     // right hand
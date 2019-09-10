/**
 * Challenge: Lined Paper
 * 
 * 
 * Step 1: Convert it to a for loop
 * We used a while loop that draws 20 evenly spaced horizontal lines (lines that go from left to right) to draw lined paper.
 * 
 * We want you to convert the while loop to a for loop.
 * 
 * You may find it easier to complete this step if you comment out the provided while loop and use it as a guide to create your for loop.
 * 
 * 
 * Step 2: Make it graph paper
 * Now, add a for loop that draws 20 evenly spaced vertical lines (lines that go from top to bottom) to turn the lined paper into grid paper.
 * The first vertical line should have an x coordinate of 20, and the last vertical line should have an x coordinate of 400.
 */

background(255, 255, 247);
stroke(173, 222, 237);

/*
var i = 0;
while (i < 20) {
    var lineY = 20 + (i * 20);
    line(0, lineY, 400, lineY);
    i++;
}
*/

for (var i = 0; i < 20; i++) {
  var lineY = 20 + (i * 20);
  line(0, lineY, 400, lineY);
}

for (var j = 0; j < 20; j++) {
  var lineX = 20 + (j * 20);
  line(lineX, 0, lineX, 400);
}
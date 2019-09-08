/**
 * Challenge: A Loopy Ruler
 * 
 * 
 * Step 1: Loop it!
 * See how we repeat the text command multiple times, to draw ruler marks for the x coordinates along the top
 * Replace that with a while loop that does the exact same thing!
 * Remember to think about:
 * 1) What do you want to repeat each time?
 * 2) What value do you want to change each time?
 * 3) When do you want to stop looping?
 * 
 * Tip: Be careful with the condition you use for your while loop, and make sure you increment your variable correctly, otherwise your while loop will get stuck running forever.
 * 
 * 
 * Step 2: A loop for the side, too
 * Now let's do the same for y, so that we have a ruler going down the left side of our canvas too!
 * It should be very similar to the loop you have for the x.
 */

fill(17, 0, 255);

// a handy dandy ruler across the top
var x = 0;
while (x < 400) {
  text(x, x, 10);
  x += 50;
}

var y = 0;
while (y < 400) {
  text(y, 0, y);
  y += 50;
}
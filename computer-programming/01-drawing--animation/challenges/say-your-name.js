/**
 * Challenge: Say Your Name
 * 
 * 
 * Step 1: What's your name?
 * This program says hi to you at a random point on the screen.
 * Change the name variable so it says your name instead.
 * 
 * Hint: Your name should be a string, so make sure you keep it inside "quotation marks".
 * 
 * 
 * Step 2: Function-ize it!
 * It's time to wrap your code in a function:
  - Start off by creating a new function, paying close attention to (parenthesis) and {curly braces} ;
  - Move all of your code inside the function;
  - Call your new function once to make sure it works.
 *
 * Bonus: Indent the code inside the function, by selecting it and clicking TAB.
 * It doesn't change the result, but it makes the code look nicer and easier to read ^ . ^
 * 
 * 
 * Step 3: Keep calling it!
 * Now that we have it in a function, it's easy for us to call it multiple times.
 * Call it at least 3 more times! Names everywhere!
 */

var sayYourName = function() {
  var textX = random(0, 300);
  var textY = random(0, 300);
  var yourName = "Genesis";
  
  fill(255, 0, 0);
  textSize(30);
  text("Hiiii, " + yourName, textX, textY);
};

sayYourName();
sayYourName();
sayYourName();
sayYourName();
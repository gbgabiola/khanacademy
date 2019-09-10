/**
 * Challenge: SmileyFace
 * 
 * 
 * Step 1: Create a SmileyFace object
 * We have a lovely function for drawing smiley faces, based on object literals that we pass to it.
 * However, we'd like to use object oriented design instead, so that we can create instances and add methods.
 * Start off by creating a SmileyFace constructor that stores centerX and centerY properties.
 * 
 * 
 * Step 2: Initialize a new SmileyFace
 * Now that you've defined the object constructor, use it to make a face and pass that face to the draw function.
 * Once you've done that, remove the original face drawing code.
 * 
 * 
 * Step 3: Add a draw method
 * Turn the drawSmiley function into a draw method for the SmileyFace object prototype, so that you can call it on any SmileyFace instance.
 * You'll also have to modify the the code inside this draw method, so that it takes no arguments and gets all the properties using this instead of faceObj.
 * 
 * 
 * Step 4: Add a speak method
 * Now, add a speak method that will allow you to make the SmileyFace talk.
 * The speak method should accept a parameter, a string, and display that next to the smiley using the text command.
 * Then call it to make sure it works!
 * 
 * 
 * Step 5: More smileys! MORE!
 * Now, make more smileys using your SmileyFace object, at different locations with different messages.
 */

var SmileyFace = function(centerX, centerY) {
  this.centerX = centerX;
  this.centerY = centerY;
};

SmileyFace.prototype.draw = function() {
  fill(255, 234, 0);
  ellipse(this.centerX, this.centerY, 150, 150);
  fill(0, 0, 0);
  ellipse(this.centerX-30, this.centerY-30, 20, 20); 
  ellipse(this.centerX+30, this.centerY-30, 20, 20); 
  noFill(); 
  strokeWeight(3);
  arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};

SmileyFace.prototype.speak = function(str) {
  text(str, this.centerX + 85, this.centerY + 4);
};

var face = new SmileyFace(90, 100);
var face2 = new SmileyFace(90, 280);

face.draw();
face.speak("I have a big face!");

face2.draw();
face2.speak("I have the same face!");
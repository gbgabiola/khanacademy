/**
 * Project: Animal attack
 * 
 * 
 * Make an animal using the drawing commands, and use variables for the numbers you pass into those commands, like we do in the starter code below.
 * You should also use variables for any repetitive information about your animal, like the eye size, so that you can change the size of both of your eyes at once.
 * 
 * Once you've done that, pick a variable to animate - maybe the animal's face gets huge, or one of their eyes bug out - that's the attack!
 * Watch out, your programs are out to get you now. :)
 */

var bodyX = 175;
var bodyY = 230;
var bodyW = 272;
var bodyH = bodyW/2;

var eyeSize = 10; // the size of his eyes

draw = function() {
  background(129, 148, 148);
  fill(176, 113, 19);
  
  rect(bodyX - 87.5, bodyY + 19, bodyW - 244, bodyH - 91); // left leg?
  rect(bodyX + 20, bodyY + 19, bodyW - 242, bodyH - 91); // right leg?
  
  ellipse(bodyX, bodyY, bodyW, 106); // body?
  ellipse(bodyX + 80, bodyY-3, bodyH, 79); // face?
  
  // Hair
  line(bodyX + 140, bodyY + 3, bodyX + 167, bodyY - 20);
  line(bodyX + 140, bodyY + 3, bodyX + 167, bodyY + 35);
  
  
  triangle(bodyX - 149, bodyY - 56, bodyX - 129, bodyY + 17, bodyX - 165, bodyY - 27);
  
  fill(227, 16, 16);
  ellipse(bodyX + 130, bodyY - 16, eyeSize, eyeSize); // left eye
  ellipse(bodyX + 121, bodyY + 4, eyeSize, eyeSize); // right eye
  bodyY -= 2;
  bodyX += 2;
  eyeSize++;
};

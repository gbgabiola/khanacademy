/**
 * Challenge: Brown bear eyes
 * 
 * 
 * Step 1: Play around with the bear's face
 * What an innocent looking bear!
 * In this challenge, you'll use him to get a little practice resizing with fractions and variables.
 * 
 * Try changing the values for x and y.
 * Notice that the ears and nose move with the face, but the eyes don't.
 * 
 * Try changing the value for faceSize.
 * Notice that the size of the ears and nose change with the size of the face, but the eyes don't.
 * 
 * 
 * Step 2: Make the eye size change with the face size
 * In this step, you'll improve the code so that the size of the eyes changes when the size of the face changes.
 * 
 * If you look at the ellipse statements for the eyes, you can see that the width and height (third and fourth parameters) start off at 20.
 * Originally, before you played around with it, the faceSize started off 160.
 * So, to retain the original proportions, the eyes should always be 20/160 or 1/8 the size of the face.
 * 
 * To make it so that the eyes are always 1/8 of the size of the face, do the following:
   - Create a new variable to store the size of the eyes and set it equal to faceSize/8
   - Replace the values of 20 in the ellipse statements for the eyes with the name of the new variable
 * 
 * 
 * Step 3: Make the left eye follow the face left and right
 * Currently, when you change the x variable, the face moves left and right, but the left eye just stays in the same place.
 * In this step, you'll fix the code so that when the face moves left, the left eye also moves left, and when the face moves right, the left eye also moves right.
 * (We'll fix the right eye in the next step)
 * 
 * If you look at the ellipse statements for the left eye, you can see that the x coordinate (first parameter) is 160.
 * Originally, before you played around with it, the x of the face started off at 200 and faceSize started off at 160.
 * So, to keep the original offset between the left eye and the center of the face, the x coordinate of the left eye should be (200-160)/160 or 1/4 of the size of the face to the left of x.
 * 
 * To make it so that the left eye always stays 1/4 of the size of the face to the left of x, do the following:
   - In the ellipse statement for the left eye, replace the value of 160 with x-faceSize/4
 */

noStroke();
var x = 137;
var y = 256;
var faceSize = 304;

// ears
var earSize=faceSize*1/2;
fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);

//eyes 
var eyeSize = faceSize / 8;
fill(0, 0, 0);
ellipse(x - faceSize / 4, y - faceSize / 8, eyeSize, eyeSize);
ellipse(x + faceSize / 4, y - faceSize / 8, eyeSize, eyeSize);

//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);
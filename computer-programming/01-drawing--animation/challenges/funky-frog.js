/**
 * Challenge: Funky Frog
 * 
 * 
 * Step 1: A mouth!
 * Our frog has no mouth! Use the ellipse function to draw a wide mouth on the frog's face, centering the mouth at the same x and y as the face.
 * Make it big enough to eat a lot of flies!
 * 
 * 
 * Step 2: Draw eyes
 * The frog already has eyeballs, but no pupils.
 * How will he find the tasty flies if he can't see them??
 * Draw them using two rectangles, and use the x and y coordinates to position them inside the eyeballs (adding or subtracting as necessary).
 * 
 * Hint: Take a look at the code for the eyeballs and do something similar to position the pupils.
 */

var x = 200;
var y = 250;

noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(x, y, 200, 100); // face
ellipse(x - 50, y - 50, 40, 40); // left eye socket
ellipse(x + 50, y - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x - 50, y - 50, 30, 30); // left eyeball
ellipse(x + 50, y - 50, 30, 30); // right eyeball

fill(0, 0, 0);
rect(x - 55, y - 50, 10, 10); // left pupil
rect(x + 45, y - 50, 10, 10); // right pupil
ellipse(x, y, 130, 60); // mouth
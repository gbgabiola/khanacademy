/**
 * Challenge: Moles in Holes
 * 
 * 
 * Step 1: Draw a mole!
 * Our grass is filled with holes, but has no moles.
 * Thankfully, we've already defined a mole drawing function, drawMole, so that all you have to do to get a mole to show up is call that function.
 * 
 * Try it out! Call the drawMole function to make a mole show up.
 * 
 * 
 * Step 2: Parameter-ize the mole
 * Right now, our drawMole function will draw a mole in the same place every time we call it.
 * We want to be able to tell the drawMole function where to draw the mole, so that, each time we call the drawMole function the mole can be drawn in a different place.
 * 
 * Add two parameters to the drawMole function, to tell it where to draw the mole:
 * 
  - one for the x position
  - the other for the y position
 * After you have modified the drawMole function, test it out:
 *
  - On the previous step, you called drawMole() without any arguments. Now, pass two arguments into that call, so that it draws the mole in the middle of the center hole.
 * 
 * 
 * Step 3: MORE moles!
 * Now that you made that change, it's easy to add more moles.
 * Call the function three more times, and pass values in that make the moles show up in the holes.
 */

var drawMole = function(moleX, moleY) {
  noStroke();
  fill(125, 93, 43);
  ellipse(moleX, moleY, 60, 60); // face
  fill(255, 237, 209);
  ellipse(moleX, moleY+10, 33, 28); 
  fill(0, 0, 0);
  ellipse(moleX-10, moleY-15, 10, 10); // eyes
  ellipse(moleX+10, moleY-15, 10, 10);
  ellipse(moleX, moleY-5, 10, 10); // nose
  ellipse(moleX, moleY+10, 20, 5); // mouth
};

background(52, 168, 83); // green grass
fill(0, 0, 0);
ellipse(200, 200, 100, 30); // holes!
ellipse(70, 119, 100, 30);
ellipse(300, 60, 100, 30);
ellipse(297, 350, 100, 30);

drawMole(300, 35);
drawMole(70, 95);
drawMole(200, 175);
drawMole(300, 325);
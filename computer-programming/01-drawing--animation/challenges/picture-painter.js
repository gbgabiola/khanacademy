/**
 * Challenge: Picture Painter
 * 
 * 
 * Step 1: Change the initial paintbrush
 * This program uses an object to describe a paintbrush with x, y, and image properties.
 * Change the initial x and y, and pick a different image that would be fun to paint with.
 * 
 * Tip: If you want to see all the images you can use, click on the string passed to getImage, the handy image picker will appear.
 * 
 * 
 * Step 2: Make it paint!
 * Add a mouseMoved function that:
 * 
  - changes the paintbrush x and y properties based on the current mouse position, using the mouseX and mouseY variables;
  - calls the painting function, paintCanvas;
 */

var paintBrush = {
  x: 100,
  y: 100,
  img: getImage("avatars/leaf-orange")
};

var paintCanvas = function() {
  imageMode(CENTER);
  image(paintBrush.img, paintBrush.x, paintBrush.y);
};

mouseMoved = function() {
  paintBrush.x = mouseX;
  paintBrush.y = mouseY;
  paintCanvas();
};
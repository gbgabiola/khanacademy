/**
 * Project: Ad Design
 * 
 * 
 * Make an advertisement for a real or made-up product!
 * 
  1. Change the big headline to the name of your product.
  2. Add more text advertising the amazing benefits of it.
  3. Play around with color, size, and positioning to make it more flashy.
  4. Add a drawing of the product.
  5. Bonus: If you want to go really wild, add an animation.
 */

background(0, 0, 0);
var x = random(0, 255);
var y = random(0, 255);
var z = random(0, 255);
var imageX = 100;
var imageY = 170;

var draw = function() {
  fill(0, 255, 0);
  textSize(30);
  text("TRACKING NINJA", 20, 52);
  fill(x, y, z);
  ellipse(mouseX, mouseY, 50, 50);
  
  var animate1 = cos(millis()*1); 
  var animate2 = cos(millis()+98);
  image(getImage("cute/CharacterBoy"), animate1 + 290, animate2 + 240, imageX, imageY);
  
  textSize(16);
  fill(237, 112, 237);
  text("I AM FAST!", 20, 200);
  
  textSize(18);
  fill(93, 176, 240);
  text("I AM STRONG!!", 20, 230);
  
  textSize(20);
  fill(255, 0, 21);
  text("I AM RELIABLE!!!", 20, 260);
  
  imageY--;
};
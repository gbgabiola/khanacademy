/**
 * Challenge: Double Rainbow
 * 
 * 
 * Step 1: Make a Rainbow object
 * This program describes a rainbow as an object literal and then draws it on the canvas.
 * To make it easy for you to make lots of rainbow objects, create a Rainbow constructor function, it should have three parameters (for the x, y and radius) and store them in the x, y and radius properties.
 * 
 * 
 * Step 2: Initialize a new Rainbow
 * Now that you've defined the constructor function, use it to make a new rainbow object, passing numbers for the x, y and radius as arguments.
 * After that, use the drawRainbow function to display your new rainbow.
 * 
 * Remember: You can only call a function after its definition.
 * 
 * 
 * Step 3: Double Rainbow!
 * Now make another rainbow with different properties.
 */


var Rainbow = function(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
};

var drawRainbow = function(rainbow) {
  noFill();
  strokeWeight(5);
  stroke(255, 0, 0);
  arc(rainbow.x, rainbow.y, rainbow.radius, rainbow.radius, 180, 360);
  stroke(250, 200, 0);
  arc(rainbow.x, rainbow.y, rainbow.radius-10, rainbow.radius-10, 180, 360);
  stroke(240, 255, 102);
  arc(rainbow.x, rainbow.y, rainbow.radius-20, rainbow.radius-20, 180, 360);
  stroke(29, 255, 13);
  arc(rainbow.x, rainbow.y, rainbow.radius-30, rainbow.radius-30, 180, 360);
  stroke(122, 155, 255);
  arc(rainbow.x, rainbow.y, rainbow.radius-40, rainbow.radius-40, 180, 360);
};

var smallRainbow = new Rainbow(200, 200, 100);
var bigRainbow = new Rainbow(200, 200, 300);
drawRainbow(smallRainbow);
drawRainbow(bigRainbow);
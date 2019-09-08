/**
 * Project: Fish Tank
 * 
 * 
 * This program draws a single fish.
 * Poor lonely fish! For this project, you'll use functions to accompany him with more fish of all different shapes and colors.
 * 
  1. Create a custom function (like drawFish) that draws a fish at a given x and y with a given length, height, and color (5 parameters), using the starter code.
  2. Call that function to draw the fish.
  3. Now call that function lots more times, with different values, so your screen is filled with fish.
  4. Add more parameters to the function, like tail width, eye size, tail color - more ways that you can make each fish different from each other.
  5. Bonus: Add seaweed to the tank, and make a function to draw it at different places and heights. Or add pebbles to the bottom. Or a bubble drawing function.
  6. Bonus: Want to make it interactive? Use a mouseClicked function to add more fish wherever the user clicks.
 * 
 * Don't like fish? You could also make a pet shop, maybe using your animal code from the Design-an-Animal project, or a car shop, using rectangles.
 * The important thing is to use functions to make your drawing code reusable.
 */

background(116, 205, 232);
fill(214, 165, 122);
noStroke();
rect(-1,327,401,100); // sand

// create fish
var drawFish = function(centerX, centerY, bodyLength) {
  bodyLength = random(20, 30);
  var bodyHeight = random(10, 20);
  var bodyColor = color(random(0,255), random(0,255), random(0,255));
  
  noStroke();
  fill(bodyColor);
  // body
  ellipse(centerX, centerY, bodyLength, bodyHeight);
  // tail
  var tailW = bodyLength / random(1, 3);
  var tailH = bodyHeight / random(1,2);
  triangle(centerX-bodyLength / 2, centerY,
    centerX-bodyLength / 2 - tailW, centerY - tailH,
    centerX-bodyLength / 2 - tailW, centerY + tailH);
  // eye
  fill(33, 33, 33);
  ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
};

// seeWeeds
var drawSeaWeed = function(seaWeedX, seaWeedY) {
  var seaWeedW = 20;
  var seaWeedH = 200;
  fill(83, 107, 63);
  noStroke();
  rect(seaWeedX, seaWeedY, seaWeedW, seaWeedH);
  ellipse(seaWeedX + 10, seaWeedY, seaWeedW, seaWeedH - 170);
  ellipse(seaWeedX + 15, seaWeedY + 20, seaWeedW, seaWeedH - 170);
  ellipse(seaWeedX + 5, seaWeedY + 60, seaWeedW, seaWeedH - 170);
  ellipse(seaWeedX + 15, seaWeedY + 100, seaWeedW, seaWeedH - 170);
  stroke(0, 0, 0);
  strokeWeight(3);
  line(seaWeedX + 10, seaWeedY + 5, seaWeedX + 10, seaWeedY * 2); 
};

// stones
var drawStones = function(stoneX, stoneY) {
  var stoneW = random(25, 40);
  var stoneH = random(15, 25);
  fill(105, 105, 105);
  stroke(2);
  ellipse(stoneX, stoneY, stoneW, stoneH);
  ellipse(stoneX + 20, stoneY, stoneW, stoneH);
  ellipse(stoneX + 50, stoneY, stoneW, stoneH);
  ellipse(stoneX + 300, stoneY, stoneW, stoneH);
};

// call stones
drawStones(10, 385);
drawStones(209, 390);
drawStones(135, 374);
drawStones(333, 392);
drawStones(120, 390);

// call seaweeds
drawSeaWeed(20, random(200, 375));
drawSeaWeed(80, random(200, 375));
drawSeaWeed(140, random(200, 375));
drawSeaWeed(200, random(200, 375));
drawSeaWeed(280, random(200, 375));
drawSeaWeed(350, random(200, 375));

// call first 5 fish
drawFish(66,293,50);
drawFish(97,52,50);
drawFish(186,214,50);
drawFish(254,138,35);
drawFish(365,49,35);

// generate a fish on mouseClicked
mouseClicked = function() {
  drawFish(mouseX, mouseY); 
};
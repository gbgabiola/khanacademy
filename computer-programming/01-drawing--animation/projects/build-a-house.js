/**
 * Project: Build-a-House
 * 
 * 
 * Think about your house, apartment, school, or office building.
 * There's a lot of repeating elements, especially on the outside.
 * Use loops to add repeating elements to this house.
 * Suggested steps:
 * 
  1. Draw a window, then use a for loop to draw a row of windows (or, use nested for loops to make multiple rows of windows).
  2. Draw a row of grass in front. And maybe some bushes or flowers?
  3. The house is a plain color now. Use loops to make it a brick house or a house with "siding" or a log cabin. Check the images library for ways to make that more realistic.
  4. Bonus: Use a conditional inside a for loop to make more interesting grass or walls, using a different color for every other iteration of the loop (hint: use the % operator).
 * 
 * Keep going! What else could you draw with loops?
 */

background(219, 255, 255);

var brick = getImage("cute/StoneBlock");
var window = getImage("cute/WindowTall");
var grass = getImage("cute/GrassBlock");
// var bush = getImage("cute/TreeUgly");
var bush = getImage("cute/TreeShort");
var rock = getImage("cute/Rock");
var tree = getImage("cute/TreeTall");
var boy = getImage("cute/CharacterBoy");
var pet = getImage("avatars/duskpin-ultimate");

// sun
// for (var i= 50; i > 6; i-= 5) {
//     fill(26, 0, 255);
//     ellipse (50, 50, i, i);
// }
fill(255, 172, 48);
ellipse (50, 50, 50, 50);

//roof
fill(135, 104, 31);
quad (244, 75, 350, 150, 50, 150, 156, 75);

for(var i = 0; i < 400; i += 1) {
  // image(rock, x, 296, 28, 57);
  // image(bush, x, 311, 20, 57);
  image(rock, -24 + i * 41, 114, 83, 141);
  image(rock, -24 + i * 41, 114, 83, 141);
  image(rock, -24 + i * 41, 175, 83, 141);
  image(rock, -24 + i * 41, 235, 83, 141);
}

// tree
for (var i = 1; i < 351; i += 347){
  image(tree, i, 300, 47, 71);
}

// brick
for(var i = 60; i < 320; i += 54) {
  for( var y = 104; y < 210; y += 33) {
      image(brick, i, y, 65, 153);
  }
}

// window
for(var x = 70; x < 282; x += 101){
  image(window, x, 176, 56, 85);
}

// grass
for(var i = 0; i < 400; i += 20) {
  image(grass, i, 338, 21, 63);   
}

//door
fill(120, 80, 19);
rect(240, 280, 40, 77);

// door knob
fill(94, 94, 94);
ellipse(270, 318, 9, 10);

// bigBush
for(var i = 0; i < 150; i += 61) {
  image(bush, i + 45, 287, 67, 85);
}

// bush
for (var i = 32; i < 349; i += 44){
  image(bush, i, 354, 30, 41);
}

image(boy, 276, 286, 50, 90);
image(pet, 322, 324, 42, 36);

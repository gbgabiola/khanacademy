/**
 * Challenge: Flower Grower
 * 
 * 
 * Step 1: Add more flowers
 * This program creates two flowers, tulip (an instance of the Tulip type) and sunflower (an instance of the Sunflower type).
 * The drawScene function draws these flowers by calling their draw methods.
 * The mouseClicked function makes these flowers change height, when you click the mouse, by calling their growBy methods.
 * 
 * Play around with the program to see how it works. When you are done playing around:
 * 
  - add one more flower of the Tulip type
  - add one more flower of the Sunflower type
  - modify the drawScene() function, so that it also draws your new flowers.
 * 
 * Where you place the code to create a new object instance, like a new flower, is important.
 * A new object instance should be created somewhere below its constructor, but above any code that uses one of its methods or properties.
 * 
 * 
 * Step 2: Make the new flowers grow
 * Recall that, the mouseClicked function makes flowers change height, when you click the mouse, by calling their growBy methods.
 * 
 * Modify the mouseClicked() function, so that it also changes the height of your new flowers.
 * 
 * 
 * Step 3: Make a Flower object
 * The Tulip and the Sunflower object types share a lot in common, the constructors are the same, and the growBy methods are the same.
 * They're also conceptually similar, both are types of flowers!
 * Now, let's use inheritance to make both these object types extend from a Flower object type.
 * 
 * Make a constructor for the Flower object type.
 * 
 * Where you place the code for a new object type, like Flower, is important.
 * It should be placed somewhere above all of the object types that want to inherit from it.
 * 
 * 
 * Step 4: Define the growBy method
 * The Tulip and Sunflower object types have identical code in their growBy methods.
 * If we wanted to create a new type of flower, we would want the new flower type to use the same code too.
 * 
 * Add a growBy method to the Flower prototype, so that all flowers will be able to inherit it.
 * The code should be the same as the growBy methods on the Tulip and Sunflower prototypes.
 * 
 * When your code makes changes to an object type's prototype, like adding the method growBy to the Flower prototype, it is good practice to place the code just below the object type's constructor.
 * 
 * 
 * Step 5: Inherit from Flower!
 * Now let's actually put your Flower object type to work.
 * Change the Tulip constructor so that it calls the Flower constructor with its arguments, and base the Tulip prototype on the Flower prototype so that it inherits the growBy method.
 * 
 * To avoid errors and prevent overwriting the methods on the Tulip prototype:
 * 
  - the Tulip constructor should be placed above all of the methods on the Tulip prototype
  - the statement for Tulip to inherit from the Flower prototype, should be placed immediately after the Tulip constructor
 * 
 * You may need to press 'Restart' for the environment to recognize your changes to the Tulip object.
 * 
 * 
 * Step 6: Inherit from Flower - AGAIN!
 * Now let's do the same thing for Sunflower, so that both of your object types are inheriting from the Flower object type.
 * 
 * Change the Sunflower constructor so that it calls the Flower constructor with its arguments, and base the Sunflower prototype on the Flower prototype so that it inherits the growBy method.
 * 
 * To avoid errors and prevent overwriting the methods on the Sunflower prototype:
 * 
  - the Sunflower constructor should be placed above all of the methods on the Sunflower prototype
  - the statement for Sunflower to inherit from the Flower prototype, should be placed immediately after the Sunflower constructor
 * 
 * You may need to press 'Restart' for the environment to recognize your changes to the Sunflower object.
 * 
 * 
 * Step 7: Change the Flowers
 * The great thing about object-oriented design and inheritance is that we can now change things on Flower, and everything that inherits from it should change too.
 * 
 * Test out the inheritance by changing the growBy method, so that it causes flowers to grow by twice the inputted amount.
 * 
 * You may need to press 'Restart' for the environment to recognize your changes to the Flower object.
 */

/*************
*OBJECT TYPES
**************/
/******************
*Flower Object Type
*******************/

var Flower = function(x, y , height) {
  this.x = x;
  this.y = y;
  this.height = height;
};

Flower.prototype.growBy = function(amount) {
  this.height += amount * 2;
};


/*****************
*Tulip Object Type
******************/
var Tulip = function(x, y, height) {
  Flower.call(this, x, y, height);
};

Tulip.prototype = Object.create(Flower.prototype);

Tulip.prototype.draw = function() {
  noStroke();
  fill(16, 122, 12);
  rect(this.x, this.y, 10, -this.height);
  fill(255, 0, 0);
  // petals
  ellipse(this.x+5, this.y-this.height, 44, 44);
  triangle(this.x-16, this.y-this.height, 
          this.x+20, this.y-this.height,
          this.x-20, this.y-this.height-31);
  triangle(this.x-14, this.y-this.height, 
          this.x+24, this.y-this.height,
          this.x+3, this.y-this.height-39);
  triangle(this.x+-4, this.y-this.height, 
          this.x+26, this.y-this.height,
          this.x+29, this.y-this.height-36);
};


/*********************
*Sunflower Object Type
**********************/
var Sunflower = function(x, y, height) {
  Flower.call(this, x, y, height);
};

Sunflower.prototype = Object.create(Flower.prototype);

Sunflower.prototype.draw = function() {
  fill(16, 122, 12);
  rect(this.x, this.y, 10, -this.height);
  
  // petals
  stroke(0, 0, 0);
  fill(255, 221, 0);
  ellipse(this.x-10, this.y-this.height, 20, 18);
  ellipse(this.x+5, this.y-this.height-15, 20, 18);
  ellipse(this.x+5, this.y-this.height+15, 20, 18);
  ellipse(this.x+20, this.y-this.height, 20, 18);
  fill(20, 20, 20);
  ellipse(this.x+5, this.y-this.height, 20, 20);
};

/**************
*MAIN PROGRAM
***************/

/** create object instances **/
var tulip = new Tulip(38, 390, 150);
var sunflower = new Sunflower(186, 390, 100);

var tulip2 = new Tulip(110, 390, 150);
var sunflower2 = new Sunflower(260, 390, 100);


var drawScene = function() {
  background(207, 250, 255);
  tulip.draw();
  sunflower.draw();
  tulip2.draw();
  sunflower2.draw();
};

mouseClicked = function() {
  tulip.growBy(10);
  sunflower.growBy(20);
  tulip2.growBy(10);
  sunflower2.growBy(20);
  drawScene();
};

drawScene();
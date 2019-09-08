/**
 * Challenge: Favorite Animals
 * 
 * 
 * Step 1: Make the array
 * You are going to display your top 3 favorite animals.
 * To get started, make an array of them.
 * 
 * Hint: The animal names are strings, so don't forget to write them between "quotation marks".
 * 
 * 
 * Step 2: Loop over them!
 * In this step, you'll use a while loop to display each of the animals on the screen, using the text command.
 * Make a counter variable to keep track of the name you are drawing, and use it to calculate a different y position each time, so that the names are spaced out in a list.
 * 
 * Tip: Be careful with condition of your while loop, and make sure you increment the variable properly, otherwise your program will get stuck in an infinite loop.
 * 
 * 
 * Step 3: Add more animals!
 * Now that you have a loop to display your array of animals, test it out by adding at least 2 more animals (5 total).
 */

var favAnimals = ["Dog", "Monkey", "Lion", "Horse", "Cat"];

var count = 0;
while (count < favAnimals.length) {
  fill(0, 0, 0);
  text(favAnimals[count], 20, 30 + count * 30) ;
  count++;
}
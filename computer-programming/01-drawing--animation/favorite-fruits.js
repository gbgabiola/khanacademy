/**
 * Challenge: Favorite Fruits
 * 
 * 
 * Step 1: Make the array
 * You're going to display your top 3 favorite fruits. To get started, make an array of them.
 * 
 * Hint: The fruit names are strings, so don't forget to write them between "quotation marks".
 * 
 * 
 * Step 2: Display them!
 * Now, use the text() command to display each item on a different line, so that they're not overlapping.
 * 
 * 
 * Step 3: Show the length!
 * Now display a header that says 'My top 3 favorite fruits', anywhere!
 */

var fruits = ["Melon", "Watermelon", "Guava"];

for (var i = 0; i < fruits.length; i++) {
  fill(0, 0, 0);
  text("My top " + fruits.length + " favorite fruits", 20, 30);
  text(fruits[i], 20, 60 + i * 30);
}
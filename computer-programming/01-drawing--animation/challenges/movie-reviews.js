/**
 * Challenge: Movie Reviews
 * 
 * 
 * Step 1: Display the review
 * This program starts with an array of one movie, and displays the title.
 * Now, make it so it also displays the review, in a smaller size, below the title.
 * 
 * 
 * Step 2: Add a second movie
 * Now, add another movie to the array.
 * 
 * 
 * Step 3: Display them all
 * Now, to get both your movies displaying, use a for loop to iterate through the array and execute the text commands for each movie.
 * 
 */

var movies = [
  {
    title: "Puff the Magic Dragon",
    review: "Best movie ever!!"
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    review: "The best movie I've ever watch!"
  },
  {
    title: "Mulan",
    review: "The best disney movie ever!"
  }
];

for (var i = 0; i < movies.length; i++) {
  fill(84, 140, 209);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(movies[i].title, 200, i * 80 + 50);
  textSize(15);
  text(movies[i].review, 200, i * 80 + 75);
}


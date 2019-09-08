/**
 * Project: Bookshelf
 * 
 * 
 * What are your favorite books? Make a shelf of them!
 * 
  1. This program only displays one book.
  Make an array of books (at least two of them), and use a loop to display a row of them.
  2. Add an author property to each book, and display the author below the title.
  3. Add a new property to each object to store a color, using the color command, and use that to fill each book differently. (Or maybe store an image?)
  4. Add a boolean property to each book (like whether you would recommend it to friends), and use a conditional inside the loop to draw something different depending on whether the boolean is true or false.
  5. Bonus: Draw more shelves down the canvas and fill them with books.
  Think about how you can use conditionals and/or the % operator to wrap the books onto the next shelf.
 *
 * Don't want to make a bookshelf?
 * You could also make a shelf of videos or video games, or re-create the home screen of your smartphone.
 */

var book = [
  {
    title: "The Giver",
    author: "Unknown",
    stars: 2,
    isRecommended: false,
    color: [random(0, 255), random(0, 255), random(0, 255)],
    x: 0,
    y: 0
  },
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    stars: 4,
    isRecommended: true,
    color: [random(0, 255), random(0, 255), random(0, 255)],
    x: 1,
    y: 0
  },
  {
    title: "Game of Thrones",
    author: "George Martin",
    stars: 3,
    isRecommended: true,
    color: [random(0, 255), random(0, 255), random(0, 255)],
    x: 2,
    y: 0
  },
  {
    title: "One Piece",
    author: "Eiichiro Oda",
    stars: 5,
    isRecommended: true,
    color: [random(0, 255), random(0, 255), random(0, 255)],
    x: 3,
    y: 0
  },
  {
    title: "Twilight",
    author: "Stephanie Meyer",
    stars: 4,
    isRecommended: true,
    color: [random(0, 255), random(0, 255), random(0, 255)],
    x: 0,
    y: 1
  },
  {
    title: "Maze Runner",
    author: "Rick Riordan",
    stars: 3,
    isRecommended: false,
    color: [random(0, 255), random(0, 255), random(0, 255)],
    x: 1,
    y: 1
  },
  {
    title: "The Chronicles of Narnia",
    author: "C. S. Lewis",
    stars: 3,
    isRecommended: true,
    color: [random(0, 255), random(0, 255), random(0, 255)],
    x: 2,
    y: 1
  },
  {
    title: "Percy Jackson",
    author: "Rick Riordan",
    stars: 4,
    isRecommended: true,
    color: [random(0, 255), random(0, 255), random(0, 255)],
    x: 3,
    y: 1
  },
  {
    title: "Divergent",
    author: "Veronica Roth",
    stars: 4,
    isRecommended: true,
    color: [random(0, 255), random(0, 255), random(0, 255)],
    x: 0,
    y: 2
  }
];

// draw book
for (var i = 0; i < book.length; i++) {
  fill(book[i].color[0], book[i].color[1], book[i].color[2]);
  rect(5 + book[i].x * 100, 20 + book[i].y * 120, 90, 100);
  
  // text
  // textAlign(CENTER, TOP);
  textSize(13);
  fill(0, 0, 0);
  text(book[i].title, 10 + book[i].x * 100, 33 + book[i].y * 120, 80, 100);
  textSize(10);
  text(book[i].author, 8 + book[i].x * 100, 57 + 23  + (book[i].y * 120), 80, 100);
  
  // stars
  for (var j = 0; j < book[i].stars; j++) {
    image(getImage("cute/Star"), 8 + j * 16 + book[i].x * 100, 90 + book[i].y * 120, 20, 30);
  }
  
  // isRecommended w/ heart
  if (book[i].isRecommended === true) {
    for (var k = 0; k < book[i].isRecommended; k++) {
      image(getImage("cute/Heart"), 78 + k * 16 + book[i].x * 100, 17 + book[i].y * 120, 15, 25);
    }
  }
}

// draw shelf
for (var i = 0; i < 320; i += 120) {
  fill(173, 117, 33);
  rect(0, 120 + i, width, 10);
}

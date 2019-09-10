/* Challenge: Book list database

Step 1: Create a table to store your list of books.
It should have columns for id, name, and rating. */

CREATE TABLE books (
  id INTEGER PRIMARY KEY,
  name TEXT,
  rating INTEGER);


/* Step 2: Add three of your favorite books into the table. */

INSERT INTO books VALUES(1, "Harry Potter", 5);
INSERT INTO books VALUES(2, "Twilight", 4);
INSERT INTO books VALUES(3, "The Hunger Games", 3);
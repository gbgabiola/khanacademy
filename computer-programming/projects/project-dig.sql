/* Project: Data dig

Check the curated interesting data sets.

Pick one of those data sets or create a data set like that, and use advanced SELECT queries to discover things about the data.
What sort of questions might one have about that data, like if they were using it for an app or a business idea?
Here are some ideas:

- What are average, max, and min values in the data?
- What about those numbers per category in the data (using HAVING)?
- What ways are there to group the data values that don’t exist yet (using CASE)?
- What interesting ways are there to filter the data (using AND/OR)? */

CREATE TABLE marvels (id INTEGER PRIMARY KEY,
  name TEXT,
  real_name TEXT,
  gender TEXT,
  height_m NUMERIC,
  weight_kg NUMERIC,
  citizenship TEXT,
  intelligence INTEGER,
  strength INTEGER,
  speed INTEGER,
  durability INTEGER,
  energy_projection INTEGER,
  fighting_Skills INTEGER,
  char_alignment TEXT,
  popularity INTEGER);

INSERT INTO marvels VALUES (1, "Iron Man", "Tony Stark", "Male", 1.85, 102, "American", 6, 6, 5, 6, 6, 4, "Lawful Neutral", 9);
INSERT INTO marvels VALUES (2, "Spider Man", "Peter Parker", "Male", 1.70, 76, "American", 4, 4, 3, 3, 1, 4, "Neutral Good", 1);
INSERT INTO marvels VALUES (3, "Captain America", "Steven Rogers", "Male", 1.85, 100, "American", 3, 3, 2, 3, 1, 6, "Lawful Good", 2);
INSERT INTO marvels VALUES (4, "Captain Marvel", "Carol Danvers", "Male", 1.70, 56, "American", 3, 5, 5, 6, 5, 4, "Neutral Good", 17);
INSERT INTO marvels VALUES (5, "Thanos", "Thanos", "Male", 2.52, 447, "Titan", 6, 7, 7, 6, 6, 4, "Lawful Evil", 26);
INSERT INTO marvels VALUES (6, "Thor", "Thor Odinson", "Male", 2.52, 447, "Asgardian", 2, 7, 7, 6, 6, 4, "Chaotic Good", 26);
INSERT INTO marvels VALUES (7, "Doctor Doom", "Victor von Doom", "Male", 1.88, 102, "Latverian", 6, 4, 5, 6, 6, 4, "Lawful Evil", 5);
INSERT INTO marvels VALUES (8, "Black Panther", "T'Challa", "Male", 1.83, 91, "Wakandan", 5, 3, 2, 3, 3, 5, "Lawful Neutral", 22);

INSERT INTO marvels VALUES (9, "Dr. Strange", "Stephen Strange", "Male", 1.88, 82, "American", 4, 2, 7, 2, 6, 6, "Neutral Good", 19);
INSERT INTO marvels VALUES (10, "Hulk", "Bruce Banner", "Male", 2.5, 640, "American", 6, 7, 3, 7, 5, 4, "Chaotic Neutral", 8);

-- INSERT INTO marvels VALUES (11, "Hulk", "Bruce Banner", "Male", 2.5, 640, "American", 6, 7, 3, 7, 5, 4, "Chaotic Neutral", 8);

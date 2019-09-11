/* Project: Data dig

Check the curated interesting data sets.

Pick one of those data sets or create a data set like that, and use advanced SELECT queries to discover things about the data.
What sort of questions might one have about that data, like if they were using it for an app or a business idea?
Here are some ideas:

- What are average, max, and min values in the data?
- What about those numbers per category in the data (using HAVING)?
- What ways are there to group the data values that don’t exist yet (using CASE)?
- What interesting ways are there to filter the data (using AND/OR)? */

/* Marvel Heroes and Villains
- Marvels data came from https://marvel.fandom.com/wiki/Marvel_Database
- Power Data from https://marvel.fandom.com/wiki/Power_Grid#Power
- Popularity from https://www.cbr.com/2015-top-100-dc-and-marvel-comic-book-characters-master-list/
- Character allignment from https://characterprofile.fandom.com/wiki/Character_Profile_Wikia or https://www.quora.com/If-Marvel-superheroes-had-alignments-like-in-Dungeons-Dragons-what-would-they-be
*/

CREATE TABLE marvelDB (id INTEGER PRIMARY KEY,
  name TEXT,
  real_name TEXT,
  popularity INTEGER,
  char_alignment TEXT,
  gender TEXT,
  height_m NUMERIC,
  weight_kg NUMERIC,
  citizenship TEXT,
  intelligence INTEGER,
  strength INTEGER,
  speed INTEGER,
  durability INTEGER,
  energy_projection INTEGER,
  fighting_Skills INTEGER
  );

INSERT INTO marvelDB VALUES (1, "Iron Man", "Tony Stark", 9, "Neutral Good", "Male", 1.85, 102, "American, Bulgarian", 6, 6, 5, 6, 6, 4);
INSERT INTO marvelDB VALUES (2, "Spider Man", "Peter Parker", 1, "Neutral Good", "Male", 1.70, 76, "American", 4, 4, 3, 3, 1, 4);
INSERT INTO marvelDB VALUES (3, "Captain Marvel", "Carol Danvers", 17, "Neutral Good", "Female", 1.70, 56, "American", 3, 5, 5, 6, 5, 4);
INSERT INTO marvelDB VALUES (4, "Captain America", "Steven Rogers", 2, "Lawful Good", "Male", 1.85, 100, "American", 3, 3, 2, 3, 1, 6);
INSERT INTO marvelDB VALUES (5, "Thanos", "Thanos", 26, "Chaotic Evil", "Male", 2.52, 447, "Titan, Dynamo City", 6, 7, 7, 6, 6, 4);
INSERT INTO marvelDB VALUES (6, "Thor Odinson", "Thor Odinson", 26, "Neutral Good", "Male", 2.52, 447, "Asgardian", 2, 7, 7, 6, 6, 4);
INSERT INTO marvelDB VALUES (7, "Doctor Doom", "Victor von Doom", 5, "Lawful Evil", "Male", 1.88, 102, "Latverian", 6, 4, 5, 6, 6, 4);
INSERT INTO marvelDB VALUES (8, "Black Panther", "T'Challa", 22, "Lawful Good", "Male", 1.83, 91, "Wakandan", 5, 3, 2, 3, 3, 5);
INSERT INTO marvelDB VALUES (9, "Dr. Strange", "Stephen Strange", 19, "Neutral Good", "Male", 1.88, 82, "American", 4, 2, 7, 2, 6, 6);
INSERT INTO marvelDB VALUES (10, "Hulk", "Bruce Banner", 8, "Chaotic Good", "Male", 2.5, 640, "American, Sakaaran", 6, 7, 3, 7, 5, 4);
INSERT INTO marvelDB VALUES (11, "Scarlet Witch", "Wanda Maximoff", 34, "Neutral Good", "Female", 1.70, 60, "American, Serbian", 3, 2, 2, 2, 6, 3);
INSERT INTO marvelDB VALUES (12, "Hawkeye", "Clinton Barton", 44, "Neutral Good", "Male", 1.73, 104, "American", 3, 2, 2, 2, 1, 6);
INSERT INTO marvelDB VALUES (13, "Galactus", "Galan", 50, "Neutral Evil", "Male", 8.81, 16329, "Taa-an", 7, 7, 7, 7, 7, 2);
INSERT INTO marvelDB VALUES (14, "Black Widow", "Natalia Romanova", 30, "Neutral Good", "Female", 1.70, 57, "Russian, Soviet, American", 3, 3, 2, 3, 3, 6);
INSERT INTO marvelDB VALUES (15, "Vision", "The Vision", 45, "Lawful Good", "Male", 1.91, 136, "American", 4, 5, 3, 6, 6, 3);
INSERT INTO marvelDB VALUES (16, "Loki", "Loki Laufeyson", 32, "Lawful Evil", "Male", 1.93, 238, "Asgardian", 5, 5, 7, 6, 6, 3);
INSERT INTO marvelDB VALUES (17, "Magneto", "Max Eisenhardt", 6, "Lawful Evil", "Male", 1.88, 86, "German", 5, 2, 5, 2, 6, 4);
INSERT INTO marvelDB VALUES (18, "Cyclops", "Scott Summers", 10, "Lawful Neutral", "Male", 1.91, 88, "American", 3, 2, 2, 2, 5, 4);
INSERT INTO marvelDB VALUES (19, "Winter Soldier", "James Buchanan Barnes", 36, "Neutral", "Male", 1.75, 118, "American", 2, 4, 2, 3, 1, 6);
INSERT INTO marvelDB VALUES (20, "Ant-Man (Hank Pym)", "Henry Pym", 41, "Neutral Good", "Male", 1.83, 243, "American", 6, 7, 3, 3, 6, 3);

SELECT * FROM marvelDB GROUP BY popularity;

SELECT name, popularity,
CASE
  WHEN popularity < 10 THEN "Favorite"
  WHEN popularity < 25 THEN "Popular"
  WHEN popularity < 50 THEN "Known"
  ELSE "Anonymous"
END AS label
FROM marvelDB ORDER BY popularity;

SELECT min(popularity) AS popularity, name
FROM marvelDB GROUP BY popularity
HAVING POPULARITY < 10;

SELECT name, strength, intelligence
FROM marvelDB WHERE strength >= 5
OR intelligence >= 5 ORDER BY strength DESC;

SELECT popularity AS most_powerful, name
FROM marvelDB WHERE strength >= 4
AND intelligence >= 4 AND speed >= 4 AND durability >= 4 AND fighting_skills >= 4 GROUP BY name;
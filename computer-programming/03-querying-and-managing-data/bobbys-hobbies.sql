/* Challenge: Bobby's Hobbies

We've created a database of people and hobbies, and each row in hobbies is related to a row in persons via the person_id column. */

CREATE TABLE persons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTEGER);
    
INSERT INTO persons (name, age) VALUES ("Bobby McBobbyFace", 12);
INSERT INTO persons (name, age) VALUES ("Lucy BoBucie", 25);
INSERT INTO persons (name, age) VALUES ("Banana FoFanna", 14);
INSERT INTO persons (name, age) VALUES ("Shish Kabob", 20);
INSERT INTO persons (name, age) VALUES ("Fluffy Sparkles", 8);

CREATE table hobbies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id INTEGER,
  name TEXT);
    
INSERT INTO hobbies (person_id, name) VALUES (1, "drawing");
INSERT INTO hobbies (person_id, name) VALUES (1, "coding");
INSERT INTO hobbies (person_id, name) VALUES (2, "dancing");
INSERT INTO hobbies (person_id, name) VALUES (2, "coding");
INSERT INTO hobbies (person_id, name) VALUES (3, "skating");
INSERT INTO hobbies (person_id, name) VALUES (3, "rowing");
INSERT INTO hobbies (person_id, name) VALUES (3, "drawing");
INSERT INTO hobbies (person_id, name) VALUES (4, "coding");
INSERT INTO hobbies (person_id, name) VALUES (4, "dilly-dallying");
INSERT INTO hobbies (person_id, name) VALUES (4, "meowing");


/* Step 1: Insert one more row in persons and then one more row in hobbies that is related to the newly inserted person. */

INSERT INTO persons (name, age) VALUES ("Genesis", 26);
INSERT INTO hobbies (person_id, name) VALUES (5, "learning");


/* Step 2: Select the 2 tables with a join so that you can see each person's name next to their hobby. */

SELECT persons.name, hobbies.name
FROM persons JOIN hobbies ON persons.id = hobbies.person_id;


/* Step 3: Add an additional query that shows only the name and hobbies of 'Bobby McBobbyFace', using JOIN combined with WHERE.*/

SELECT persons.name, hobbies.name FROM persons JOIN hobbies ON persons.id = hobbies.person_id WHERE persons.name = "Bobby McBobbyFace";
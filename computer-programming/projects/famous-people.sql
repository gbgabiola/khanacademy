/* Project: Famous people

In this project, you’re going to make your own table with some small set of "famous people", then make more tables about things they do and join those to create nice human readable lists.

For example, here are types of famous people and the questions your data could answer:

- Movie stars: What movies are they in? Are they married to each other?
- Singers: What songs did they write? Where are they from?
- Authors: What books did they write?
- Fictional characters: How are they related to other characters? What books do they show up in? */

/* Create table about the people and what they do here */













CREATE TABLE stars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTEGER,
  gender TEXT,
  marriage TEXT);

INSERT INTO stars (name, age, gender, marriage) VALUES ("Lil Pump", 17, "M", "No");
INSERT INTO stars (name, age, gender, marriage) VALUES ("Jake Paul", 20, "M", "No");
INSERT INTO stars (name, age, gender, marriage) VALUES ("Iosif Dzhugashvili", 74, "M", "Yes");
  INSERT INTO stars (name, age, gender, marriage) VALUES ("Lil Xan", 21, "M", "No");
  INSERT INTO stars (name, age, gender, marriage) VALUES ("John Cena", 40, "M", "Yes");
  INSERT INTO stars (name, age, gender, marriage) VALUES ("Amanda Bynes", 31, "F", "No");
  INSERT INTO stars (name, age, gender, marriage) VALUES ("Rachel Zoe", 46, "F", "Yes");
  INSERT INTO stars (name, age, gender, marriage) VALUES ("Rachel Zoe", 46, "F", "Yes");
  INSERT INTO stars (name, age, gender, marriage) VALUES ("Hugh Laurie", 58, "M", "Yes");
INSERT INTO stars (name, age, gender, marriage) VALUES ("Jennifer Aniston", 48, "F", "Yes");
INSERT INTO stars (name, age, gender, marriage) VALUES ("Christina Aguilera", 36, "F", "No");
INSERT INTO stars (name, age, gender, marriage) VALUES ("Selena Gomez", 25, "F", "No");
INSERT INTO stars (name, age, gender, marriage) VALUES ("Queen Latifah", 47, "F", "No");
INSERT INTO stars (name, age, gender, marriage) VALUES ("Tiger Woods", 41, "M", "No");
INSERT INTO stars (name, age, gender, marriage) VALUES ("The Weeknd", 27, "M", "No");

CREATE TABLE typeofceleb (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  type TEXT);

INSERT INTO typeofceleb (name, type) VALUES ("Lil Pump", "Rapper");
INSERT INTO typeofceleb (name, type) VALUES ("Jake Paul", "Rapper");
INSERT INTO typeofceleb (name, type) VALUES ("Iosif Dzhugashvili", "Political Figure");
INSERT INTO typeofceleb (name, type) VALUES ("Lil Xan", "Rapper");
INSERT INTO typeofceleb (name, type) VALUES ("John Cena", "Actor");
INSERT INTO typeofceleb (name, type) VALUES ("Amanda Bynes", "Actor");
INSERT INTO typeofceleb (name, type) VALUES ("Rachel Zoe", "IDK");
INSERT INTO typeofceleb (name, type) VALUES ("Rachel Hoe", "IDK");
INSERT INTO typeofceleb (name, type) VALUES ("Hugh Laurie", "Actor");
INSERT INTO typeofceleb (name, type) VALUES ("Jennifer Aniston", "Actor");
INSERT INTO typeofceleb (name, type) VALUES ("Christina Aguilera", "Singer");
INSERT INTO typeofceleb (name, type) VALUES ("Selena Gomez", "Singer");
INSERT INTO typeofceleb (name, type) VALUES ("Queen Latifah", "Actor");
INSERT INTO typeofceleb (name, type) VALUES ("Tiger Woods", "Golfer");
INSERT INTO typeofceleb (name, type) VALUES ("The Weeknd", "Singer");

SELECT name FROM typeofceleb WHERE type = "Actor";
SELECT name FROM typeofceleb WHERE name IN
(SELECT name FROM stars WHERE age < 35);
SELECT stars.name, typeofceleb.name FROM stars
JOIN typeofceleb
ON stars.name = typeofceleb.name
WHERE stars.name = "Lil Pump";





/* Contains at least two tables with at
least 15 rows total. One of the tables contains a column that relates to the primary key of another table.
Has at least one query that does a JOIN. */

CREATE TABLE billionares (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullname TEXT,
  age INTEGER,
  nationality TEXT);

INSERT INTO billionares (fullname, age, nationality) VALUES ("Jeff Bezos", 54, "US");
INSERT INTO billionares (fullname, age, nationality) VALUES ("Bill Gates", 62, "US");
INSERT INTO billionares (fullname, age, nationality) VALUES ("Warren Buffet", 87, "US");
INSERT INTO billionares (fullname, age, nationality) VALUES ("Bernard Arnault", 69, "France");
INSERT INTO billionares (fullname, age, nationality) VALUES ("Mark Zucherberg", 33, "US");

CREATE table wealth (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  billionare_id INTEGER,
  net_worth TEXT,
  source_wealth TEXT);

INSERT INTO wealth (billionare_id, net_worth, source_wealth) VALUES (1, "112 billion", "Amazon");
INSERT INTO wealth (billionare_id, net_worth, source_wealth) VALUES (2, "90 billion", "Microsoft");
INSERT INTO wealth (billionare_id, net_worth, source_wealth) VALUES (3, "84 billion", "Berkshire Hathaway");
INSERT INTO wealth (billionare_id, net_worth, source_wealth) VALUES (4, "72 billion", "LVMH");
INSERT INTO wealth (billionare_id, net_worth, source_wealth) VALUES (5, "71 billion", "Facebook");

/*Return total net worth for each billionare*/
SELECT billionares.fullname, wealth.net_worth
FROM billionares
JOIN wealth
ON billionares.id = wealth.billionare_id;

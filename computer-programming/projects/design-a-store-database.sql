/* Project: Design a store database

Create your own store! Your store should sell one type of things, like clothing or bikes, whatever you want your store to specialize in. 
You should have a table for all the items in your store, and at least 5 columns for the kind of data you think you'd need to store.
You should sell at least 15 items, and use select statements to order your items by price and show at least one statistic about the items. */

CREATE TABLE fruits (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, color TEXT, quantity INTEGER);

INSERT INTO fruits VALUES(1, "Watermelon", 9.99, "Red", 20);
INSERT INTO fruits VALUES(2, "Grapes", 3.73, "Purple", 100);
INSERT INTO fruits VALUES(3, "Strawberries", 3.49, "Red", 200);
INSERT INTO fruits VALUES(4, "Pineapples", 7.99, "Yellow", 30);
INSERT INTO fruits VALUES(5, "Oranges", 4.26, "Orange", 80);
INSERT INTO fruits VALUES(6, "Peaches", 4.89, "Orange", 35);
INSERT INTO fruits VALUES(7, "Kiwi", 5.67, "Green", 35);
INSERT INTO fruits VALUES(8, "Blackberries", 5.99, "Black", 50);
INSERT INTO fruits VALUES(9, "Apples", 2.42, "Red", 150);
INSERT INTO fruits VALUES(10, "Bananas", 2.76, "Yellow", 120);
INSERT INTO fruits VALUES(11, "Mangoes", 3.77, "Yellow", 85);
INSERT INTO fruits VALUES(12, "Pears", 5.66, "Green", 125);
INSERT INTO fruits VALUES(13, "Coconut", 8.58, "Brown", 35);
INSERT INTO fruits VALUES(14, "Papaya", 5.49, "Orange", 60);
INSERT INTO fruits VALUES(15, "Dragonfruit", 6.96, "Pink", 25);

SELECT * FROM fruits ORDER BY price;
SELECT id, name, price FROM fruits ORDER BY id;
SELECT name, quantity FROM fruits GROUP BY name;
SELECT SUM(price) FROM fruits;
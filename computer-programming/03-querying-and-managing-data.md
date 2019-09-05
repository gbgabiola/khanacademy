## [Intro to SQL: Querying and managing data](https://www.khanacademy.org/computing/computer-programming/sql) <!-- omit in toc -->

- [SQL basics](#sql-basics)


## SQL basics

- **Introduction to SQL**
  - Everything is full of Data
  - **Database** helps store data, and provides functionality for adding, modifying, and querying data
  - Database comes in many forms, E.g. Spatial, XML, Graph, Non-relational & Relational which is the most popular
  - **Relational Database** stores each kind of data in a Table, like storing data in a spreadsheet
    - **row** represents an item
    - **column** represents properties about that item
  - Most database comes with a Query Language to interact with the database
  - **SQL (Structured Query Language)** is design for accessing databases, and is the most popular one
- **Creating a table and inserting data**
  - When creating table, you can specify different data types for the columns
    - `INTEGER` (a whole number), `REAL` (floating point number), and `TEXT` (a string of text)
    - when a column isn't storing any value, it is a `NULL` value
  - `id` is almost always needed in a database, a unique identifier for each row to identify them when adding, deleting or modifying them
    - `PRIMARY KEY` makes it a unique identifier for the row in the table
  - use `INSERT` to insert rows into a table
    - either specify every column value in parentheses after the `VALUES`
    - or specify a comma-separated list of columns name before `VALUES`, and only specify those column values in the parentheses after

  ```sql
  CREATE TABLE groceries(id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, aisle INTEGER);

  INSERT INTO groceries VALUES(1, "Bananas", 4, 7);
  INSERT INTO groceries VALUES(2, "Peanut Butter", 1, 2);
  INSERT INTO groceries VALUES(3, "Dark chocolate bars", 2, 2);
  INSERT INTO groceries VALUES(4, "Ice Cream", 1, 12);
  INSERT INTO groceries VALUES(5, "Cherries", 6, 2);
  INSERT INTO groceries VALUES(6, "Chocolate syrup", 1, 4);
  ```

  | id | name                | quantity | aisle |
  |:--:|:------------------- | :------- | :---- |
  | 1  | Bananas             | 4        | 7
  | 2  | Peanut Butter       | 1        | 2
  | 3  | Dark chocolate bars | 2        | 2
  | 4  | Ice cream           | 1        | 12
  | 5  | Cherries            | 6        | 2
  | 6  | Chocolate syrup     | 1        | 4

- **Querying the table**
  - use `SELECT` to query your tables
  - to form a query it starts with `SELECT` column name, then `FROM` table name
  - if `*` is specified , you'll get all the column values for each row
  - use `WHERE` and condiiton to filter results
    - specify a condition by column name, then a comparison operator, then a number or string
    - comparison operators are: `>`, `<`, `>=`, `<=`, `=`, and `!=`
    - filter to see only results where multiple conditions are true by combining them with an `AND` operator
    - use `OR` operator where any number of conditions is true
    - `AND` operator has precedence over `OR`, use parentheses to change the order of evaluation
  - change the order of the rows by adding an `ORDER BY` clause at the end of your query, with a column name after
    - specify `DESC` for "descending order" or `ASC` for "ascending order" after the column name

  ```sql
  SELECT * FROM groceries WHERE aisle > 5 ORDER BY aisle;
  ```

- **Aggregating data**
  - aggregate function is useful for making calculations based on columns: `AVG`, `MAX`/`MIN`, `SUM`, and `COUNT`
  - `GROUP BY` to group the selected columns by a particular column value
    - typically used in combination with aggregate functions, so that the results show the result of some aggregation function for rows with particular column values

  ```sql
  SELECT aisle, SUM(quantity) FROM groceries GROUP BY aisle;
  ```
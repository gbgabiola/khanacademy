## [Intro to SQL: Querying and managing data](https://www.khanacademy.org/computing/computer-programming/sql) <!-- omit in toc -->

- [SQL basics](#sql-basics)
- [More advanced SQL queries](#more-advanced-sql-queries)
- [Relational queries in SQL](#relational-queries-in-sql)
- [Resources](#resources)


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
  CREATE TABLE <table_name>(column1   data_type[(size)], column2   data_type[(size)], ...);

  INSERT INTO < table name > (col1,col2...col n) VALUES (value1,value2…value n);
  ```

- **Querying the table**
  - use `SELECT` to query/fetch information from a table
  - to form a query it starts with `SELECT` column name, then `FROM` table name
  - if `*` is specified , you'll get all the column values for each row
  - use `WHERE` and condiiton to filter results
    - specify a condition by column name, then a comparison operator, then a number or string
    - comparison operators are: `>`, `<`, `>=`, `<=`, `=`, and `!=`
  - change the order of the rows by adding an `ORDER BY` clause at the end of your query, with a column name after
    - specify `DESC` for "descending order" or `ASC` for "ascending order" after the column name

  ```sql
  SELECT *|{[DISTINCT] column|expression [alias]...} FROM <table_name>;
  ```

- **Aggregating data**
  - aggregate function can produce a single value for an entire group or table, useful for making calculations based on columns: `AVG`, `MAX`/`MIN`, `SUM`, and `COUNT`
  - `GROUP BY` to group the selected columns by a particular column value
    - typically used in combination with aggregate functions, so that the results show the result of some aggregation function for rows with particular column values

  ```sql
  SELECT column_1, ..., SUM(group_column_name) FROM table_name GROUP BY group_column_name
  ```


## More advanced SQL queries

- **more complex queries with `AND`/`OR`**
  - specifying `AUTOINCREMENT` after `PRIMARY KEY`, will makes the SQL engine picks a completely new id
  - filter to see only results where multiple conditions are true by combining them with an `AND` operator
    - use `OR` operator where any number of conditions is true
    - `AND` operator has precedence over `OR`, use parentheses to change the order of evaluation
- **Querying `IN` subqueries**
  - use `IN` operator followed by comma-separated values in parentheses to find all the rows where a particular column value is one of a number of values
    - it's equivalent to using `OR` multiple times, but more concise.
    - can also use NOT IN to do the inverse query
  - use `LIKE` operator in the `WHERE` condition to do a pattern matching comparison, like to find a string somewhere in a text value
    - "`%`" character will match any sequence of `0` or more characters in the value
    - "`_`" character will match a single character. Other characters match either their lower case or upper case equivalent
- **Restricting grouped results with `HAVING`**
  - use `HAVING` to limit the results to only the rows where the grouped values match a certain condition
  - use `AS` keyword to rename the selected query
- **Who issues SQL queries?**
  - **Software engineers** who are building the backend (the server-side logic) and the frontend (the HTML/CSS/JS that renders data and forms
    - use SQL to communicate on the server-side with the database that's storing all of the user's data
    - should know how to do any queries needed by the frontend and how to insert data and update it
    - E.g. if users saw a dashboard when they logged on of how much exercise they did that day, the engineer would need to figure out how to do a `SELECT` filtered by date and user
  - **Data scientists** who are analyzing the data, trying to learn more about users, maybe coming up with suggestions about how to help them exercise more
    - need a deep understanding of `SELECT` statements, because they need to do very complex queries to do the analysis they're interested in
    - E.g. they might use a `SELECT` to analyze what percentage of users were more likely to do more exercise if they started off exercising in the morning, maybe using `CASE` and `GROUP BY`
  - **Product management** are the decision makers at a company, the people that look at the data, talk to users, look at the market, and try to understand how to improve a product to get more users, make users happier, or make more money
    - need an understanding of SQL queries so they can look at usage statistics and try to understand what parts of a product are being used the most, which parts are being used in surprising ways, and what isn't being used at all
    - they might use a `SELECT` to look at how many users even use the "heart_rate" field at all, if they're debating getting rid of it
- **Calculating results with CASE**
  - `CASE` expression can be useful for mapping column values to new values
    - use `CASE` followed by a series of `WHEN` ... `THEN` ... expressions, an optional `ELSE` ..., and then `END` followed by the name of the new column


## Relational queries in SQL

- **Splitting data into related tables**
  - let's say we have a table for logging how well students do on their tests, and we include emails in case we need to email parents about slipping grades:

    | student_name     | student_email        | test      | grade |
    | :--------------- | :------------------- | :-------- | :---- |
    | Peter Rabbit     | peter@rabbit.com     | Nutrition | 95    |
    | Alice Wonderland | alice@wonderland.com | Nutrition | 92    |
    | Peter Rabbit     | peter@rabbit.com     | Chemistry | 85    |
    | Alice Wonderland | alice@wonderland.com | Chemistry | 95    |

  - we might also have a table for logging what books each student reads:

    | student_name     | book_title                    | book_author    |
    | :--------------- | :---------------------------- | :------------- |
    | Peter Rabbit     | The Tale of Mrs. Tiggy-Winkle | Beatrix Potter |
    | Peter Rabbit     | Jabberwocky                   | Lewis Carroll  |
    | Alice Wonderland | The Hunting of the Snark      | Lewis Carroll  |
    | Alice Wonderland | Jabberwocky                   | Lewis Carroll  |

  - we might also have a table just for detailed student information:

    | id   | student_first | student_last | student_email        | phone    | birthday   |
    | :--- | :------------ | :----------- | :------------------- | :------- | :--------- |
    | 1    | Peter         | Rabbit       | peter@rabbit.com     | 555-6666 | 2001-05-10 |
    | 2    | Alice         | Wonderland   | alice@wonderland.com | 555-4444 | 2001-04-02 |

  - let's say we decide to remove email from the grades table, because we realize it's redundant with the email in the student details table. This is what we'd have:

    | student_name     | test      | grade |
    | :--------------- | :-------- | :---- |
    | Peter Rabbit     | Nutrition | 95    |
    | Peter Rabbit     | Nutrition | 92    |
    | Alice Wonderland | Chemistry | 85    |
    | Alice Wonderland | Chemistry | 95    |

  - So the best thing to do is to remove the `student_name` and replace that with `student_id`, since that is a guaranteed unique identifier:

    | id   | test      | grade |
    | :--- | :-------- | :---- |
    | 1    | Nutrition | 95    |
    | 2    | Nutrition | 92    |
    | 1    | Chemistry | 85    |
    | 2    | Chemistry | 95    |

  - we would make the same change to our books table, using `student_id` instead of `student_name`:

    | id   | book_title                    | book_author    |
    | :--- | :---------------------------- | :------------- |
    | 1    | The Tale of Mrs. Tiggy-Winkle | Beatrix Potter |
    | 2    | Jabberwocky                   | Lewis Carroll  |
    | 1    | The Hunting of the Snark      | Lewis Carroll  |
    | 2    | Jabberwocky                   | Lewis Carroll  |

  - we could have a table just about books:

    | id   | book_title                    | book_author    |
    | :--- | :---------------------------- | :------------- |
    | 1    | The Tale of Mrs. Tiggy-Winkle | Beatrix Potter |
    | 2    | Jabberwocky                   | Lewis Carroll  |
    | 3    | The Hunting of the Snark      | Lewis Carroll  |

  - and then our student_books table becomes:

    | student_id | book_id |
    | :--------- | :------ |
    | 1          | 1       |
    | 1          | 2       |
    | 2          | 3       |
    | 2          | 2       |

- **JOINing related tables**
  - use the `JOIN` clause to merge data from related tables, using `ON` to give the condition on which rows to merge.
  - **`CROSS JOIN`** produces a result set which is the number of rows in the first table multiplied by the number of rows in the second table if no `WHERE` clause is used along with `CROSS JOIN`.
    - If `WHERE` clause is used with `CROSS JOIN`, it functions like an `INNER JOIN`
    - alternative way of achieving the same result is to use column names separated by commas after `SELECT` and mentioning the table names involved, after a `FROM` clause

    ```sql
    SELECT * FROM table1 CROSS JOIN table2;

    -- or
    SELECT * FROM table1, table2
    ```

  - **`INNER JOIN`** selects all rows from both participating tables as long as there is a match between the columns
    - `INNER JOIN` is same as `JOIN` clause, combining rows from two or more tables

    ```sql
    SELECT * FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;

    -- or
    SELECT * FROM table1 JOIN table2 ON table1.column_name = table2.column_name;
    ```

- **Joining related tables with left outer joins**
  - `LEFT JOIN` or `LEFT OUTER JOIN` (specified with LEFT JOIN and ON)  joins two tables and fetches all matching rows of two tables for which the SQL-expression is true, plus rows from the frist table that do not match any row in the second table

  ```sql
  SELECT * FROM table1 LEFT [ OUTER ] JOIN table2 ON table1.column_name = table2.column_name;
  ```

- **Joining tables to themselves with self-joins**
  - **self join** is a join in which a table is joined with itself, especially when the table has a `FOREIGN KEY` which references its own `PRIMARY KEY`.
  - joining a table to itself is almost same as that for joining two different tables
  - to distinguish the column names from one another, aliases for the actual the table name are used, since both the tables have the same name.
  - table name aliases are defined in the `FROM` clause of the `SELECT` statement

  ```sql
  SELECT a.column_name, b.column_name... FROM table1 a, table1 b WHERE a.common_field = b.common_field;
  ```

- **Combining multiple joins**

  ```sql
  SELECT a.column_name, b.column_name FROM table3
  JOIN table2 a
  ON table3.common_field = a.common_field
  JOIN table2 b
  ON table3.common_field = b.common_field;
  ```


## Resources

- [Challenges](challenges.md)
- [Projects](../projects#lists-of-projects)
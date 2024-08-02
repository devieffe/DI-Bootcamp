Exercise 1 : Items And Customers
Instructions
We will work on the public database that we created yesterday.

Use SQL to get the following from the database:
All items, ordered by price (lowest to highest).
Items with a price above 80 (80 included), ordered by price (highest to lowest).
The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
All last names (no other columns!), in reverse alphabetical order (Z-A)


Exercise 2 : Dvdrental Database
Instructions
Setup
We will install a new sample database on our PostgreSQL servers.
Download this sample database file

There is a single file called dvdrental.tar inside the zip. Extract it to your local directory.
Tip : If you are using Mac, after extracting the zip file you will get a folder called dvdrental

Go to pgAdmin4, and navigate to Databases on the left panel.

Right click > Create > Database…

Type in the name of the new database: dvdrental, and click Save. Wait a few moments.

Right click on dvdrental under Databases in the left panel.

Click Restore….

For PC users choose the following format Custom or tar. For Mac Users, choose the following format Directory.

Next to Filename, you should see a button with 3 dots on it. Click the button.

For PC users: “Find your file in the window”. For Max users: “Find your folder in the window”. (you may have to check Show hidden files and folders?), and click the Select button.


If You Get Errors:
If you receive a “Utility not found” Error, you need to change pgadmin binary path. Check out this video

If you receive an error of binary path :
Go to your computer documents -> C: (on windows) -> Program Files -> PostgreSQL -> your version -> bin. Copy this path, it should be something like this : C:\Program Files\PostgreSQL\15\bin.
In pgAdmin select File -> Preferences -> Path -> Binary Path -> scroll down to PostgreSQL Binary Path -> Find your PostgreSQL version -> paste the path -> Save

If you see any other error messages, please save them and get assistance. If not, you should have a new database loaded into your server!
If you have a problem importing the database, here are the DEFAULT instructions


Diagram Of The Tables
Here is a diagram of the tables in the server. Take a look at it and learn about the tables, their columns, and the relationships between the different tables.



diagram



We will use the newly installed dvdrental database.

In the dvdrental database write a query to select all the columns from the “customer” table.

Write a query to display the names (first_name, last_name) using an alias named “full_name”.

Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).

Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.

Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.

Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.

Write a query to retrieve all movie details where the movie id is either 15 or 150.

Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.

No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.

Write a query which will find the 10 cheapest movies.

Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
Bonus: Try to not use LIMIT.

Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).

You need to check your inventory. Write a query to get all the movies which are not in inventory.

Write a query to find which city is in which country.

Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
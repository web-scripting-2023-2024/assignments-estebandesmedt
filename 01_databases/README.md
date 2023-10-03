# Challenges about databases

## Challenge 1

Open your Workbench and create an SQL script that:
* create a new table 'users' with the following properties:
    * An id that is filled in automatically and can never be null.
    * A name, cannot be null
    * A first name, cannot be null
    * An email, cannot be null
    * A phone number, may be null
    * A street, may be null
    * A number, may be null
    * A zip code, may be null
    * A city, may be null
    * The name of an avatar can be null
* fills the table with your data.

When your script is ready, you run it in the database VIVES so that the table with content is created there.

You save the script in a file `restore.sql`

## Challenge 2

Open your Workbench and create an SQL script that:
* create a new table `sensordata` with the following properties
    * An id that is filled in automatically and can never be null.
    * The moment of registration which is automatically filled in.
    * The measurement of CO2
    * The measurement of temperature
    * The measurement of humidity
* Fill the table with 10 fictitious data.

When your script is ready, you run it in the database VIVES so that the table with content is created there.

You save the script in a file `restore.sql`

## Challenge 3

Successively create the following SQL scripts and run them in your Workbench:
* Retrieve from the `sensordata` table only those records where the temperature is lower than 20°C.
* Retrieve from the `sensordata` table only those records where the CO2 < 800 and humidity > 50.
* Add a record where humidity = 99
* For all records where the temperature < 10, adjust the CO2 value to 750.
* Clear all records where humidity >80

You save the sql statements and the result in a file `challenge3.md`, use comments.




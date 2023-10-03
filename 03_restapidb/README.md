# Challenges about Rest API's for databases

## Challenge 1

* Create a new folder `rest-api` for your backend application.
* Now make sure that this becomes an 'Express ready' backend.
* Place the 'Hello World' example from Express in a file `src/server.js`.
* Make sure the server is running on port 3000
* Add a route to handle HTTP GET request to `/users`.
* This calls a method from the `dbUsers.js` file.
* Now create the file `/helpers/dbUsers.js`.
* Ensure that your request is processed in that file:
    * Retrieve all records from the 'users' table
    * As a response, the API delivers this in JSON format.
* Test your API with Postman

## Challenge 2

* Add a route to handle HTTP GET request to `/users` with a specific id as parameter.
* This calls a method from the `dbUsers.js` file.
* Ensure that your request is processed in that file:
    * Retrieve the record from the 'users' table with that id.
    * As a response, the API delivers this in JSON format.
* Test your API with Postman

## Challenge 3

* Add a route to handle HTTP POST request to `/users`.
* This calls a method from the `dbUsers.js` file.
* Ensure that your request is processed in that file:
    * Adding records in the 'users' table with the supplied data
    * As a response, the API provides an appropriate server response.
* Test your API with Postman

## Challenge 4

* Add a route to handle HTTP PUT request to `/users` with a specific id as parameter.
* This calls a method from the `dbUsers.js` file.
* Ensure that your request is processed in that file:
    * Updating the record with the specified id in the 'users' table with the supplied data
    * As a response, the API provides an appropriate server response.
* Test your API with Postman

## Challenge 5

* Add a route to catch HTTP DELETE request to `/users` with a specific id as parameter.
* This calls a method from the `dbUsers.js` file.
* Ensure that your request is processed in that file:
    * Delete the record with the specified id in the 'users' table
    * As a response, the API provides an appropriate server response.
* Test your API with Postman

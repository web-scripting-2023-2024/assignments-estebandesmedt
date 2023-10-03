# Challenges about Express.js

## Challenge 1

* Create a new folder `challenge1` for your backend application.
* Now make sure that this becomes an 'Express ready' backend.
* Place the 'Hello World' example from Express in a file `src/server.js`.
* Start your server and test if your backend REST API is working.
* Now change your port eg to 8000 and try again.

## Challenge 2

* Create a new folder `challenge2` for your backend application.
* Now make sure that this becomes an 'Express ready' backend.
* Place the 'Hello World' example from Express in a file `src/server.js`.
* Make sure the server is running on port 3080
* Now add the routes for a GET, POST, UPDATE and DELETE request for the path 'api'.
Your answer is always a text that shows which HTTP request has been used.
* Test this with Postman.
* Now add an extra route for a GET to `/admin` and test this again with Postman.

## Challenge 3

* Create a new folder `challenge3` for your backend application.
* Place the 'Hello World' example from Express in a file `src/server.js`.
* Make sure the server is running on port 3000
* Add a route for a GET request to the path `/clients` where the parameters 'clientId' and 'clientAge' can be specified.
* Send back the parameters in response so you can see that it works.
* Add a route for a GET request to the path `/animals` where the parameters 'category' and 'family' can be specified by separating them with a dot.
* Send back the parameters in response so you can see that it works.

## Challenge 4

* Create a new folder `challenge4` for your backend application.
* Place the 'Hello World' example from Express in a file `src/server.js`.
* Make sure the server is running on port 3000
* Add a route for a GET request to the path `/dir` where the parameter 'url' can be specified.
* In the route you retrieve the files in the specified url on your computer and return them in JSON format.
* Catch the error if you pass on a url that does not exist via error handling.

## Challenge 5

* Create a new folder `challenge5` for your backend application.
* Place the 'Hello World' example from Express in a file `src/server.js`.
* Make sure the server is running on port 3000
* Now add a route that receives a GET request to `/measurements`.
* Use the previously created sensor data table to retrieve the data from your database via a `measurements.js` file and send it back as a response from the API.
* Provide error handling.



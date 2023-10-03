# Challenges about Rest API's for files

## Challenge 1

* Create a backend application with Express that can handle an HTTP POST request to `/upload`.
* When processing this request, a validation first takes place (only .jpg, .jpeg, .png files with a file size < 2MB are allowed), valid files are uploaded to `/resources/images`.
* Test your API with Postman

## Challenge 2

* Now make sure your REST API can handle an HTTP GET request to `/images`.
* This returns all files in the folder `/resources/images` in JSON format (file name and url).
` Test your API with Postman

## Challenge 3

* Now make sure your REST API can handle an HTTP GET request to `/images/<filename>`.
* Downloads the requested file.
* Test your API with Postman

## Challenge 4

* Now make sure your REST API can handle an HTTP DELETE request to `/images/<filename>`.
* This will delete the requested file in the `resources/images` folder.
* Test your API with Postman


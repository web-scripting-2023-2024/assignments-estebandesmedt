require('dotenv').config(); // for node.js 5
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_DTBS = process.env.DB_DTBS;

// Create a connection to the database
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_DTBS
});

// open the MySQL connection
connection.connect(error => {
    if (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    } else {
        console.log("Successfully connected to the database.");
    }
});

connection.query('SELECT * FROM sensordata', (err, data) => {
    if (err) {
        console.error('Unable to perform the database query:', err);
        // Handle the error appropriately
        // res.status(404).send({ error: 'Unable to perform the database query.' });
    } else {
        console.log('The query answer is: ', data);
        // res.send(data);
    }

    connection.end(); // Close the MySQL connection here
});

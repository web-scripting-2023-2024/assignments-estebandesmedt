const express = require('express');
require('dotenv').config();
const app = express();
const dbUsers = require('../helpers/dbUsers');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/usersAll/:user', async (req, res) => {
    try {
      const users = await dbUsers.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Route to handle HTTP GET request to /users/:userId
app.get('/users/:userId', async (req, res) => {
    try {
      // Retrieve user details based on the userId parameter
      const userId = req.params.userId;
      // Call method from dbUsers.js to retrieve user details
      const user = await dbUsers.getUserById(userId);
  
      // Check if the user exists
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Send the user details in the response
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

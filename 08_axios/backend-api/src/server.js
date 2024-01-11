const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dbUsers = require('../helpers/dbUsers');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/usersAll', async (req, res) => {
    try {
      const users = await dbUsers.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.get('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await dbUsers.getUserById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/users', async (req, res) => {
    try {
      const userData = req.body;
  
      const userId = await dbUsers.addUser(userData);
  
      res.status(201).json({ userId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.put('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const userData = req.body;
  
      const affectedRows = await dbUsers.updateUser(userId, userData);
  
      if (affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.delete('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const affectedRows = await dbUsers.deleteUser(userId);
  
      if (affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

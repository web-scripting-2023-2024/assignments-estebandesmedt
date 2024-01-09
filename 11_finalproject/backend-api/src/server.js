const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const dbUsers = require('../helpers/dbUsers');
const storage = multer.diskStorage({

    destination: function(req, file, cb) {
      cb(null, 'resources/images');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/bachelorthesis', async (req, res) => {
    try {
      const users = await dbUsers.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.get('/bachelorthesis/:userId', async (req, res) => {
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

  app.get('/images/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.resolve(__dirname, '..', 'resources/images', filename);
  
    res.download(filepath, filename, (err) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  });
  
  app.post('/bachelorthesis', upload.single('image'), async (req, res) => {
    try {
      const userData = req.body;
      userData.image = req.file.originalname;
  
      const userId = await dbUsers.addUser(userData);
  
      res.status(201).json({ userId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded successfully' });
  });
  
  app.put('/bachelorthesis/:userId', async (req, res) => {
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

  app.delete('/bachelorthesis/:userId', async (req, res) => {
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

  app.delete('/images/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path.resolve(__dirname, '..', 'resources/images', filename);
  
    fs.unlink(filepath, (err) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'File deleted successfully' });
      }
    });
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

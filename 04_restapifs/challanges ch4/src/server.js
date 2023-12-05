const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './resources/images');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2000000,
  },
  fileFilter: fileFilter,
});

app.get('/images', (req, res) => {
  fs.readdir('./resources/images', (err, files) => {
    if (err) {
      res.status(500).send('Error reading directory');
    } else {
      const fileInfos = files.map(file => {
        return {
          name: file,
          url: `${req.protocol}://${req.get('host')}/resources/images/${file}`
        };
      });
      res.send(fileInfos);
    }
  });
});

app.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join('./resources/images', filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.setHeader('Content-Disposition', 'attachment; filename=' + filename);
      res.sendFile(path.resolve(filePath));
    }
  });
});

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.delete('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join('./resources/images', filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      fs.unlink(filePath, (err) => {
        if (err) {
          res.status(500).send('Error deleting file');
        } else {
          res.send('File deleted successfully');
        }
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
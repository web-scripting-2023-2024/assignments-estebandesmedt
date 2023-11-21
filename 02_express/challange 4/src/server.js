const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 3000;

app.get('/dir', async (req, res) => {
  try {
    const dirPath = req.query.url;

    if (!dirPath) {
      return res.status(400).json({ error: 'Missing URL parameter.' });
    }

    // Decode the URL to handle encoded characters
    const decodedDirPath = decodeURIComponent(dirPath.replace(/\+/g, ' '));

    const isDirectory = await fs.stat(decodedDirPath).then(stats => stats.isDirectory());

    if (!isDirectory) {
      return res.status(400).json({ error: 'The specified URL is not a directory.' });
    }

    const files = await fs.readdir(decodedDirPath);

    res.json({ files });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/clients/:clientId/:clientAge', (req, res) => {
  const { clientId, clientAge } = req.params;
  res.send(`Client ID: ${clientId}, Client Age: ${clientAge}`);
});

app.get('/animals/:params', (req, res) => {
  const { params } = req.params;
  const [category, family] = params.split('.');
  res.send(`Category: ${category}, Family: ${family}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

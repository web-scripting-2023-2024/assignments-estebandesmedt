const express = require('express')
const app = express()
const port = 3080

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })
app.put('/', (req, res) => {
  res.send('UPDATE request to the homepage')
})
app.delete('/', (req, res) => {
    res.send('DELETE request to the homepage')
  })
app.get('/admin', (req, res) => {
    res.send('ADMIN GET request to the homepage')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
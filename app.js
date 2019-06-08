const express = require('express')
const app = express()
const port = 3000

// Generate views
app.set('view engine', 'ejs')

// Directory and callback function
app.get('/', (req, res) => 
  res.render(''))

app.get('/tecnologia', (req, res) => 
  res.render('secao/tecnologia'))

app.get('/moda', (req, res) => 
  res.render('secao/moda'))

app.get('/beleza', (req, res) => 
  res.render('secao/beleza'))

app.listen(port, () => console.log(`server listening on port ${port}!`))
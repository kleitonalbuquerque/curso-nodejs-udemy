const express = require('express')
const app = express()
const port = 3000

// Generate views
app.set('view engine', 'ejs')

// Directory and callback function
app.get('/', (req, res) =>
  res.render('home/index'))

app.get('/formulario_inclusao_noticia', (req, res) =>
  res.render('admin/form_add_noticia'))

app.get('/noticias', (req, res) =>
  res.render('noticias/noticias'))

app.listen(port, () => console.log(`server listening on port ${port}!`))
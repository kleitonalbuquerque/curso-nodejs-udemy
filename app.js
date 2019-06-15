var app = require('./config/server')

var home = require('./app/routes/home')(app)

var rotaNoticias = require('./app/routes/noticias')(app)

var formAddNoticias = require('./app/routes/formulario_inclusao_noticia')(app)

var port = 3000

app.listen(port, () => {
  console.log(`server listening on port ${port}!`)
  }
)
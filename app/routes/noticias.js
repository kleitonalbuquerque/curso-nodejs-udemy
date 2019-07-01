module.exports = (app) => {

  app.get('/noticias', (req, res) => {
    app.app.controllers.admin.noticias.noticias(app, req, res)
  })

  app.get('/noticia', (req, res) => {
    app.app.controllers.admin.noticias.noticia(app, req, res)
  })
}
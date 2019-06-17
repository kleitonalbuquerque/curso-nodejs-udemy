module.exports = (app) => {
  app.get('/formulario_inclusao_noticia', (req, res) => res.render('admin/form_add_noticia'))

  app.post('/noticias/salvar', (req, res) => {
    var noticia = req.body 

    var connection = app.config.dbConnection()
    var noticiasModel = app.app.models.noticiasModel

    noticiasModel.salvarNoticia(noticia, connection, (error, results) => {
      res.redirect('/noticias')
    })
  })
}
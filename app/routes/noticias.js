module.exports = (app) => {

  app.get('/noticias', (req, res) => {

    var connection = app.config.dbConnection()
    var noticiasModel = app.app.models.noticiasModel

    noticiasModel.getNoticias(connection, (error, results) => {
      res.render('noticias/noticias', { noticias: results })
    })
  })
}
module.exports.noticias = (app, req, res) => {
  var connection = app.config.dbConnection()
  var noticiasModel = new app.app.models.NoticiasDAO(connection)

  noticiasModel.getNoticias((error, result) => {
    res.render('noticias/noticias', { noticias: result })
  })
}

module.exports.noticia = (app, req, res) => {
  var connection = app.config.dbConnection()
  var noticiasModel = new app.app.models.NoticiasDAO(connection)

  noticiasModel.getNoticia((error, result) => {
    res.render('noticias/noticia', { noticia: result })
  })
}
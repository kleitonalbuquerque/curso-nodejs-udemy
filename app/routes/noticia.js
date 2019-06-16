module.exports = (app) => {

  app.get('/noticia', (req, res) => {

    var connection = app.config.dbConnection()
    var noticiasModel = app.app.models.noticiasModel

     noticiasModel.getNoticia(connection, (error, results, fields) => {
       res.render('noticias/noticia', {noticia : results})
    })
  })
}
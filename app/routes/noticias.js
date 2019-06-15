var dbConnection = require('../../config/dbConnection')

module.exports = (app) => {

  var connection = dbConnection()

  app.get('/noticias', (req, res) => {

    connection.query('SELECT * FROM noticias', function (error, results, fields) {
      res.render('noticias/noticias', {noticias : results})
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    })
  })
}
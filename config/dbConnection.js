var mysql = require('mysql')

var connMySQL = () => {
  return connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'portal_noticias'
  })
}

module.exports = () => {
  return connMySQL
}
var mysql = require('mysql')

module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'portal_noticias'
  })

}
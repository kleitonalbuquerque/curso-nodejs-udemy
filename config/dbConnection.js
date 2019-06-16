var mysql = require('mysql')

var connMySQL = () => {
  console.log('Conexão com DB foi estabelecida.')
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'portal_noticias'
  })
}

module.exports = () => {
  console.log('O autoload carregou o módulo de conexão com DB.')
  return connMySQL
}
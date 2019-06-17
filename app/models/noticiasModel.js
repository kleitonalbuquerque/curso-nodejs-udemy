module.exports = () => {

  this.getNoticias = (connection, callback) => {
    connection.query('select * from noticias', callback)
  }

  this.getNoticia = (connection, callback) => {
    connection.query('SELECT * FROM noticias where id_noticia = 2', callback)
  }

  this.salvarNoticia = (noticia, connection, callback) => {
    connection.query('INSERT INTO noticias SET ?', noticia, callback)
  }

  return this
}
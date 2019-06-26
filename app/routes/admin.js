const { check, validationResult } = require('express-validator')
module.exports = (app) => {

  app.get('/formulario_inclusao_noticia', (req, res) => {
    res.render('admin/form_add_noticia')
  })

  app.post('/noticias/salvar', [

    check('titulo','Título é obrigatório').not().isEmpty(),
    check('resumo','Resumo é obrigatório').not().isEmpty(),
    check('resumo','Resumo tem que ter entre 5 a 100 caracteres').isLength({ min: 5, max: 100 }),
    check('autor','Autor tem que ter entre 10 a 100 caracteres').isLength({ min: 10, max: 100 }),
    check('autor','Autor é obrigatório').not().isEmpty(),
    check('data_noticia','Data é obrigatório').not().isEmpty(),
    check('noticia','Data é obrigatório').not().isEmpty()
  ], (req, res) => {
    let noticia = req.body

    const errors = validationResult(req)

    console.log(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    let conn = app.config.dbConnection();
    let noticiasModel = new app.app.models.NoticiasDAO(conn)

    noticiasModel.salvarNoticia(noticia, (error, result) => {
      res.redirect('/noticias')
    })
  })
}
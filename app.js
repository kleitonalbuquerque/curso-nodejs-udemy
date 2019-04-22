const express = require('express')
const app = express()
const port = 3000

// Diretório e função de callback
app.get('/', (req, res) => res.send('<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Curso Node</title></head><body>Portal de Notícias</body></html>'))

app.get('/tecnologia', (req, res) => res.send('<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Curso Node</title></head><body>Notícias de Tecnologia</body></html>'))

app.get('/moda', (req, res) => res.send('<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Curso Node</title></head><body>Notícias de moda</body></html>'))

app.get('/beleza', (req, res) => res.send('<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Curso Node</title></head><body>Notícias de beleza</body></html>'))

app.listen(port, () => console.log(`server listening on port ${port}!`))
var http = require('http')

var server = http.createServer(function(req, res){

  var categoria = req.url

  if(categoria == '/tecnologia'){
    res.end('<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Curso Node</title></head><body>Notícias de tecnologia</body></html>')
  } else if(categoria == '/moda'){
    res.end('<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Curso Node</title></head><body>Notícias de moda</body></html>')
  } else if(categoria == '/beleza'){
    res.end('<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Curso Node</title></head><body>Notícias de beleza</body></html>')
  } else {
    res.end('<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Curso Node</title></head><body>Portal de Notícias</body></html>')
  }
}).listen(3000)

console.log('Server is run on port 3000')
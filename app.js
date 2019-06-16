var app = require('./config/server')

var port = 3000

app.listen(port, () => {
  console.log(`server listening on port ${port}!`)
  }
)
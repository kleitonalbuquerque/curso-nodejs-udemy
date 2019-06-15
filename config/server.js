var express = require('express')
var app = express()

// Generate views
app.set('view engine', 'ejs')
app.set('views', './app/views')

module.exports = app
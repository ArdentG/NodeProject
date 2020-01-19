var express = require('express')
var app = express()

var port = process.env.PORT;
app.listen(port, error => {console.log("Started. Port : ", port)})
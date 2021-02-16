var express = require('express');
var http = require('http');
var app = express();
var server = http.Server(app);

var PORT = process.env.PORT || 8000;
app.use(express.static('client'));

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

console.log("Starting Server");
app.listen(PORT);
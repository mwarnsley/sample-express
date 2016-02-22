var express = require('express');

var app = express();

var port = 3000;

app.get('/', function(req, res){
    res.sendfile('html/index.html');
});

app.get('/index.css', function(req, res){
    res.sendfile('css/index.css');
});

app.get('/index.js', function(req, res){
    res.sendfile('js/index.js');
});

app.listen(port, function(err){
    if(err){
        console.log("There was an error running the server");
    }else{
        console.log("Running server on port " + port);
    }
});
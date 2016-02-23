var express = require('express');

var app = express();

var port = 5000;

app.get('/', function(req, res){
    res.sendfile('dist/index.html');
});

app.get('/index.css', function(req, res){
    res.sendfile('dist/index.css');
});

app.get('/index.js', function(req, res){
    res.sendfile('dist/index.js');
});

app.listen(port, function(err){
    if(err){
        console.log("There was an error running the server");
    }else{
        console.log("Running server on port " + port);
    }
});
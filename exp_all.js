var express = require("express");

var app = express();

app.all('/',function(req,res){
    res.send("Hello");
});

app.listen(3000);
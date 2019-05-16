var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.listen(3000, function(){
    console.log("Server Is Listening to PORT: 3000");
});
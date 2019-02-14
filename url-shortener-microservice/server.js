'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var cors = require('cors');
let inputUrl = "";
var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here
app.use(bodyParser.urlencoded({extended: false}));

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Create new route using passed in form body
app.get("/api/shorturl/1", function (req, res) {
  //inputUrl = inputUrl.url; 
  //console.log(inputUrl.url);
  res.redirect(inputUrl);
});

/** 12) Get data form POST  */
function postForm(req,res) {
  inputUrl = req.body.url;
  res.send({original_url: inputUrl, short_url:1})
}

app.post("/api/shorturl/new", postForm);


app.listen(port, function () {
  console.log('Node.js listening on port' + port);
});
'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var cors = require('cors');
const dns = require('dns');
let inputUrl = "";
var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

app.use(cors());

// Body parser middleware used for parsing message body in the url in a form post
app.use(bodyParser.urlencoded({extended: false}));

//Middleware that serves css  
app.use('/public', express.static(process.cwd() + '/public'));

// Root route that serves the html from the project views folder
app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
//Set Promise prototype to success/error instead of then/catch for resolving a promise
Promise.prototype.success = Promise.prototype.then;
Promise.prototype.error = Promise.prototype.catch;

// function that checks if url is a valid server address
function lookup(url) {
  //Promise is used to handle async call to dns server 
  return new Promise(function (resolve, reject) {
      dns.lookup(url, function (err, address) {
        if(err) {
          //return promise object that is rejected with given reason
          reject(err)
        }
        else {
          //return promise object that is resolved with given value
          resolve(address)
        }
      }) 
  })       
}                  

// Create new route using passed in form body
app.get("/api/shorturl/1", function (req, res) {
//   redirect the user to the original posted url
  res.redirect(inputUrl);
});

//remove http/https from the input url so dnslookup functions correctly
function parseUrl(url) {
  //find index of w in string
  let startParseIndex = url.indexOf('www');

  //return new string starting from index to end
  let parsedUrl = url.slice(8);
  //return new parsed url or original url if 'www' is not in the url string
  return startParseIndex == -1
    ? url
    : parsedUrl
  
}

/** 12) Get data form POST  */
function postForm(req,res) {
  inputUrl = req.body.url;
  let parsedInputUrl = parseUrl(inputUrl);
  
  
  // function that performs a dns lookup on the url and returns success or error object.
  lookup(parsedInputUrl)
    //If promise is a success respond with json object containing original url and short url fields
    .success(address => {
      res.send({original_url: inputUrl, short_url:1})
      })
    //Else respond with an error message json object.
    .error(e => res.send({error:"invalid URL"})) 
  
}

//Post input box's content at the route and call postForm handler
app.post("/api/shorturl/new", postForm);

app.listen(port, function () {
  console.log('Node.js listening on port' + port);
});
// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// function that validates if an input is a valid date object
function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

// route handler function that takes in a route and returns json with formatted timestamp information
function timeStamp (req, res) {
  let date_string = req.params.date_string 
  let dateObject = new Date(date_string)
  
  // if url param datestring is not a valid date:
  if(!isValidDate(dateObject)) {
    return res.json({"error" : "Invalid Date" });
  }
  // return the unix version of the date or utc version.
  return res.json({"unix": dateObject.getTime(), "utc" : dateObject.toUTCString()});
}

//Route with date_string url parameter call timeStamp function for json response
app.get("/api/timestamp/:date_string", timeStamp);

// if no datestring parameter is entered return current timestamp at route
app.get("/api/timestamp/", function (req, res) {
  let nowTime = new Date();
  return res.json({"unix": nowTime.getTime(), "utc" : nowTime.toUTCString()})
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
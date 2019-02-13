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


// Route with a callback that displays request header information 
app.get("/api/whoami", function (req, res) {
  // Display user browser/host machine information from the request header
  let userInfo = req.header('User-Agent');
  // Display user ip
  let userIp = req.ip;
  //Display user language   
  let userLang = req.header('Accept-Language')
  //Respond with a json object containing the above parsed information   
  res.json({
    ipaddress: userIp, 
    language: userLang, 
    software: userInfo
  });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

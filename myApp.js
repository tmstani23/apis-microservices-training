
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

function logger(req, res, next) {
  let logString = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logString);
  next();
}
app.use(logger);

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */
let absolutePath = __dirname +  "/views/index.html"

function sendResp (req, res) {
    res.sendFile(absolutePath); 
}
//serve html file at the root path:
app.get("/", sendResp);



/** 4) Serve static assets  */
//middlewares are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method 
const assetPath = __dirname + "/public";
const serveStatic = express.static(assetPath);
app.use(serveStatic);

/** 5) serve JSON on a specific route */
let heresJson = {"message": "Hello json"};

function sendJson (req, res) {
    //if the env file message style variable is set to uppercase 
  if(process.env.MESSAGE_STYLE == "uppercase") {
      let upperMessage = heresJson.message.toUpperCase()
      let returnRes = {"message": upperMessage} 
      // return the json message with the message text set to uppercase
      return res.json(returnRes)    
    } 
    // else return the regular message as json
    return res.json(heresJson);
  };

  app.get("/json", sendJson);

/** 6) Use the .env file to configure the app */
    


/** 8) Chaining middleware. A Time server */
app.get('/now', function(req, res, next) {
  //current time is added to the request object 
  req.time = new Date().toString();
    next();
  }, function(req,res){
    // response is sent as a json object showing current time
    res.json({time: req.time})
  }
)

/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
app.listen(process.env.PORT || 3000 ); 

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;

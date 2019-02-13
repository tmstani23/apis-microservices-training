# API Project: Request Header Parser Microservice 

A simple microservice that parses a user's request header and returns user information in json format.
Created using Express, Javascript, HTML and CSS.

## Features

* Microservice
  * Visit https://header-parser-service.glitch.me/api/whoami to get your header response 
  * See your http header information in json format
  * Service returns ip, language and software information in json format

* Express
  * Used to run the server, manage routes and send json


## Installation and How to Run
    * Clone the repository and install
    * Make sure current version of node/npm is installed
    * Navigate to source folder of project and type "cd header-parser-service" in terminal to traverse into the project dir.
    * Type npm install, in terminal, at project source path
    * Type npm start to run the server
    * Open browser in url field enter: localhost:<portname service is listening on>
        *example: localhost:6213


#### Example usage:
* Microservice can be accessed at: https://header-parser-service.glitch.me/
* Check your header information at: https://header-parser-service.glitch.me/api/whoami

#### Example output:
{
    "ipaddress":"::ffff:159.20.14.100",
    "language":"en-US,en;q=0.5",
    "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
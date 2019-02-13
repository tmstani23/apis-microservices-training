
# API Project: Timestamp Microservice for FCC


## Features

* Timestamp service
  * api endpoint at https://fcc-backend-projects.glitch.me/api/timestamp/
  * Visit /timestamp to get the current time in unix and utc format 
  * Add a valid timestamp format after the /timestamp to get the time displayed as utc and standard (see example usage at the bottom)
  * Service returns invalid error in json format if incorrect date/time is input in the url

* Express
  * Used to run the server, manage routes and send json


## Installation
    * Clone the repository and install
    * Make sure current version of node/npm is installed
    * Visit source file of project and type cd timestamp-service in terminal to traverse into the project dir.
    * Type npm install in terminal at project source path
    * Type npm start to run the server
    * Open browser to localhost:*portname service is listening on*


#### Example usage:
* https://fcc-backend-projects.glitch.me/api/timestamp/2015-12-15
* https://fcc-backend-projects.glitch.me/api/timestamp/1450137600000
* https://fcc-backend-projects.glitch.me/api/timestamp/

#### Example output:
* { "unix": 1450137600, "natural": "December 15, 2015" }

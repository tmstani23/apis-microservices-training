# API Project: URL Shortener Microservice

## Features

* Url Shortener
  * api endpoint hosted live at https://url-shortener-serv.glitch.me/
  * Visit api endpoint and post a valid url in the form 
     * A Json object is returned containing the url and a shortened url endpoint
     * Visit the shortened url and you will be redirected to the original url you provided
        * ex: [project_url]/api/shorturl/[shortenedurl]
  * Service returns invalid error in json format if invalid or non-functioning site is posted in the form

* Express
  * Used to run the server, manage routes and send json


## Installation
    * Clone the repository and install
    * Make sure current version of node/npm is installed
    * Visit source file of project and type cd url-shortener-microservice in terminal to traverse into the project dir.
    * Type npm install in terminal at project source path
    * Type npm start to run the server
    * Open browser to localhost:3000


#### Example usage:
* https://url-shortener-serv.glitch.me/
* https://url-shortener-serv.glitch.me/api/shorturl/1

#### Example output:
* {original_url: "https://www.freecodecamp.com", short_url:1}
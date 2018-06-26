# csp

**Summary** 

API for storing and filtering Security Header Violations. 

## Overview

API for storing Security Header Violation Reports and rendering them in HTML page for visual overview. 

## Installation
This is a [Node.js](https://nodejs.org/en/) module. 
Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Download this repository into you local machine and unzip. 

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
$ npm install 
```

API uses MongoDB in order to store Header Reports. make sure to install MongoDB under default path: data/db
Run an instance with command mongod: 

```
$ mongod
```

Then navigate to folder frontend and install angular cli. After that install angular project dependencies. 

```
$ cd frontend 
$ npm install -g @angular/cli@latest
$ npm install 
```
When finished, run following command to build the angular module: 

```
$ ng build 
```

Everything is set up now! Navigate back to the root folder and Start the server with: 

```
$ cd ../ 
$ npm run start  
```

type in following url to render the webpage: 

```
http://localhost:4000  
```

To send an example violation report in your terminal to the API, use this curl request: 

```
curl -H "Content-Type: application/json" -X POST -d '{ "csp-report": {
     "document-uri": "http://youtube.com/Anderson_Peter.html",
     "referrer": "",
     "blocked-uri": "http://youtube.com/css/styles.css",
     "violated-directive": "style-src cdn.example.com",
     "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /csp"
   }
 }' http://localhost:4000/csp

```
## Contributors

Hai Duc Dang

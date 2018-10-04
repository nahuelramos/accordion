/**
* Requires
*/

var express = require('express');

/**
* Config
*/

var config = {

PORT: 8888,
FOLDER: 'dist'

};

/**
* Inicializamos App de Express
*/

var app = express();

/**
* Public Static
*/

app.use('/', express.static(config.FOLDER));

/**
* Inicializamos servidor por HTTP
*/

app.listen(config.PORT);

console.info('Running on localhost:' + config.PORT + ': Folder: ' + config.FOLDER); 

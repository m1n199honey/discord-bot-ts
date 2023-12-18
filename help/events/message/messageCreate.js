var fs = require('fs');
var path = require('node:path');

// --------------------------------------------------
module.exports = {
    name: 'messageCreate',
    async execute(message) {
        console.log('message event is triggered ...');
    }
}
/*

Hoser stands in as an middleman between client applications of a Node.js / Express
application, brokering client requests for remote resources.

Remote resources must be described using the mappable mixin.

*/

var express = require('express')
    , test_adapter = require('./support/test_adapter');

if(typeof app === 'undefined') {
    app = express();
    app.set('adapters', { test: test_adapter });
}

module.exports = require('./lib/index');
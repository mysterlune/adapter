/*

The core of the module is bootstrapping an adapter.
NOTE This (index) module is primarily for testing the package

@see adapter The core element for organizing discussions between local and remote resources
@see object The core object for storing (getting/setting) data

*/
var _adapter = require('./adapter')
    , _ = require('underscore')
    , object = require('./object');

module.exports = _adapter;


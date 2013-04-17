/*
    Adapter is a mixin
*/
var debug = false
    , _ = require('underscore')
    , _object = require('object')
    , TestAdapter = require('../../test_adapter')
    , data = require('../../test_fixture');

var HandAdapter = TestAdapter.extend({
    toString: function() { return 'HandAdapter'; }
});

module.exports = HandAdapter;
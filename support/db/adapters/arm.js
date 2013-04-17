/*
    Adapter is a mixin
*/
var debug = false
    , _ = require('underscore')
    , _object = require('object')
    , TestAdapter = require('../../test_adapter')
    , data = require('../../test_fixture');

var ArmAdapter = TestAdapter.extend({
    toString: function() { return 'ArmAdapter'; }
});

module.exports = ArmAdapter;
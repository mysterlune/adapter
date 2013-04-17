/*

Hoser.Serializer

*/

var _ = require('underscore')
    object = require('object');

var Serializer = object.extend({ 
    
    type: null
    
    , serialize: function(object) {
        console.log('What is going up, dawg?');
        return '';
    }
    
    , unserialize: function(object) {
        console.log('What is coming down, dawg?');
        return {};
    }
    
});

module.exports = Serializer;
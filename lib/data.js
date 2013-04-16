var object = require('./object')
    _ = require('underscore');


/*
    Base object for establishing data relationships, providing promise objects, and
    resolving computed properties
    
    // FIXME Not implemented in any significant way...
*/
var Data = object.extend({
    
    has: function(name) {
        
        return {};
        
    }
    
    , hasMany: function(name) {
        
        return {};
        
    }
    
    , belongsTo: function(name) {
        
        return {}
        
    }
    
});

module.exports = Data;
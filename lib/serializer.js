/*

Hoser.Serializer

*/

var _ = require('underscore')
    object = require('object');

var IS_PLURALISH = /.+s$/;

var Serializer = object.extend({ 
    
    type: null
        
    , plurals: {}
    
    , addToPlurals: function(key, value) {
        this.plurals[key] = value;
        return this.plurals;
    }
    
    , removeFromPlurals: function(key) {
        var reduced = _.reject(this.plurals, function(v,k) { return k === key; });
        this.set('plurals', reduced);
    }
    
    , pluralize: function(str) {
        return this.plurals[str] || str+'s';
    }

    , singularize: function(str) {
        return _.invert(this.plurals)[str] || IS_PLURALISH.test(str) ? str.substring(0,(str.length-1)) : str;
    }

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
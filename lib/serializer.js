/*

Hoser.Serializer

*/

var _ = require('underscore');

module.exports = function(options) {
    
    var Serializer = function(options) {
        
        if(!this instanceof Serializer) {
            return new Serializer(options);
        }
        
        return this;
        
    }
    
    Serializer.prototype.type = null;
    
    Serializer.prototype.serialize = function(object) {
        console.log('what is going down, dawg?');
        return '';
    }
    
    Serializer.prototype.unserialize = function(object) {
        
        console.log('what is up, dawg?');
        return {};
    }
    
    return new Serializer(options);
    
}
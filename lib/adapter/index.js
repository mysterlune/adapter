/*

Hoser.Adapter

*/

var serializer = require('../serializer');

module.exports = function(options) {
    
    var Adapter = function(options) {
        
        if(!this instanceof Adapter) {
            return new Adapter(options);
        }
        
        this.serializer = new serializer(options);
        
        return this;
        
    }
        
    return new Adapter(options);
    
}
/*

The core of the module is bootstrapping an adapter.

*/
var adapter = require('./adapter')
    , _ = require('underscore');

module.exports = function(options) {
    
    var options = options || {};
    var cache = {};
    
    var Hoser = function(options) {
        
        if(!this instanceof Hoser) {
            return new Hoser(options);
        }
        
        this.cache = cache;
        var that = this;

        _.each(options, function(value, key, enumerable) {            
            that.cache[key] = value;
        });
        
        this.adapter = new adapter(options);
        
        return this;
    }
    
    // Regex for determining if a string is a path, use like
    //      is_path.test(my_string);
    var is_path = /[\.\*]/
    
    // Use first_key like:
    //      var name = path.match(first_key)[0];
    //  to get the top-level object name (TODO enforce namespace?)
    ,   first_key = /^([^\.\*]+)/;
    
    
    Hoser.prototype.get = function(path) {
        return this._lookup(path);
    }

    Hoser.prototype.set = function(path, value) {
        var result;
        if(is_path.test(path)) {
            result = this._setPath(path, value);
        } else {
            result = this.cache[path] = value;
        }
        return result;
    }
    
    Hoser.prototype._setPath = function(path, value) {
        var result
        , cache_hit = this._lookupPath(path, value);
        
        if(!cache_hit) { 
            // notify of failure to lookup
            return;
        }

        return result;
    }

    Hoser.prototype._lookupPath = function(path, value) {
        var result
        , cache = this.cache
        , arr = path.split('.')
        , tries = arr.length
        , that = this;
        
        // a..n : value
        // b..n : index (key, if collection)
        // c..n : enumerable
        _.each(arr, function(a, b, c) {
            if(result) return;
            var test = c.slice(0,tries).join('.');
            if(_.has(cache, test)) {
                
                var seed = cache[test]
                , lings = c.slice(tries, c.length)
                , plant = seed
                , parts = [test];
                
                _.each(lings, function(aa, bb, cc) {
                    if(!_.has(plant, aa) && value && ((arr.length - parts.length)===1)) {
                        plant[aa] = {};
                    } 
                    if(_.has(plant,aa)){ 
                        parts.push(aa);
                        var parent = plant;
                        plant = plant[aa];
                        var check = parts.join('.');
                        if(check === path) {
                            result = plant;
                            if(value) parent[aa] = value;
                        }
                    }
                });
                
            }
            tries--;
        });
        
        return result;
    }
    
    Hoser.prototype._lookup = function(path) {
        var result;

        if((typeof this[path] === 'function') || this.hasOwnProperty(path)) {
            result = this[path];
        }
        
        else if(this.cache && this.cache.hasOwnProperty(path)) {            
            result = this.cache[path];
        }
        
        else if(is_path.test(path)) {
            result = this._lookupPath(path);
        }
        
        return result;
    }

    return new Hoser(options);
    
}
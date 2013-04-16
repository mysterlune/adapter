/*

Hoser.Adapter

*/

var serializer = require('./serializer')
    , _ = require('underscore')
    , debug = false
    , object = require('./object');

var _serializer = serializer.create();

var Adapter = object.extend({

    init: function() {
        this.serializer = _serializer
    }
    
    , getType: function() {
        var name_test = /^.+Adapter$/;
        var name = this.toString();
        if(name_test.test(name)) {
            var name_regex = /^(.+)Adapter$/;
            var stripped = name.match(name_regex);
            if(stripped.length && stripped.length > 1) { name = stripped[1].toLowerCase(); }
        }
        return name;
    }
    
    , moniker: 'Adapter'
    
    , getAdapterForType: function(type) {
        
        var adapters = app.get('models');
        
        return {find: function() { console.log('you win!');}};
    
    }
    
    , getMoniker: function(adapter) {
        // if(!adapter) throw new Error('Adapter.getMoniker received "' + adapter + '" instead of an adapter object');
        if(!adapter) return null;

    }
    
    , implements: ['find', 'findAll', 'findQuery', 'create', 'update', 'delete']
    
    , find: function(id) {
        debug && console.log('doing find with ' + id);
    }
    
    , findAll: function() {
        debug && console.log('doing findAll');
    }
    
    , findQuery: function(params) {
        debug && console.log('doing find with: ' + params.toString());
    }
    
    , create: function(data) {
        debug && console.log('doing find with: ' + data.toString());
    }
    
    , update: function(data) {
        debug && console.log('doing find with: ' + data.toString());
    }
    
    , delete: function(data) {
        debug && console.log('doing find with: ' + data.toString());
    }
    
});

Adapter.prototype.toString = function() {
    return 'Adapter'
}

module.exports = Adapter;


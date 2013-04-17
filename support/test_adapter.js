/*
    Adapter is a mixin
*/
var debug = false
    , _ = require('underscore')
    , object = require('object')
    , Adapter = require('../lib/adapter')
    , data = require('./test_fixture');

var TestAdapter = Adapter.extend({
    
    find: function(param) {
        debug && console.log('TestAdapter doing find with: ' + param.toString());
        
        var items = [];
        
        var numeric_params = _.filter(param, function(a,b,c) {
            return _.isNumber(a);
        });
        
        var type = this.getType();
        
        if(numeric_params.length > 1) {
            
            // Not smart...  This does not take into account non-numeric
            //  primary keys.
            items = this.findMany(numeric_params);
            
        } else {
            
            switch(typeof param) {
            
                case 'number':
            
                    debug && console.log('TestAdapter doing find with number');
            
                    var scheme = this.get('scheme');
                    var pkey = scheme.get('primary_key');
                    var search = {};
                    var data_set = _.find(data, function(a,b,c) {
                        return b === type ? a : false;
                    });
                    search[pkey] = param;
                    items = _.findWhere(data_set, search);
                    break;
            
                case 'object':
            
                    items = this.findQuery(param);
                    break;
                
                case 'undefined':
                    items = this.findAll();
                    break;
            
                default:
                    break;
            }
            
        }
        
        return object.create({data: items});
        
    }

    , findAll: function() {
        debug && console.log('TestAdapter doing findAll');
        return 'TestAdapter:findAll';
    }

    , findQuery: function(params) {
        debug && console.log('TestAdapter doing findQuery with: ' + params.toString());
        if(!(typeof params === 'object')) throw new Error('Cannot query with non-object; please pass something like "{id: 1}"');
        var search = {};
        _.each(params, function(a,b,c) { 
            if(_.intersection(['object','function'],[typeof a])) {
                debug && console.log('Cannot supply function or object as search parameter');
            } else { search[b] = a; }
        });
        if(!!search) { return _.findWhere(data_set, search) } else { return {} };
    }
    
    , findMany: function(params) {
        debug && console.log('TestAdapter doing findMany with: ' + params.toString());
        debug && console.log('findMany is not implemented until non-numeric primary keys may be supported');
        return [];
    }

    , create: function(data) {
        debug && console.log('TestAdapter doing create with: ' + data.toString());
        return 'TestAdapter:create';
    }

    , update: function(data) {
        debug && console.log('TestAdapter doing update with: ' + data.toString());
        return 'TestAdapter:update';
    }

    , delete: function(data) {
        debug && console.log('TestAdapter doing delete with: ' + data.toString());
        return 'TestAdapter:delete';
    }
    
    // find: function(id) {
    //     debug && console.log('TestAdapter doing find with: ' + id);
    //     var pkey = this.get('primary_key');
    //     console.log('primary key is: ' + pkey);
    //     return 'TestAdapter:find';
    // }
    // 
    // , findAll: function() {
    //     debug && console.log('TestAdapter doing findAll');
    //     return 'TestAdapter:findAll';
    // }
    // 
    // , findQuery: function(params) {
    //     debug && console.log('TestAdapter doing findQuery with: ' + params.toString());
    //     return 'TestAdapter:findQuery';
    // }
    // 
    // , findMany: function(params) {
    //     debug && console.log('TestAdapter doing findMany with: ' + params.toString());
    //     return 'TestAdapter:findMany';
    // }
    // 
    // , create: function(data) {
    //     debug && console.log('TestAdapter doing create with: ' + data.toString());
    //     return 'TestAdapter:create';
    // }
    // 
    // , update: function(data) {
    //     debug && console.log('TestAdapter doing update with: ' + data.toString());
    //     return 'TestAdapter:update';
    // }
    // 
    // , delete: function(data) {
    //     debug && console.log('TestAdapter doing delete with: ' + data.toString());
    //     return 'TestAdapter:delete';
    // }
    
});

module.exports = TestAdapter;
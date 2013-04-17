var object = require('object')
    , data = require('../../../lib/data');

module.exports.type = 'hand';
module.exports.scheme = data.create({
    primary_key: 'id'
    , id: 'number'
    , name: 'string'
    , finger: 'hasMany:finger'
    // TODO Make hasMany, has, belongsTo kinds of relations
    //, finger: function() { this.set('hasMany:finger','foo'); return this.get('hasMany:finger'); }
});
var object = require('../../../lib/object')
    , data = require('../../../lib/data');

module.exports.type = 'arm';
module.exports.scheme = data.create({
    primary_key: 'id'
    , id: 'number'
    , name: 'string'
    , hand: 'has:hand'
    // TODO Make hasMany, has, belongsTo kinds of relations
    //, hand: function() { this.set('has:hand','foo'); return this.get('has:hand'); }
});
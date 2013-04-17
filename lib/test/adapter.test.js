(function() {

    var assert = require('assert')
    , expect = require('expect.js')
    , Adapter = require('../../').Adapter;

    describe('Checking adapter functionality', function() {
        
        it('Basic adapter check', function(done) {
            var result;
            var app = Adapter.create();
            
            // Basic set
            app.set('verbose', true);
            result = app.get('verbose');
            expect(result).to.be.equal(true);
            
            var serializer = app.get('serializer');
            expect(serializer).to.be.a('object');
            expect(serializer.get('type')).to.be.equal(null);
            expect(serializer.get('serialize')).to.be.a('function');
            expect(serializer.get('unserialize')).to.be.a('function');
            
            done();
        });
        
        it('Adapter implements CRUD', function(done) {
            var result;
            var app = Adapter.create();
            
            // Check for functions
            expect(app.find).to.be.a('function');
            expect(app.findAll).to.be.a('function');
            expect(app.findQuery).to.be.a('function');
            expect(app.create).to.be.a('function');
            expect(app.update).to.be.a('function');
            expect(app.delete).to.be.a('function');
            
            done();
        });
        
    });

}).call(this);
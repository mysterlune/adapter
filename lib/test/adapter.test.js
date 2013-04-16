(function() {

    var assert = require('assert')
    , expect = require('expect.js')
    , hoser = require('../../');

    describe('Checking adapter functionality', function() {
        
        it('Basic adapter check', function(done) {
            var result;
            var app = hoser.create();
            
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
            var app = hoser.create();
            
            // Check for functions
            expect(app.find).to.be.a('function');
            expect(app.findAll).to.be.a('function');
            expect(app.findQuery).to.be.a('function');
            expect(app.create).to.be.a('function');
            expect(app.update).to.be.a('function');
            expect(app.delete).to.be.a('function');
            
            done();
        });
                
        // it('Adapter: TestAdapter', function(done) {
        //     var result
        //     , output
        //     , app = hoser;
        //     
        //     // Check for functions
        //     result = app.get('adapter');
        //     expect(result.find).to.be.a('function');
        // 
        //     output = result.find(1);
        //     expect(output).to.be.equal('TestAdapter:find');
        //     
        //     output = result.findAll();
        //     expect(output).to.be.equal('TestAdapter:findAll');
        //     
        //     output = result.findQuery({id: 1});
        //     expect(output).to.be.equal('TestAdapter:findQuery');
        //     
        //     output = result.create({id: 100});
        //     expect(output).to.be.equal('TestAdapter:create');
        // 
        //     output = result.update({id: 101});
        //     expect(output).to.be.equal('TestAdapter:update');
        //     
        //     output = result.delete({id: 101});
        //     expect(output).to.be.equal('TestAdapter:delete');
        //     
        //     done();
        // });
        
    });

}).call(this);
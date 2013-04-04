(function() {

    var assert = require('assert')
    , expect = require('expect.js')
    , hoser = require('../');
    
    describe('Checking adapter functionality', function() {
        
        it('Anybody home?', function(done) {
            var result;
            var app = hoser();
            
            // Basic set
            app.set('verbose', true);
            result = app.get('verbose');
            expect(result).to.be.equal(true);

            done();
        });
        
    });

}).call(this);
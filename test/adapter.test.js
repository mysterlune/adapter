(function() {

    var assert = require('assert')
    , expect = require('expect.js')
    , model = require('../support/test_model');

    describe('Integrating adapter and fixtures', function() {
                
        // Simulate a request for items
        it('Can get items from local resource', function(done) {
            
            var arm = model('arm');;

            var left_arm = arm.find(1).get('data');
            var right_arm = arm.find(2).get('data');

            expect(left_arm).to.be.a('object');
            expect(left_arm.id).to.be.equal(1);

            expect(right_arm).to.be.a('object');
            expect(right_arm.id).to.be.equal(2);
                        
            expect(left_arm.hand).to.be.a('array');
            expect(left_arm.hand.length).to.be.equal(1);
            expect(left_arm.hand[0]).to.be.equal(1);
                                   
            expect(right_arm.hand).to.be.a('array');
            expect(right_arm.hand.length).to.be.equal(1);
            expect(right_arm.hand[0]).to.be.equal(2);

            var hand = model('hand');

            var left_hand = hand.find(1).get('data');
            var right_hand = hand.find(2).get('data');

            expect(left_hand).to.be.a('object');
            expect(left_hand.id).to.be.equal(1);

            expect(right_hand).to.be.a('object');
            expect(right_hand.id).to.be.equal(2);
            
            
            expect(left_hand.fingers).to.be.a('array');
            expect(left_hand.fingers.length).to.be.equal(5);
            // expect(right_hand.fingers[0].id).to.be.equal(1);
            // expect(right_hand.fingers[0].name).to.be.equal('left_thumb');
                                   
            expect(right_hand.fingers).to.be.a('array');
            expect(right_hand.fingers.length).to.be.equal(5);
            // expect(right_hand.fingers[0].id).to.be.equal(6);
            // expect(right_hand.fingers[0].name).to.be.equal('right_pinkie');
            
            done();
        });
        
    });

}).call(this);
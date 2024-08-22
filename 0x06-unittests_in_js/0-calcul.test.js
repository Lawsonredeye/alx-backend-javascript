const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('smoke test', function() {
	it('checks equality', function() {
		assert.equal(calculateNumber(1, 3), 4);
	});
	it('checks equality', function() {
		assert.equal(calculateNumber(1, 3.7), 5);
	});
	it('checks equality', function() {
		assert.equal(calculateNumber(1.2, 3.7), 5);
	});
	it('checks equality', function() {
		assert.equal(calculateNumber(1.5, 3.7), 6);
	});
	it('checks negative equality', function() {
		assert.equal(calculateNumber(-1.5, -3.7), -5);
	});
});

// describe('equal test', function() {
// 	it('checks equality', function() {
// 		assert.equal(calculateNumber(1, 3.7), 5);
// 	})
// })

// describe('mocha round test', function() {
// 	it('checks equality', function() {
// 		assert.equal(calculateNumber(1.2, 3.7), 5);
// 	})
// })

// describe('round up test', function() {
// 	it('checks equality', function() {
// 		assert.equal(calculateNumber(1.5, 3.7), 6);
// 	})
// })

// describe('negative testing', function() {
// 	it('checks negative equality', function() {
// 		assert.equal(calculateNumber(-1.5, -3.7), -5);
// 	})
// })

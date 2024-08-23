import chai from 'chai';
const { expect } = chai;
const calculateNumber = require('./2-calcul_chai.js');

// expect(calculateNumber('SUM', 1, 2)).to.equal(3);
// expect(calculateNumber('SUM', 1.4, 1.4)).to.equal(2);


describe('Test for mathematical operations', function() {
  it('#sums', function() {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });
  it('Sums float nums', function() {
    expect(calculateNumber('SUM', 1.4, 1.4).to.equal(2));
  });
  it('SUMs Negative nums', function() {
    expect(calculateNumber('SUM', -3, -4).to.equal(-7));
  });
  it('Divides', function() {
    expect(calculateNumber('DIVIDE',1.4, 4.5).to.equal(0.2));
  });
  it('Divides', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0).to.equal('Error'));
  });
  it('Subtract from denominator', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5).to.equal(-4));
  });
})
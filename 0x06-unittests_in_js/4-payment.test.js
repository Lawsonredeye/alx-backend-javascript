const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')

describe('Testing with spies', function() {
  it('test the sendPaymentRequestsToApi with SUM, 100, 20', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    // expect(sendPaymentRequestToApi(100, 20)).to.equal(120);
    expect(spy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    spy.restore();
  });
});

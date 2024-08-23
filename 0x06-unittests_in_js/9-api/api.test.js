const request = require('request');
const { expect } = require('chai');

describe('API testing with mocha', () => {
  const url = 'http://localhost:7865';
  const cart = 'http://localhost:7865/cart/12'
  it('returns the status code', (done) => {
    request.get(cart, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns the correct message', (done) => {
    request.get(cart, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('checks if the request parameter is an Integer', () => {
    request.get(cart, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('checks if the request parameter is a string', (done) => {
    request.get("http://localhost:7865/cart/this", (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
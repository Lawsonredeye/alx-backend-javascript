const calculateNumber = require("./Utils/utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;

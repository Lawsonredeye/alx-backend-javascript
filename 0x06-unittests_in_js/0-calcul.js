function calculateNumber(a, b) {
	sum =  Math.round(a) + Math.round(b);
	return sum;
}

console.log(calculateNumber(1.5, 3.7));

module.exports = calculateNumber;

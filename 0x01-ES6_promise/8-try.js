export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }
  } catch (e) {
    console.error(e);
  }
  return numerator / denominator;
}

export default function createIntTypedArray(length, position, value) {
    const newArray = new ArrayBuffer(length);
    const int8view = new Int8Array(newArray);
    if (int8view.length < position) {
      throw new Error('Position outside range');
    } else {
      int8view[position] = value;
    }
    return int8view;
  }

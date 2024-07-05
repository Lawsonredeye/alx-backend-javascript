export default function cleanSet(set, startString) {
  const newArray = [];
  set.forEach((value) => {
    if (value.startsWith(startString) && startString !== '') {
      newArray.push(value.replace(startString, ''));
    }
  });
  return newArray.join('-');
}

function cleanSet(set, startString) {
  let newString = '';
  set.forEach((value) => {
    if (value.startsWith(startString) && startString != '') {
      newString += value.replace(startString, '');
      newString += '-'
      }
    })
  return newString.slice(0, -1);
//   let newArray = [];
//   set.forEach((value) => {
//     if(value.startsWith(startString) && startString != '') {
//         newArray.push(value.replace(startString, ''))
//     }
//   })
//   return newArray.join("-")
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
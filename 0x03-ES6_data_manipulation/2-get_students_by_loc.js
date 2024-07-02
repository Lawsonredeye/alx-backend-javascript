import getListStudents from "./0-get_list_students.js";

// function isValid(student, city) {
//     console.log(student, city)
// //   let newArray = [];
// //   if (student.location === city) {
// //     newArray.push(student);
// //   }
// //   return newArray;
// }

const arr = [
  { id: 1, firstName: 'Guillaume', location: 'San francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San francisco' },
];


// function getStudentsByLocation(student, city) {
//     return student.filter((value, index) => location != "Columbia")
// }

// console.log(getStudentsByLocation(arr, "San Francisco"))
// newArr = arr.filter(() =>{
//     aa
// })

// function isValid(arr) {
//   if (arr.location == "San francisco") {
//       return true;
//   }
// }

// console.log(arr.filter(isValid))


// function isValid(arr, city) {
//   if (arr.location === city) {
//     return true;
//   }
// }
// function getStudentsByLocation(student, city) {
//   return student.filter(isValid);
//   }

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
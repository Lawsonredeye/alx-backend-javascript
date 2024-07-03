interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

let student1: Student;
let student2: Student;

student1 = { firstName:'Lawson', lastName:'Redeye', age: 32, location: 'Nigeria' };
student2 = { firstName:'John', lastName:'Doe', age: 32, location: 'Silicon Valley' };

const studentsList: Array<Student> = [student1, student2];
console.table(studentsList)
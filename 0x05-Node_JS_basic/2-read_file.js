const fs = require('fs');
// const parse = require('csv-parse');

/**
 * countStudent - counts the number of students and logs to the console
 * @path {string} path of the file to be read from
 * @logs {num | str} prints the number of student
 */

function countStudent(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    if (rows.length === 0) {
      throw new Error('Cannot load the database');
    }

    const header = rows.shift();
    const studentsByField = {};

    for (const row of rows) {
      const [firstname, lastname, age, field] = row.split(',');

      if (!field || !firstname) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    }

    const totalStudents = Object.values(studentsByField)
      .reduce((acc, students) => acc + students.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudent;

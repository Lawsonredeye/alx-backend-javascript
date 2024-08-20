const fs = require('fs');
const { parse } = require('csv-parse');

/**
 * countStudent - counts the number of students and logs to the console
 * @path {string} path of the file to be read from
 * @logs {num | str} prints the number of student
 */

function countStudent(path) {
  try {
    fs.readFileSync(path, 'utf-8', (err) => {
      if (err) {
        throw new Error('Cannot load the database');
      } else {
        fs.createReadStream(path).pipe(parse({ delimeter: ',', from_line: 2 }))
          .on('data', (row) => {
            console.log(row);
          });
      }
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudent;

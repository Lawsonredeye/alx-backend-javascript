const process = require('process');

const msg = 'Welcome to Holberton School, what is your name?';

process.stdout.write(msg);
process.stdout.write('\n');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

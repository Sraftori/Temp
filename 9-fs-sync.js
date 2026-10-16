const fs = require('fs');
console.log('start');
const first = fs.readFileSync('./tset/first.txt', 'utf8');
const second = fs.readFileSync('./tset/second.txt', 'utf8');

fs.writeFileSync('./tset/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' });

console.log('done with this task');
console.log('starting the next one');

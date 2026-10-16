const path = require('path');

console.log(path.sep);

const filePath = path.join('/Full-Stack-Learning', 'tset' );

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname, 'full-stack-learning', 'tset');

console.log(absolute);
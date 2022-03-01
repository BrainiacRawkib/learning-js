const fs = require('fs');
const path = require('path');

// without encoding
fs.readFile(path.join(__dirname, 'hello.txt'), function (err, data) {
    if (err) return console.error('Error reading file.');
    console.log('Read file contents:')
    console.log(data);
})

// with encoding
fs.readFile(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'}, function (err, data) {
    if (err) return console.error('Error reading file.');
    console.log('Read file contents:')
    console.log(data);
})

// Synchronous equivalent
const data = fs.readFileSync(path.join(__dirname, 'hello3.txt'), {encoding: 'utf8'});

console.log(data);
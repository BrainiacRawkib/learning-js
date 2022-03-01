const fs = require('fs');

fs.writeFile(__dirname + '/hello2.txt', 'hello from Nodejs!', function (err) {
    if (err) return console.error('Error writing to file.');
});

console.log(__dirname);
console.log(__filename.split("\\"));
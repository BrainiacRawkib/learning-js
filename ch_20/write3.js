const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'hello3.txt'),
    'hello from Node!', function (err) {
        if (err) return console.error('Error writing to file.')
    })

// Synchronous equivalent with try/catch block
try{
    fs.writeFileSync(path.join(__dirname, 'hello4.txt'), 'hello from Nodejs!');
} catch (err) {
    console.error('Error writing file.');
}
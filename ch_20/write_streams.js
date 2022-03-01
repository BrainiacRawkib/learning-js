const fs = require('fs');

const ws = fs.createWriteStream('stream.txt', {encoding: 'utf8'});
ws.write('line 1\n');
ws.write('line 2\n');
ws.end();
// ws.write('line 1\n');  // error bcos the file has been closed with the end() method
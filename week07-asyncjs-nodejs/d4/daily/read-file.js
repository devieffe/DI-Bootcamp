const fs = require('fs');
const path = './files/file-data.txt';

function readFile() {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    console.log('File content:', data);
  });
}

module.exports = readFile;

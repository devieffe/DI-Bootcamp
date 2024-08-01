const fs = require('fs');

const directoryPath = './';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  console.log('List of files in the directory:');
  files.forEach(file => {
    console.log(file);
  });
});
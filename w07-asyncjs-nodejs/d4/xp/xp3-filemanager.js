const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}

async function writeFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf8');
    console.log(`Successfully wrote to ${filePath}`);
  } catch (error) {
    throw new Error(`Error writing file: ${error.message}`);
  }
}

module.exports = { readFile, writeFile };

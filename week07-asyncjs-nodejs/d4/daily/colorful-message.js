const chalk = require('chalk');

function getColorfulMessage() {
  return chalk.blue.bgRed.bold('Hello from the colorful message!');
}

module.exports = getColorfulMessage;

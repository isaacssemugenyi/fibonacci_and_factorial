const chalk = require('chalk');
const text = require('./styles');

function calculator(incrementor, operation) {
  for (let i = 0; i < incrementor; i += 1) {
    console.log(text(`F @ ${i}`, chalk.blackBright), text(':', chalk.yellow), text(`${operation(i)}`, chalk.greenBright));
  }
}

module.exports = calculator;

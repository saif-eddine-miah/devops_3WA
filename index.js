const Calculator = require('./src/calculator');

const calculator = new Calculator();

const expression = process.argv[2];

try {
  const result = calculator.calculate(expression);
  console.log(result);
} catch (error) {
  console.error(error.message);
}

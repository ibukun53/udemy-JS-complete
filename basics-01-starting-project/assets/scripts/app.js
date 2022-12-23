const defaultReault = 0;
let currentResult = defaultReault;

function add(a, b) {
  const result = a + b;
  alert(`the result is ${result}`);
}
add(1, 2);
add(4, 3);
// eslint-disable-next-line no-mixed-operators
currentResult = (currentResult + 10) * 3 / 2 - 1;

const calculateDescription = `(${defaultReault} + 10) * 3 /2 - 1`;
// eslint-disable-next-line no-undef
outputResult(currentResult, calculateDescription);
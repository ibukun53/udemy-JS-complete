const defaultReault = 0;
let currentResult = defaultReault;

function add(a, b) {
  const result = a + b;
  return result;
}
currentResult = add(1, 2);

const calculateDescription = `(${defaultReault} + 10) * 3 /2 - 1`;
// eslint-disable-next-line no-undef
outputResult(currentResult, calculateDescription);
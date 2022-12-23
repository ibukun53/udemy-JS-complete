const defaultReault = 0;
let currentResult = defaultReault;

// eslint-disable-next-line no-mixed-operators
currentResult = (currentResult + 10) * 3 / 2 - 1;

const calculateDescription = `(${defaultReault} + 10) * 3 /2 - 1`;
// eslint-disable-next-line no-undef
outputResult(currentResult, calculateDescription);
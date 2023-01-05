/* eslint-disable no-undef */
const defaultReault = 0;
let currentResult = defaultReault;
const logEntries = [];

// Get userInput from Input Field
const enterUserNumberInput = () => +userInput.value;

// Generate and write calculation log
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calDescription = ` ${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription); // from vendor file
};

const add = () => {
  const enteredNumber = enterUserNumberInput();
  const intialNumber = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', intialNumber, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
};

const subtract = () => {
  const enteredNumber = enterUserNumberInput();
  const intialNumber = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', intialNumber, enteredNumber);
};

const multiply = () => {
  const enteredNumber = enterUserNumberInput();
  const intialNumber = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', intialNumber, enteredNumber);
};

const division = () => {
  const enteredNumber = enterUserNumberInput();
  const intialNumber = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', intialNumber, enteredNumber);
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);
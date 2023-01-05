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
const writeToLog = (operatorIdentifier, prevResult, operationNumber, newResult) =>{
  const logEntry = {
    operation: operatorIdentifier,
    preResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

const add = () => {
  const enteredNumber = enterUserNumberInput();
  const intialNumber = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', intialNumber, enteredNumber);
  writeToLog('ADD', intialNumber, enteredNumber, currentResult);
};

const subtract = () => {
  const enteredNumber = enterUserNumberInput();
  const intialNumber = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', intialNumber, enteredNumber);
  writeToLog('SUBTRACT', intialNumber, enteredNumber, currentResult);
};

const multiply = () => {
  const enteredNumber = enterUserNumberInput();
  const intialNumber = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', intialNumber, enteredNumber);
  writeToLog('MULTIPLY', intialNumber, enteredNumber, currentResult);
};

const division = () => {
  const enteredNumber = enterUserNumberInput();
  const intialNumber = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', intialNumber, enteredNumber);
  writeToLog('DIVIDE', intialNumber, enteredNumber, currentResult);
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);
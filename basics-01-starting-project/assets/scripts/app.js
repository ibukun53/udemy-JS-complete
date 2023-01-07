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
const writeToLog = (operatorIdentifier, prevResult, operationNumber, newResult) => {
  const logEntry = {
    operation: operatorIdentifier,
    preResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
};

const calculationResult =(calculateType) =>{
  const enteredNumber = enterUserNumberInput();
  const intialNumber = currentResult;
  let mathOperator;
  if(calculateType === 'ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';
  }else if (calculateType === 'SUBTRACT'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculateType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = '*';
  }else if (calculateType === 'DIVIDE'){
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteOutput( mathOperator, intialNumber, enteredNumber);
  writeToLog(calculateType, intialNumber, enteredNumber, currentResult);
}

const add = () => {
  calculationResult('ADD'); 
};

const subtract = () => {
  calculationResult('SUBTRACT'); 
};

const multiply = () => {
  calculationResult('MULTIPLY');  
};

const division = () => {
  calculationResult('DIVIDE'); 
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);
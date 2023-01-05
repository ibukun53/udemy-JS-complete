/* eslint-disable no-undef */
const defaultReault = 0;
let currentResult = defaultReault;
const enterUserNumberInput = () => +userInput.value;
const add = () => {
  const enteredNumber = enterUserNumberInput();
  const calDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + +enteredNumber;
  outputResult(currentResult, calDescription);
};
addBtn.addEventListener('click', add);
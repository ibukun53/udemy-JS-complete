/* eslint-disable no-undef */
const defaultReault = 0;
let currentResult = defaultReault;
function add() {
  const enteredNumber = +userInput.value;
  const calDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + +enteredNumber;
  outputResult(currentResult, calDescription);
}
addBtn.addEventListener('click', add);
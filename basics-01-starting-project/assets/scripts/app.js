/* eslint-disable no-undef */
const defaultReault = 0;
let currentResult = defaultReault;
function add() {
  const calDescription = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + +userInput.value;
  outputResult(currentResult, calDescription);
}
addBtn.addEventListener('click', add);
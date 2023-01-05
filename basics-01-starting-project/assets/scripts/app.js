/* eslint-disable no-undef */
const defaultReault = 0;
let currentResult = defaultReault;
function add() {
  currentResult = currentResult + +userInput.value;
  outputResult(currentResult, '');
}
addBtn.addEventListener('click', add);
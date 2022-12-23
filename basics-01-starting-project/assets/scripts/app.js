const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const defaultReault = 0;
let currentResult = defaultReault;

function add() {
  currentResult += parseInt(userInput.value, 10);
  // eslint-disable-next-line no-undef
  outputResult(currentResult, '');
}
addBtn.addEventListener('click', add);
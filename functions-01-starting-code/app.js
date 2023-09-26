const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
  if (selection !== ROCK
 && selection !== PAPER
 && selection !== SCISSORS
  ) {
    alert(`invalid choices! We chose ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } if (randomValue > 0.67) {
    return PAPER;
  }
  return SCISSORS;
};

const determineWinner = (cChoice, pChoice) => (cChoice === pChoice ? RESULT_DRAW
  : (cChoice === ROCK && pChoice === PAPER)
    || (cChoice === PAPER && pChoice === SCISSORS)
   || (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS);

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('game is starting .....');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = determineWinner(computerSelection, playerSelection);
  console.log(winner);
  let message = `You picked ${playerSelection}, computer picked ${computerSelection}`;
  if (winner === RESULT_DRAW) {
    message += ' had a draw';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += ' won';
  } else {
    message += ' lost';
  }
  alert(message);
  gameIsRunning = false;
});
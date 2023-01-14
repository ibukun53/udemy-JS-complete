/* eslint-disable no-undef */
const attackValue = 10;
const strongAttackValue = 17;
const monsterAttackValue = 14;
const healValue = 20;

const modeAttack = 'ATTACK';
const modeStrongAttack = 'STRONG-ATTACK';
const logEventPlayerAttack = 'PLAYER-ATTACK';
const logEventPlayerStrongAttack = 'PLAYER-STRONG-ATTACK';
const logEventMonsterAttack = 'MONSTER-ATTACK';
const logEventPlayerHeal = 'PLAYER-HEAL';
const logEventGameOver = 'GAME-OVER';

const enteredNumber = prompt('Maximum life for you and the monster', '100');

let chosenMaxValue = +enteredNumber;
const battleLog = [];
if (Number.isNaN(chosenMaxValue) || chosenMaxValue <= 0) {
  chosenMaxValue = 100;
}
let currentMonsterHealth = chosenMaxValue;
let curentPlayerHealth = chosenMaxValue;
let hasBonusLife = true;

adjustHealthBars(chosenMaxValue);

const writeToLog = (eve, val, monsterHealth, playerHealth) => {
  let logEntry = {
    event: eve,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  if (eve === logEventPlayerAttack) {
    logEntry.target = 'MONSTER';
  } else if (eve === logEventPlayerStrongAttack) {
    logEntry = {
      event: eve,
      value: val,
      target: 'MONSTER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (eve === logEventMonsterAttack) {
    logEntry = {
      event: eve,
      value: val,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (eve === logEventPlayerHeal) {
    logEntry = {
      event: eve,
      value: val,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (eve === logEventGameOver) {
    logEntry = {
      event: eve,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  }
  battleLog.push(logEntry);
};

const reset = () => {
  currentMonsterHealth = chosenMaxValue;
  curentPlayerHealth = chosenMaxValue;
  resetGame(chosenMaxValue);
};
const endRound = () => {
  const initialPlayerHealth = curentPlayerHealth;
  const PlayerDamage = dealPlayerDamage(monsterAttackValue);
  curentPlayerHealth -= PlayerDamage;
  writeToLog(logEventMonsterAttack, PlayerDamage, currentMonsterHealth, curentPlayerHealth);
  if (curentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    curentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('you would be dead but the bonus life saved you');
  }
  if (currentMonsterHealth <= 0 && curentPlayerHealth > 0) {
    alert('you win');
    writeToLog(logEventGameOver, 'PLAYER WON', currentMonsterHealth, curentPlayerHealth);
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('you lost');
    writeToLog(logEventGameOver, 'MONSTER WON', currentMonsterHealth, curentPlayerHealth);
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('you have a draw');
    writeToLog(logEventGameOver, 'A DRAW  ', currentMonsterHealth, curentPlayerHealth);
  }

  if (curentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
};
const attackMonster = (mode) => {
  const maxDamage = mode === modeAttack ? attackValue : strongAttackValue;
  const logEvent = mode === modeAttack ? logEventPlayerAttack : logEventPlayerStrongAttack;
  // if (mode === mode_Attack) {
  // maxDamage  = attack_Value;
  //  logEvent = log_Event_Player_Attack;
  // } else if (mode === mode_Strong_Attack) {
  // maxDamage = strong_Attack_Value;
  // logEvent = log_Event_Player_Strong_Attack;
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, curentPlayerHealth);
  endRound();
};

const attackHandler = () => {
  attackMonster(modeAttack);
};

const strongAttackHandler = () => {
  attackMonster(modeStrongAttack);
};

const healPlayerHandler = () => {
  let healValues;
  if (curentPlayerHealth >= chosenMaxValue - healValue) {
    alert("you can't heal to more than max initial health.  ");
    healValues = chosenMaxValue - curentPlayerHealth;
  } else {
    healValues = healValue;
  }
  increasePlayerHealth(healValue);
  curentPlayerHealth += healValue;
  writeToLog(logEventPlayerHeal, healValues, currentMonsterHealth, curentPlayerHealth);
  endRound();
};

const printLogHandler = () => {
  // for loop
  // for(let i = 0; i < battleLog.length; i++){
  // console.log(battleLog[i]);
  // }
  // for-in-loop
  // const i = 0;
  // for (const logEntries of battleLog) {
  // console.log(`#${i}`);
  // for (const key in logEntries) {
  //  console.log(`${key} => ${logEntries[key]}`);
// }
  //   i++;
  // }
};
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);

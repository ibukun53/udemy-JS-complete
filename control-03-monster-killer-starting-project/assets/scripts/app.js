const attack_Value = 10;
const strong_Attack_Value = 17;
const monster_Attack_Value = 14;
const heal_Value = 20;

const mode_Attack = 'ATTACK';
const mode_Strong_Attack = 'STRONG-ATTACK';
const log_Event_Player_Attack = 'PLAYER-ATTACK';
const log_Event_Player_Strong_Attack = 'PLAYER-STRONG-ATTACK';
const log_Event_Monster_Attack = 'MONSTER-ATTACK';
const log_Event_Player_Heal = 'PLAYER-HEAL';
const log_Event_Game_Over = 'GAME-OVER';

const enteredNumber = prompt('Maximum life for you and the monster', '100');

let chosenMaxValue = +enteredNumber;
let battleLog = [];
if(isNaN(chosenMaxValue) || chosenMaxValue <= 0){
  chosenMaxValue = 100;
}
let currentMonsterHealth = chosenMaxValue;
let curentPlayerHealth = chosenMaxValue;
let hasBonusLife = true;

adjustHealthBars(chosenMaxValue);

const writeToLog= (eve, val, monsterHealth,playerHealth) => {
  let logEntry = {
    event: eve,    
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
   }
  if(eve === log_Event_Player_Attack){
    logEntry.target = 'MONSTER';
  }else if(eve === log_Event_Player_Strong_Attack){
      logEntry ={
       event: eve,
       value: val,
       target: 'MONSTER',
       finalMonsterHealth: monsterHealth,
       finalPlayerHealth: playerHealth,
      }
    }else if(eve === log_Event_Monster_Attack){
    logEntry ={
     event: eve,
     value: val,
     target: 'PLAYER',
     finalMonsterHealth: monsterHealth,
     finalPlayerHealth: playerHealth,
    };  
}else if(eve === log_Event_Player_Heal){
    logEntry ={
     event: eve,
     value: val,
     target: 'PLAYER',
     finalMonsterHealth: monsterHealth,
     finalPlayerHealth: playerHealth,
    };  
}else if(eve === log_Event_Game_Over){
    logEntry ={
     event: eve,
     value: val,
     finalMonsterHealth: monsterHealth,
     finalPlayerHealth: playerHealth,
    }; 
}
battleLog.push(logEntry);
}; 


const reset= ()=>{
  currentMonsterHealth = chosenMaxValue;
  curentPlayerHealth = chosenMaxValue;
  resetGame(chosenMaxValue);
}
const endRound = () => {
  const initialPlayerHealth = curentPlayerHealth;
  const PlayerDamage = dealPlayerDamage(monster_Attack_Value);
  curentPlayerHealth -= PlayerDamage;
  writeToLog(log_Event_Monster_Attack, PlayerDamage, currentMonsterHealth,curentPlayerHealth );
  if(curentPlayerHealth <= 0 && hasBonusLife){
    hasBonusLife = false;
    removeBonusLife();
    curentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('you would be dead but the bonus life saved you');
  }
  if (currentMonsterHealth <= 0 && curentPlayerHealth > 0) {
    alert('you win');
    writeToLog(log_Event_Game_Over, 'PLAYER WON', currentMonsterHealth,curentPlayerHealth )
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('you lost');
    writeToLog(log_Event_Game_Over, 'MONSTER WON', currentMonsterHealth,curentPlayerHealth )   
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('you have a draw');
    writeToLog(log_Event_Game_Over, 'A DRAW  ', currentMonsterHealth,curentPlayerHealth )
  }

  if(curentPlayerHealth <= 0 || currentMonsterHealth <= 0){
    reset();
  }
};
const attackMonster = (mode) => {
  let maxDamage;
  let logEvent;
  if (mode === mode_Attack) {
    maxDamage  = attack_Value;
    logEvent = log_Event_Player_Attack;
  } else if (mode === mode_Strong_Attack) {
    maxDamage = strong_Attack_Value;
    logEvent = log_Event_Player_Strong_Attack;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth,curentPlayerHealth )
  endRound();
};

const attackHandler = () => {
  attackMonster(mode_Attack);
};

const strongAttackHandler = () => {
  attackMonster(mode_Strong_Attack);
};

const healPlayerHandler = () => {
  let healValue;
  if (curentPlayerHealth >= chosenMaxValue - heal_Value) {
    alert("you can't heal to more than max initaila health.  ");
    healValue = chosenMaxValue - curentPlayerHealth;
  } else {
    healValue = heal_Value;
  }
  increasePlayerHealth(heal_Value);
  curentPlayerHealth += heal_Value;
  writeToLog(log_Event_Player_Heal, healValue, currentMonsterHealth,curentPlayerHealth )
  endRound();
};

const printLogHandler= () => {
 console.log(battleLog);
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler)
const attack_Value = 10;
const strong_Attack_Value = 17;
const monster_Attack_Value = 14;
const heal_Value = 20;

const enteredNumber = prompt('Maximum life for you and the monster', '100');

let chosenMaxValue = +enteredNumber;
if(isNaN(chosenMaxValue) || chosenMaxValue <= 0){
  chosenMaxValue = 100;
}
let currentMonsterHealth = chosenMaxValue;
let curentPlayerHealth = chosenMaxValue;
let hasBonusLife = true;

adjustHealthBars(chosenMaxValue);

const reset= ()=>{
  currentMonsterHealth = chosenMaxValue;
  curentPlayerHealth = chosenMaxValue;
  resetGame(chosenMaxValue);
}
const endRound = () => {
  const initialPlayerHealth = curentPlayerHealth;
  const PlayerDamage = dealPlayerDamage(monster_Attack_Value);
  curentPlayerHealth -= PlayerDamage;

  if(curentPlayerHealth <= 0 && hasBonusLife){
    hasBonusLife = false;
    removeBonusLife();
    curentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('you would be dead but the bonus life saved you');
  }
  if (currentMonsterHealth <= 0 && curentPlayerHealth > 0) {
    alert('you win');
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('you lost');
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('you have a draw');
  }

  if(curentPlayerHealth <= 0 || currentMonsterHealth <= 0){
    reset();
  }
};
const attackMonster = (mode) => {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = attack_Value;
  } else if (mode === 'STRONG-ATTACK') {
    maxDamage = strong_Attack_Value;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
};

const attackHandler = () => {
  attackMonster('ATTACK');
};

const strongAttackHandler = () => {
  attackMonster('STRONG-ATTACK');
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
  endRound();
};
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

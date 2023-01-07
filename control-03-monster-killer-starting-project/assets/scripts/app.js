const attack_Value = 10;
const strong_Attack_Value = 17;
const monster_Attack_Value = 14;
const heal_Value = 20;

let chosenMaxValue = 100;
let currentMonsterHealth = chosenMaxValue;
let curentPlayerHealth = chosenMaxValue;

adjustHealthBars(chosenMaxValue);

const endRound = () => {
  const PlayerDamage = dealPlayerDamage(monster_Attack_Value);
  curentPlayerHealth -= PlayerDamage;
  if (currentMonsterHealth <= 0 && curentPlayerHealth > 0) {
    alert('you win');
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('you lost');
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('you have a draw');
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

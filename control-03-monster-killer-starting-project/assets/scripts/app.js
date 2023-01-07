const attackValue = 10;
const strongAttackValue = 17;
const monsterAttackValue = 14;

let chosenMaxValue = 100;
let currentMonsterHealth = chosenMaxValue;
let curentPlayerHealth = chosenMaxValue;

adjustHealthBars(chosenMaxValue);

const attackMonster =(mode) =>{
 let maxDamage;
 if(mode === 'ATTACK'){
    maxDamage = attackValue;
 } else if(mode === 'STRONG-ATTACK'){
  maxDamage = strongAttackValue;
 }

 const damage = dealMonsterDamage( maxDamage);
  currentMonsterHealth -= damage;
  const PlayerDamage = dealPlayerDamage(monsterAttackValue);
  curentPlayerHealth -= PlayerDamage;
  if (currentMonsterHealth <= 0 && curentPlayerHealth > 0) {
    alert('you win');
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('you lost');
  } else if (curentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('you have a draw');
  }
}

const attackHandler = () => {
    attackMonster('ATTACK');
};

const strongAttackHandler = () => {
    attackMonster('STRONG-ATTACK');
};
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);

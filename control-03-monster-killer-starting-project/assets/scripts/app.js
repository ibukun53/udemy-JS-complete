const attackValue = 10;
const monsterAttackValue = 14;

let chosenMaxValue = 100;
let currentMonsterHealth = chosenMaxValue;
let curentPlayerHealth = chosenMaxValue;

adjustHealthBars(chosenMaxValue);

const attackHandler = () =>{
const damage = dealMonsterDamage(attackValue);
currentMonsterHealth -= damage;
const PlayerDamage = dealPlayerDamage( monsterAttackValue);
curentPlayerHealth -= PlayerDamage;
if(currentMonsterHealth <= 0 && curentPlayerHealth > 0){
alert('you win');
} else if (curentPlayerHealth <= 0 && currentMonsterHealth > 0){
    alert('you lost');
}else if (curentPlayerHealth <= 0 && currentMonsterHealth <= 0){
    alert('you have a draw');
}
}
attackBtn.addEventListener('click', attackHandler);
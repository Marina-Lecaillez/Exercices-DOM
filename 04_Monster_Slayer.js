//////////////////////////
///// MONSTER SLAYER /////
//////////////////////////

let initialPlayerHealth = 100;
let initialMonsterHealth = 100;
let playerHealth = initialPlayerHealth;
let monsterHealth = initialMonsterHealth;
let combatLog = document.getElementById('combatLog');
let playerHealthBar = document.getElementById('playerHealth');
let monsterHealthBar = document.getElementById('monsterHealth');

function updateHealthBars() {
  playerHealthBar.style.width = playerHealth + '%';
  monsterHealthBar.style.width = monsterHealth + '%';
}

function log(message, isPlayer) {
  let logElement = document.createElement('p');
  logElement.textContent = message;
  if (isPlayer) {
    logElement.classList.add('player-log');
  } else {
    logElement.classList.add('monster-log');
  }
  combatLog.appendChild(logElement);
  combatLog.scrollTop = combatLog.scrollHeight;
}

function attack() {
  let playerDamage = Math.floor(Math.random() * 10) + 1;
  let monsterDamage = Math.floor(Math.random() * 15) + 1;

  monsterHealth -= playerDamage;
  playerHealth -= monsterDamage;

  log('Le joueur inflige ' + playerDamage + ' dégâts.', true);
  log('Le monstre inflige ' + monsterDamage + ' dégâts.', false);

  if (playerHealth <= 0) {
    playerHealth = 0;
    log('Le joueur a perdu !', true);
    disableButtons();
  }


  if (monsterHealth <= 0) {
    monsterHealth = 0;
    log('Le monstre a été vaincu !', false);
    disableButtons();
  }

  updateHealthBars();
}

function specialAttack() {
  let playerDamage = Math.floor(Math.random() * 15) + 5;
  let monsterDamage = Math.floor(Math.random() * 10) + 1;

  monsterHealth -= playerDamage;
  playerHealth -= monsterDamage;

  log('Le joueur lance une attaque spéciale et inflige ' + playerDamage + ' dégâts.', true);
  log('Le monstre inflige ' + monsterDamage + ' dégâts.', false);

  if (playerHealth <= 0) {
    playerHealth = 0;
    log('Le joueur a perdu!', true);
    disableButtons();
  }

  if (monsterHealth <= 0) {
    monsterHealth = 0;
    log('Le monstre a été vaincu!', false);
    disableButtons();
  }

  updateHealthBars();
}

function heal() {
  let playerHeal = Math.floor(Math.random() * 10) + 1;
  let monsterDamage = Math.floor(Math.random() * 15) + 1;

  playerHealth += playerHeal;
  playerHealth -= monsterDamage;

  log('Le joueur se soigne de ' + playerHeal + ' points de vie.', true);
  log('Le monstre inflige ' + monsterDamage + ' dégâts.', false);

  if (playerHealth <= 0) {
    playerHealth = 0;
    log('Le joueur a perdu!', true);
    disableButtons();
  }

  updateHealthBars();
}

function giveUp() {
  log('Le joueur abandonne!', true);
  disableButtons();
}

function disableButtons() {
  let buttons = document.getElementsByClassName('button');
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent !== 'Recommencer') {
      buttons[i].disabled = true;
    }
  }
}

function enableButtons() {
  let buttons = document.getElementsByClassName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
}

function restart() {
  playerHealth = initialPlayerHealth;
  monsterHealth = initialMonsterHealth;
  combatLog.innerHTML = '';
  enableButtons();
  updateHealthBars();
}
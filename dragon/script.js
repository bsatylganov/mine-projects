
const infoBox = document.getElementById('battleInfo');
const heroHp = document.getElementById('heroHp');
const dragonHp = document.getElementById('dragonHp');

const INIT_DRAGON_HP = 2000;
const INIT_HERO_HP = 1000;

heroHp.innerText = String(INIT_HERO_HP + ' / ' + INIT_HERO_HP);
dragonHp.innerText = String(INIT_DRAGON_HP + ' / ' + INIT_DRAGON_HP);

const Dragon = {
  hp: INIT_DRAGON_HP,
  defense: 120,
  str: 250,
  weapon: 0,
  toString: function () {
    return 'Дракон: ' + this.hp + ' HP';
  },
  modifyHealth: function (hitPoints) {
    this.hp += hitPoints;
    if (this.hp < 0) {
      this.hp = 0;
    }
  },
};

const Hero = {
  hp: INIT_HERO_HP,
  defense: 100,
  str: 120,
  weapon: 250,
  shield: 150,
  isShieldEquipped: false,
  equipShield: function () {
    this.isShieldEquipped = true;
  },
  removeShield: function () {
    this.isShieldEquipped = false;
  },
  toString: function () {
    return 'Герой: ' + this.hp + ' HP';
  },
  modifyHealth: function (hitPoints) {
    this.hp += hitPoints;
    if (this.hp < 0) {
      this.hp = 0;
    }
  },
};

const chanceOfHit = function () {
  return Math.floor(Math.random() * 100);
};

const rangeOfDamage = function (damage) {
  console.log("Hello");
  document.getElementById("myhero").style.backgroundImage="url('./img/attack.gif')";
  console.log(document.getElementById("myhero").style.backgroundImage);
  setTimeout(() =>  document.getElementById("myhero").style.backgroundImage = "", 1000);

  return damage + Math.floor(Math.random() * 21 - 10);
}

const hitHero = function () {
  let hitPoints = 0;
  if (chanceOfHit() < 75) {
    hitPoints = -(Hero.str + Hero.weapon - Dragon.defense);
    hitPoints = rangeOfDamage(hitPoints);
    if (hitPoints > 0) {
      hitPoints = null;
    }
  }
  return hitPoints;
};

const hitDragon = function () {
  let hitPoints = 0;
  if (chanceOfHit() < 50) {
    hitPoints = -(Dragon.str + Dragon.weapon - Hero.defense);
    if (Hero.isShieldEquipped) {
      hitPoints += Hero.shield;
    }
    hitPoints = rangeOfDamage(hitPoints);
    if (hitPoints > 0) {
      hitPoints = null;
    }
  }
  return hitPoints;
};

const loseAlert = () => {
  document.getElementById("heroes").style.backgroundImage="url('./img/200.gif')";
}
const winAlert = () => {
  document.getElementById("heroes").style.backgroundImage="url('./img/finish.gif')";
}

const dragonHit = () => {
  const hitPoints = hitDragon();
  Hero.modifyHealth(hitPoints);
  if (hitPoints < 0) {
    const message = ('Дракон нанес ' + (-hitPoints) + ' единиц урона\n');
    if (Hero.hp === 0) {
      loseAlert()
    }
  }

  Hero.removeShield();

  heroHp.style.width = (Hero.hp / INIT_HERO_HP * 100) + '%';
  dragonHp.style.width = (Dragon.hp / INIT_DRAGON_HP * 100) + '%';
  heroHp.innerText = INIT_HERO_HP + ' / ' + Hero.hp;
  dragonHp.innerText = Dragon.hp + ' / ' + INIT_DRAGON_HP;
}



const attackBtn = document.getElementById('attack');
const defenseBtn = document.getElementById('defense');
const nothingBtn = document.getElementById('nothing');

attackBtn.addEventListener('click', () => {
  const hitPoints = hitHero();
  Dragon.modifyHealth(hitPoints);
  if (hitPoints < 0) {
    const message = 'Герой нанес ' + (-hitPoints) + ' единиц урона\n';
    if (Dragon.hp === 0) {
      winAlert();
    } 
    }
  dragonHit();
});

defenseBtn.addEventListener('click', () => {
  Hero.equipShield();
  dragonHit();
});

nothingBtn.addEventListener('click', () => {
  dragonHit();
});

class Character {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove() {
        console.log(`${this.name} can move to another position`);
    }
}

function canAttack(Character) {
    return {
        attack: () => {
            console.log(`${Character.name} can attack with hammer`);
        }
    };
}

function canDefense(Character) {
    return {
        defend: () => {
            console.log(`${Character.name} can attack with a barrier`);
        }
    };
}

function canCastSpell(Character) {
    return {
        castSpell: () => {
            console.log(`${Character.name} cast a buff`);
        }
    };
}

function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
}
function createGuardian(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefense(character));
}
function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(character));
}
function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefense(character));
}

const monster = createMonster('Agus');
monster.canMove();
monster.attack();

const guardian = createGuardian('Belerick');
guardian.canMove();
guardian.defend();

const wizard = createWizard('Afdlin Saukhi');
wizard.canMove();
wizard.castSpell();

const warrior = createWarrior('Jarwo');
warrior.canMove();
warrior.attack();
warrior.defend();
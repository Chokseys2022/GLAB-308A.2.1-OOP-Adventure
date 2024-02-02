// Let’s model a simple adventurer with basic properties such as health and an inventory.
// We will call the adventurer “Robin.”
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//   };
// adventurer.inventory[0];
// console.log(adventurer);

// Let’s give Robin a companion to travel with – a furry friend they call “Leo.”
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//       name: "Leo",
//       type: "Cat"
//     }
//   };

// Next, give Robin’s feline friend a friend of his own:
// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    belongings: {
      name: "Frank",
      type: "Flea",
      accessories: ["small hat", "sunglasses"],
    },
  },

  //   Now we have a method for “dice rolls,” a common way to handle outcomes in adventuring games. Test this method by calling adventurer.roll() a few times.
  roll: function () {
    return Math.floor(Math.random() * 6) + 1;
  },
};
// Test the roll method
const diceRollResult = adventurer.roll();
console.log(`${adventurer.name} rolled a ${diceRollResult}!`);

// Part 2: Class Fantasy
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
}

//   Re-create Robin
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Part 3: Class Features
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
    this.level = 1;
    this.experience = 0;
    this.skill = [];
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  // Additional method for adventurers
  levelUp() {
    console.log(`${this.name} have moved up`);
    this.level++;
    this.health += 10;
  }
}
// Part 4: Class Uniforms
// Using the static keyword:
// Add a static MAX_HEALTH property to the Character class, equal to 100.
class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
}

// Part 5: Gather your Party
// Factories are classes that generate objects according to the factory’s instance properties.
// As an example, let’s look at how we might create many “healer” role adventurers using a factory:
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

//   Part 6: Developing Skills
// Create an additional method, duel(), for the Adventurer class with the following functionality:
// Part 6: Developing Skills
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
    this.level = 1;
    this.experience = 0;
    this.skills = [];
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  levelUp() {
    console.log(`${this.name} has leveled up!`);
    this.level++;
    this.health += 10;
  }

  duel(opponent) {
    console.log(`Duel between ${this.name} and ${opponent.name} begins!`);

    while (this.health > 50 && opponent.health > 50) {
      const playerRoll = this.roll();
      const opponentRoll = opponent.roll();

      console.log(
        `${this.name} rolled a ${playerRoll}, ${opponent.name} rolled a ${opponentRoll}`
      );

      if (playerRoll > opponentRoll) {
        opponent.health -= 1;
        console.log(
          `${this.name} wins this round! ${opponent.name} loses 1 health.`
        );
      } else if (opponentRoll > playerRoll) {
        this.health -= 1;
        console.log(
          `${opponent.name} wins this round! ${this.name} loses 1 health.`
        );
      } else {
        console.log("It's a tie! No damage dealt.");
      }

      console.log(
        `${this.name}'s health: ${this.health}, ${opponent.name}'s health: ${opponent.health}`
      );
    }

    const winner = this.health > 50 ? this : opponent;
    console.log(
      `${winner.name} wins the duel with ${winner.health} health remaining!`
    );
  }
}



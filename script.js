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
    constructor (name) {
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

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
        accessories: ["small hat", "sunglasses"]
      }
    },
    roll: function () {
      // Generate a random number between 1 and 6 for a typical six-sided die
      return Math.floor(Math.random() * 6) + 1;
    }
  };
  
  // Test the roll method
  const diceRollResult = adventurer.roll();
  console.log(`${adventurer.name} rolled a ${diceRollResult}!`);
  
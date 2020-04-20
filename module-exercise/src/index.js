// This file should import the fruits and both array helpers. It should then:

// Randomly draw a fruit from the array
// Log the message “I’d like one RANDOMFRUIT, please.”
// Log the message “Here you go: RANDOMFRUIT”
// Log the message “Delicious! May I have another?”
// Remove the fruit from the array of fruits
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”

import {Choice, Remove} from './helpers';
import Foods from './foods'

let chosenFruit = Choice(Foods)

console.log(`I'd like one ${chosenFruit}. please`);
console.log(`Here you go: ${chosenFruit}`)
console.log(`Delicious! mat I have another?`)

Remove(Foods, chosenFruit);
console.log(`I'm sorry, we're all out. We have ${Foods.length} left`);

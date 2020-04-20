// src/helpers.js
// This file should export two array helper functions:

// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
 function Choice(items){
     //we'll use Math.random()
     let rand = Math.floor(Math.random()*items.length);
     return items[rand];
 }

 function Remove(items, item){
     // indexOf() , then delete there else undefine
     let toDeleteIdx = items.indexOf(item);
     return toDeleteIdx > -1 ? items.splice(toDeleteIdx, 1) : undefined
 }

export {Choice, Remove};
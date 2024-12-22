/*
- The rest() operator condenses multiple elements into a single array.
- It has the same syntax as the spread operator.
- It is used as the argument of a function.
*/

const toArray = (...args) => args;

let array = toArray(1, 2, 3);
console.log(array); // [1,2,3]

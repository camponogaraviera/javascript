/*
- The rest (`...args`) operator condenses multiple elements into a single array.
- It has the same syntax as the spread operator.
- It is used as the argument of a function.
*/

const toArray = (...args) => args;
const array = toArray(1, 2, 3);
console.log(array); // [ 1, 2, 3 ]

// Using rest in an object:
const toObject = (key, ...values) => {
  return { [key]: values };
};
const newObj = toObject("key1", "value1", "value2");
console.log(newObj); // { key1: [ 'value1', 'value2' ] }

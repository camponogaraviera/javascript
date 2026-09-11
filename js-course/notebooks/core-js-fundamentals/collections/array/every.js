/*
Description: the every() array method in JavaScript checks whether all elements in the calling array satisfy the test condition specified by the callback function.
It returns true if all elements pass the condition or if the array is empty, and false otherwise.

It receives two arguments: 
1. Callback function: this function is called once for each element in the array. It receives three arguments:
   - element: the value of the current item under iteration in the array.
   - index: the position of the current item under iteration in the array.
   - array: the array on which every() is being applied. 
2. thisArg (optional): an optional value to be used as `this` when executing the callback function. 

# Reference

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/

// First example: checking whether numbers are even.

const numbers = [1, 2, 3, 4, 5];
const allEven = numbers.every((item) => item % 2 === 0);
// Logging result:
console.log(allEven); // Output: false (not all numbers are even)

// Second example: checking if all words have more than 3 characters and start with the same letter.

const words = ["apple", "almond", "airplane", "agile"];
const allMatch = words.every((word, index, array) => {
  return word.length > 3 && word[0] === array[0][0];
});
// Logging result:
console.log(allMatch); // Output: true (all words meet the criteria)

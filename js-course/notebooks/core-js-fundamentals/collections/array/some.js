/*
Description: the some() array method in JavaScript checks whether at least one element in the calling array satisfies the test condition specified by the callback function.

It receives two arguments: 
1. Callback function: this function is called once for each element in the array. It receives three arguments:
   - element: the value of the current item under iteration in the array.
   - index: the position of the current item under iteration in the array.
   - array: the array on which some() is being applied. 
2. thisArg (optional): an optional value to be used as `this` when executing the callback function. 

# Reference

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
*/

// Example 1: check if at least one number is even.

const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(item => item % 2 === 0);

console.log(hasEvenNumber); // Output: true (at least one number is even)

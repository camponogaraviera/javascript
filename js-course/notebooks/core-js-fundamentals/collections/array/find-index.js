/* 
Description: the findIndex() array method in JavaScript iterates over each item in the calling array and returns the position of the first item that satisfies the test condition specified by the callback function.

It receives two arguments.
1. Callback function: this function is called once for each element in the array until it returns true (element is found). Returns -1 otherwise. It receives three arguments:
   - element: the value of the current item under iteration in the array.
   - index: the position of the current item under iteration in the array.
   - array: the array on which findIndex() is being applied. 
2. thisArg (optional): an optional value to be used as `this` when executing the callback function. 

# Reference

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
*/

// Example: finding the index of the first element greater than 2.

const numbers = [0, 1, 2, 3, 4, 5];
const index = numbers.findIndex((item) => item > 2);

// Logging result:
console.log(index); // Output: 3

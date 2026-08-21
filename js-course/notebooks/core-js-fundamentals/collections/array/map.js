/* 
Description: the map() array method in JavaScript generates a new array by applying a callback function iteratively over each element of the calling/original array. 
The original array is not modified.

It receives one argument.
1. Callback function: this function is called once for each element in the array. It receives three arguments:
   - element: the value of the current item under iteration in the array.
   - index: the position of the current item under iteration in the array.
   - array: the array on which map() is being applied. 

# Reference

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

// Example: Doubling each number in an array.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((item) => item * 2);

// Logging the result:
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

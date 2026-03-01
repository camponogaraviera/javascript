/* 
Description: the find() array method in JavaScript iterates over each item in the calling array and returns the first item that satisfies the test condition specified by the callback function.

It receives one argument.
1. Callback function: this function is called once for each element in the array. It receives three arguments:
   - element: the value of the current item under iteration in the array.
   - index: the position of the current item under iteration in the array.
   - array:  the array on which find() is being applied. 

# Reference

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/

// Example 1: finding the first element greater than 2 in an array.
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((item) => item > 2);
// Logging result:
console.log(foundNumber); // Output: 3

// Example 2: finding the first object with a specific property value.
const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
const result = array.find((item) => item.id === 3); 
// Logging result:
console.log(result); // Output: {id:3}

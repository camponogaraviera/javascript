/* 
Description: the includes() array method in JavaScript uses the SameValueZero algorithm to check whether an element is present (true) or not (false) in the calling array.

It receives one or two arguments.
1. searchElement: the value to search for within the array.
2. fromIndex (optional): the zero-based index (position) in the array at which to begin the search. If omitted, the search starts at index 0.

# Reference

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
*/

// Example 1: checking if an array includes a specific element.

const array = [1, 5, 3, 2, 5];
console.log(array.includes(5)); // Output: true
console.log(array.includes(3, 2)); // Output: true (there is an item whose value=3 starting from the 2nd position).

// Example 2: checking if the array includes an object.

// Define an array containing two objects:
const array2 = [{ 1: 11 }, { 2: 22 }];
// Logging result:
console.log(array2.includes({ 1: 11 })); // Output: false (it checks for reference not values).

// Define two separate objects:
const obj1 = { 1: 11 };
const obj2 = { 2: 22 };
// Logging result:
const array3 = [obj1, obj2];
console.log(array3.includes(obj1)); // Output: true

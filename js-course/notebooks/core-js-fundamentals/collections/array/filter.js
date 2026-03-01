/* 
Description: the filter() array method in JavaScript creates a new array with filtered values by applying a callback function iteratively over each element of the calling/original array.
The original array is not modified.

It receives one argument.
1. Callback function: this function is called once for each element in the array. It receives three arguments:
   - element: the value of the current item under iteration in the array.
   - index: the position of the current item under iteration in the array.
   - array:  the array on which filter() is being applied. 
The return value of the callback function determines whether the element should be included in the new array (true) or not (false).

# Reference

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

// Example: Filtering out numbers greater than 3.

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((item) => item <= 3);

// Logging result:
console.log(filteredNumbers); // Output: [1, 2, 3]

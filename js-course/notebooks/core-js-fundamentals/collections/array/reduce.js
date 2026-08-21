/* 
Description: the reduce() array method in JavaScript executes a callback function on each element of the array and returns a single output value.

It receives two arguments:

1. Callback function (reducer): this function is called once for each element in the array. It receives four arguments:
   - accumulator: is the value from the previous call to the callback function.
   - currentValue: the current item under iteration in the array.
   - currentIndex: the position of the currentValue under iteration in the array.
   - array: the array on which reduce() is being applied. 

2. Initial value (optional): the starting value. Defaults to the first item of the array.

# Reference

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

// Example: summing all elements in an array.

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 10);

// Logging result:
console.log(sum); // Output: 10+1+2+3+4 = 20


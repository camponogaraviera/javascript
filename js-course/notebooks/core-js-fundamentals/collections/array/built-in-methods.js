/*

# Built-in Array Methods

- array[index] = value                          # Assigns/Update a value to a specific index. If the index is out of bounds, it expands the array without error.
- array[index]                                  # Retrieves the value at a given index. Returns undefined if the index is out of bounds.
- array.indexOf(value)                          # Returns the index of the first occurrence of a value, or -1 if not found. 
- array.unshift(value)                          # Inserts a new element at the beginning of the array and returns the new length.
- array.splice(start, deleteCount, value1, ...) # Add or remove elements from a start position onwards. The deleteCount defines the number of elements to remove. Returns the removed elements.
- array.push(value1, value2..)                  # Push/Append one or more elements to the end of the array and returns the new length.
- array.shift()                                 # Removes the first element and returns the removed element. 
- array.pop()                                   # Removes the last element and returns the removed element.
- array.length                                  # Returns the number of elements in the array.
- array.concat(array2, array3, …)               # Returns a new array by merging multiple arrays.
- array.slice(start, end)                       # Returns a shallow copy of a portion of the array (excluding end).
- array.reverse()                               # Reverses the array in place and returns the reversed array.
- array.sort(compareFn)                         # Sorts the array in place using the provided comparator function.
- array.map(callbackFn)                         # Returns a new array with the results of applying a function to each element.
- array.forEach(callbackFn)                     # Iterates over each element, executing a function. Returns undefined.
*/

const numArray = [23, 3, 6, 2, 1];

// Check if a variable is of type array:
console.log(Array.isArray(numArray)); // Output: True

// Get the length of the array:
const length = numArray.length;
console.log(length); // Output: 5

// Reading the first element of the array (access):
console.log(numArray[0]); // Output: 23

// Update the third element of the array:
numArray[2] = 10;
console.log(numArray); // Output: [23, 3, 10, 2, 1]

// Get the index of the value 3 in the array (searching):
const index = numArray.indexOf(3);
console.log(index); // Output: 1

// Remove an item from a specific position (index). Defaults to the last item:
numArray.pop(); // Output: [23, 3, 10, 2]
console.log(numArray);

// Push/Append a new item to the end of the array:
numArray.push(30);
console.log(numArray); // Output:  [23, 3, 10, 2, 30]

// Push/Append a new item to the end of the array:
numArray[numArray.length] = 31;
console.log(numArray); // Output:  [23, 3, 10, 2, 30, 31]

// Deleting the 1st element of the array:
numArray.shift();
console.log(numArray); // Output:  [3, 10, 2, 30, 31]

// Add an element to the beginning of the array (insertion):
numArray.unshift(0);
console.log(numArray); // Output:  [0, 3, 10, 2, 30, 31]

// Add an element to the middle of the array (insertion):
numArray.splice(3, 0, 3.5); // (position, no. of elements to delete, element to add).
console.log(numArray); // Output: [0, 3, 10, 3.5, 2, 30, 31]

// Deleting an element in the 2nd position of the array:
numArray.splice(2, 1); // (position, no of elements to delete).
console.log(numArray); // Output: [0, 3, 3.5, 2, 30, 31]

// Return the first two elements:
console.log(numArray.slice(0, 2)); // Output: [0, 3]

// Return the last two elements:
console.log(numArray.slice(-2)); // Output: [ 30, 31 ]

// Reverse the array (mutates the original array):
console.log(numArray.reverse()); // Output: [ 31, 30, 2, 3.5, 3, 0 ]

// Sort numArray in ascending order (mutates the original array):
console.log(numArray.sort((a, b) => a - b)); // Output: [0, 2, 3, 3.5, 30, 31]

// Creating a new array instance from an array-like object or iterable:
console.log(Array.from(numArray, (x) => x + x)); // Output: [0, 4, 6, 7, 60, 62]

// Another example:
console.log(
  Array.from({ length: 4 }, (_, index) => ({
    id: index.toString(),
  })),
); // Output: [ { id: '0' }, { id: '1' }, { id: '2' }, { id: '3' } ]

// Pushing the elements of array1 into array2 using spread syntax (mutates array1):
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.push(...array2);
console.log(array1); // Output: [1, 2, 3, 4, 5, 6]

// Concatenating two arrays (does not mutate either array):
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const concatenatedList = array3.concat(array4);
console.log(concatenatedList); // Output: [ 1, 2, 3, 4, 5, 6 ]

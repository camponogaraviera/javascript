/*
# Built-in Array Methods in JavaScript

    - array.length                                # Get the length of the array.
    - array[index]                                # Get the item from a specific index. Returns undefined if the index is out of bounds.
    - array[index] = item                         # Update an item of a particular index. Does not yield an error if the index is out of bounds.
    - array.indexOf(item)                         # Get the index of a specific item. Yields -1 if the item is not found.
    - array.pop(index)                            # Remove an item from a specific position (index). Defaults to the last item.
    - array.push(item1, item2..)                  # Push/Append a new item to the end of the array.
    - array.shift()                               # Remove the first item. 
    - array.unshift(item)                         # Add an item to the beginning.
    - array.splice(start, deleteCount, item1...)  # Add or delete several items from a start position onwards. The deleteCount defines the number of items to be deleted.
    - array.slice(start, end)                     # Copy a portion of the array.
    - array.reverse()                             # Reverse the array.
    - array.sort(callback)                        # Sort the array according to the JavaScrit engine. The V8 engine typically uses Timsort, a hybrid sorting algorithm that uses merge sort or insertion sort depending on the size of the array.
    - array.forEach(callback)                     # Iterates over each element of the calling array.
    - Array.from(iterable, callback)              # Creates a new array instance from an array-like object or iterable.
    - array.concat()                              # Concatenate two arrays.
*/

const numArray = [23, 3, 6, 2, 1];

// Check if a variable is of type array:
console.log(Array.isArray(numArray)); // Output: True

// Get the length of the array:
let length = numArray.length;
console.log(length); // Output: 5

// Reading the first element of the array (access):
console.log(numArray[0]); // Output: 23

// Update the third element of the array:
numArray[2] = 10;
console.log(numArray); // Output: [23, 3, 10, 2, 1]

// Get the index of the value 3 in the array (searching):
let index = numArray.indexOf(3);
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

// Reverse the array:
console.log(numArray.reverse()); // Output: [ 31, 30, 2, 3.5, 3, 0 ]

// Sort numArray in ascending order:
console.log(numArray.sort((a, b) => a - b)); // Output: [0, 2, 3, 3.5, 30, 31]

// Creating a new array instance from an array-like object or iterable:
console.log(Array.from(numArray, (x) => x + x)); // Output: [0, 4, 6, 7, 60, 62]

// Another example:
console.log(Array.from({ length: 4 }, (_, index) => ({
  id: index.toString(),
}))); // Output: [ { id: '0' }, { id: '1' }, { id: '2' }, { id: '3' } ]

// Pushing the elements of array1 into array2 using spread syntax:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.push([...array2]);
console.log(array1); // Output: [1, 2, 3, [4, 5, 6]]

// Cocatenating two arrays:
const concatenatedList = array1.concat(array2);
console.log(concatenatedList); // Output: [ 1, 2, 3, [ 4, 5, 6 ], 4, 5, 6 ]

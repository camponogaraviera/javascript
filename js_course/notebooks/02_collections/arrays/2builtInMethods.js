/*
# Built-in Array Methods in JavaScript

    - array[index] = item                         # Update an item of a particular index. Does not yield an error if the index is out of bounds.
    - array[index]                                # Get the item from a specific index. Returns undefined if the index is out of bounds.
    - array.indexOf(item)                         # Get the index of a specific item. Yields -1 if the item is not found.
    - array.pop(index)                            # Remove an item from a specific position (index). Defaults to the last item.
    - array.push(item1, item2..)                  # Push/Append a new item to the end of the array.
    - array.shift()                               # Remove the first item. 
    - array.unshift(item)                         # Add an item to the beginning.
    - array.splice(start, deleteCount, item1...)  # Add or delete several items from a start position onwards. The deleteCount defines the number of items to be deleted.
    - array.length                                # Get the length of the array.
    - array.concat()                              # Concatenate two arrays.
    - array.slice(start, end)                     # Copy a portion of the array.
    - array.reverse()                             # Reverse the array.
    - array.sort(callback)                        # Sort the array according to the JavaScrit engine. The V8 engine typically uses Timsort, a hybrid sorting algorithm that uses merge sort or insertion sort depending on the size of the array.
    - array.forEach(callback)                     # Iterates over each element of the calling array.
*/

let myArray = [1, 2, 3, 4, 5];
const numArray = [23, 3, 6, 2, 1];

// Sort numArray in ascending order:
console.log(numArray.sort((a, b) => a - b)); // [ 1, 2, 3, 6, 23 ]

// Check if a variable is of type array:
console.log(Array.isArray(myArray)); // Output: True

// Return the first two elements
console.log(myArray.slice(0, 2)); // Output: [1,2]

// Get the length of the array:
let length = myArray.length;
console.log(length); // Output: 5

// Reading the first element of the array (access):
console.log(myArray[0]); // Output: 1

// Get the index of the value 3 in the array (searching):
let index = myArray.indexOf(3);
console.log(index); // Output: 2

// Update the third element of the array:
myArray[2] = 10;
console.log(myArray); // Output: [1, 2, 10, 4, 5]

// Add an element to the end of the array:
myArray[myArray.length] = 6;
console.log(myArray); // Output: [1, 2, 10, 4, 5, 6]

// Add an element to the end of the array:
myArray.push(7);
console.log(myArray); // Output: [1, 2, 10, 4, 5, 6, 7]

// Add an element to the beginning of the array (insertion):
myArray.unshift(0);
console.log(myArray); // Output: [0, 1, 2, 10, 4, 5, 6, 7]

// Add an element to the middle of the array (insertion):
myArray.splice(3, 0, 3.5); // (position, no. of elements to delete, element to add).
console.log(myArray); // Output: [0, 1, 2, 3.5, 10, 4, 5, 6, 7]

// Deleting the 1st element of the array:
myArray.shift();
console.log(myArray); // Output: [1, 2, 3.5, 10, 4, 5, 6, 7]

// Deleting an element in the 2nd position of the array:
myArray.splice(2, 1); // (position, no of elements to delete).
console.log(myArray); // Output: [1, 2, 10, 4, 5, 6, 7]

// Pushing the elements of array1 into array2 using spread syntax:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.push([...array2]);
console.log(array1); // Output: [1, 2, 3, [4, 5, 6]]

// Cocatenating two arrays:
const concatenatedList = array1.concat(array2);
console.log(concatenatedList); // Output: [ 1, 2, 3, [ 4, 5, 6 ], 4, 5, 6 ]

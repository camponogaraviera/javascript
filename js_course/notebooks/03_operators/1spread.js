/*
- The spread() operator expands an iterable (string, array, or hash table) into individual elements.
- Can be used to create a new object (array or hash table) pulling values from the original one.
*/

// Spreading a string into an array:
const str = "qwert";
const charArray = [...str];
console.log(charArray); // [ 'q', 'w', 'e', 'r', 't' ]

// Creating a copy of an array using the spread operator:
let array = [1, 2, 3];
const copiedArray = [...array];
console.log(copiedArray); // [1,2,3]

// Adding a new element to the end of the array using the spread operator:
let newArray = [...array, "newItem"];
console.log(newArray); // [1, 2, 3, 'newItem']

// Creating a copy of an object using the spread operator:
let obj = { key1: "value1", key2: "value2" };
const copiedObj = { ...obj };
console.log(copiedObj); // {key1: 'value1', key2: 'value2'}

// Example of object destructuring assignment using the spread operator:
const { key1, ...others } = obj;
console.log(key1); // value1
console.log(others); // {key2: 'value2'}

// Adding a new element:
let obj2 = { ...obj, ...{ key3: "value3" } };
console.log(obj2); // {key1: 'value1', key2: 'value2', key3: 'value3'}
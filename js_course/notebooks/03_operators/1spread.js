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

// Creating a copy of an object using the spread operator:
let obj = { item1: "item1", item2: "item2" };
const copiedObj = { ...obj };
console.log(copiedObj); // {item1: 'item1', item2: 'item2'}

// Ignoring the first item and using the spread operator to get the remaining ones:
let obj2 = { id1: "id1", id2: "id2", id3: "id3" };
const { id1, ...rest } = obj2;
console.log(id1); // id1
console.log(rest); // {id2: 'id2', id3: 'id3'}

// Adding a new element:
let obj3 = { ...obj2, ...{ new: "new item" } };
console.log(obj3); // { id1: 'id1', id2: 'id2', id3: 'id3', new: 'new item' }

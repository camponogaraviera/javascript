/*
Reference data types (a.k.a mutable data types) in Javascript ES6 (EcmaScript 6):

1. Objects (more about it later)

- Examples of built-in objects in javascript: hash table `{}`, `Map()`, and `Set()`. 
  - In JavaScript, hash table keys are converted to strings data types, while the values associated with these keys can be of any data type.
  - A Map maintains the order of insertion. 
  - A Set will only store keys, without values.

2. Arrays (more about it later)

Arrays `[]` can store values of any data type. In JavaScript, an array is also referred to as an object. 

3. Functions (more about it later)

Can be classified into:
- factoryFunction or regularFunction.
- functionLiteral.
- arrowFunction.
- ConstructorFunction.
*/

let x;

// Example of a Hash Table:
x = { key1: "value1", key2: "value2" };
console.log(typeof x); // Output: object

// Example of an Array:
x = [1, 2, "red", "green", true, false, null];
console.log(typeof x); // Output: object

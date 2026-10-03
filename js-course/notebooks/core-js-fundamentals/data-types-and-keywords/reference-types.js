/*
Reference data types (a.k.a mutable or non-primitive data types) in Javascript ES6 (EcmaScript 6) include dynamic objects (which encompass arrays and functions) in that their content and size can be modified at run time.

1. Arrays

In JavaScript, an array is a special kind of object that have numbered indexes. Arrays `[]` can store values of any data type. 

2. Plain Objects `{}`, `Map()`, and `Set()`

- In JavaScript, keys of plain objects are converted into string data types, while the values associated with these keys can be of any data type.
- A Map maintains the order of insertion. It can only accept two arguments at a time. 
- A Set stores unique values of any data type.

Note: Unlike Python, JavaScript does not have built-in tuples. The Comma Operator (x, y) in JS returns the last element only.

3. Functions 

Functions are first-class objects because they can be passed to other functions, returned from functions, and assigned to variables and properties.

Fcuntions can be classified into:
- factoryFunction or regularFunction.
- functionLiteral.
- arrowFunction.
- ConstructorFunction.
*/

let x;

// Example of an Array:
x = [1, 2, "red", "green", true, false, null];
console.log(typeof x); // object

// Example of a objects:
x = { key1: "value1", key2: "value2" };
console.log(typeof x); // object

// Example of a Map:
x = new Map();
console.log(x.set("key1", null)); // Map(1) { 'key1' => null }

// Example of a Map with multiple key-value pairs:
x = new Map([
  ["key1", null],
  ["key2", 9],
]);
console.log(x); // Map(2) { 'key1' => null, 'key2' => 9 }

// Example of a Set:
x = new Set(["string", 1, 1, null]);
console.log(x); // Set(3) { 'string', 1, null }

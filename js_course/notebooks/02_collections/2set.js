/* A Set will only store unique values. */

// Creating an empty set:
let set = new Set();

// Adding values:
set.add("value1");
set.add("value2");
set.add("value2"); // Duplicates are ignored.

// Checking existing values:
console.log(set); // Set(2) { 'value1', 'value2' }
console.log(set.has("value1")); // true
console.log(set.has("value2")); // true
console.log(set.has("value3")); // false

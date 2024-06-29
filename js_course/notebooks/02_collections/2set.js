/* A Set will only store unique values. */

// Creating an empty set:
let hashTable = new Set();

// Adding values:
hashTable.add("key1");
hashTable.add("key2");
hashTable.add("key2"); // Duplicates are ignored.

// Checking existing values:
console.log(hashTable); // Set(2) { 'key1', 'key2' }
console.log(hashTable.has("key1")); // true
console.log(hashTable.has("key2")); // true
console.log(hashTable.has("key3")); // false

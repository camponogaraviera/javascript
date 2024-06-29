/* A Map maintains the order of insertion. */

// Creating a hash table using Map()
let hashTable = new Map();

// Adding key-value pairs
hashTable.set("key1", "value1");
hashTable.set("key2", "value2");

// Accessing values
console.log(hashTable); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }
console.log(hashTable.get("key1")); // value1
console.log(hashTable.get("key2")); // value2

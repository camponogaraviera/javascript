/* A Map maintains the order of insertion. It can only accept two arguments at a time. */

// Creating a hash table using Map()
let hashTable = new Map();

// Adding key-value pairs
hashTable.set("key1", "value1");
hashTable.set("key2", "value2");
console.log(hashTable); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// Built-in methods:
console.log(hashTable.get("key1")); // value1
console.log(hashTable.get("key2")); // value2
hashTable.clear(); // Removes all key-value pairs.
console.log(hashTable.size); // 0

// Example of a Map with multiple key-value pairs:
const hashTable2 = new Map([
  ["key1", null],
  ["key2", 9]
]);

console.log(hashTable2); // Map(2) { 'key1' => null, 'key2' => 9 }


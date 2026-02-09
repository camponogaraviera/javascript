/* A Map maintains the order of insertion. It can only accept two arguments at a time. */

// Creating a hash table using Map()
const customMap = new Map();

// Adding key-value pairs
customMap.set("key1", "value1");
customMap.set("key2", "value2");
console.log(customMap); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// Built-in methods:
console.log(customMap.get("key1")); // value1
console.log(customMap.get("key2")); // value2
customMap.clear(); // Removes all key-value pairs.
console.log(customMap.size); // 0

// Example of a Map with multiple key-value pairs:
const customMap2 = new Map([
  ["key1", null],
  ["key2", 9]
]);

console.log(customMap2); // Map(2) { 'key1' => null, 'key2' => 9 }

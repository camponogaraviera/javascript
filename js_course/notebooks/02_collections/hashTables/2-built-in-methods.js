/*

# Built-in Hash Table Methods

- hashTable[key] = value          # Adds a new key-value pair to the Hash Table. If the key already exists, it will update.
- hashTable[key]                  # Retrieves the value from a specific key. Returns undefined if key is not found.
- delete hashTable[key]           # Deletes the key-value pair associated with the key.
- Object.entries(hashTable)       # Get a list of all key-value pairs.
- Object.keys(hashTable)          # Get a list of all keys.
- Object.values(hashTable):       # Get a list of all values.
- Object.keys(hashTable).length   # Get the length of the hash table. 
*/

const hashTable = { x: 1, y: 2 };

// Get all entries (items):
console.log(Object.entries(hashTable)); // [ [ 'x', 1 ], [ 'y', 2 ] ]

// Get all keys:
console.log(Object.keys(hashTable)); // [ 'x', 'y' ]

// Get all values:
console.log(Object.values(hashTable)); // [ 1, 2 ]

// Get length:
console.log(Object.keys(hashTable).length); // 2

// Check if a key exists:
console.log("x" in hashTable); // true

// Convert keys to strings:
console.log(JSON.stringify(hashTable)); // {"x":1,"y":2}

// Get all keys:
console.log(Reflect.ownKeys(hashTable)); // [ 'x', 'y' ]

// Get all properties:
console.log(Object.getOwnPropertyNames(hashTable)); // [ 'x', 'y' ]



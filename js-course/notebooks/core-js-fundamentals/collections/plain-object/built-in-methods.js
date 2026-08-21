/*

# Built-in Plain Object Methods in JavaScript:

- object[key] = value          # Adds a new key-value pair to the Hash Table. If the key already exists, it will update.
- object[key]                  # Retrieves the value from a specific key. Returns undefined if key is not found.
- delete object[key]           # Deletes the key-value pair associated with the key.
- Object.entries(object)       # Get a list of all key-value pairs.
- Object.keys(object)          # Get a list of all keys.
- Object.values(object):       # Get a list of all values.
- Object.keys(object).length   # Get the length of the hash table. 
*/

const object = { x: 1, y: 2 };

// Get all entries (items):
console.log(Object.entries(object)); // [ [ 'x', 1 ], [ 'y', 2 ] ]

// Get all keys:
console.log(Object.keys(object)); // [ 'x', 'y' ]

// Get all values:
console.log(Object.values(object)); // [ 1, 2 ]

// Get length:
console.log(Object.keys(object).length); // 2

// Check if a key exists (own property only):
console.log(Object.hasOwn(object, "x")); // true

// Serialize the object to a JSON string:
console.log(JSON.stringify(object)); // {"x":1,"y":2}

// Get all keys:
console.log(Reflect.ownKeys(object)); // [ 'x', 'y' ]

// Get all properties:
console.log(Object.getOwnPropertyNames(object)); // [ 'x', 'y' ]

// Creating a hash table using object literal syntax:
let hash = {
  key1: "value1",
};

// Adding a new property with dot notation:
hash.key2 = "value2";
console.log(hash); // { key1: 'value1', key2: 'value2' }

// Adding a new property with bracket notation:
hash["key3"] = "value3";
console.log(hash); // { key1: 'value1', key2: 'value2', key3: 'value3' }

hash[3] = "value4";
console.log(hash); // { '3': 'value4', key1: 'value1', key2: 'value2', key3: 'value3' }

// Deleting a property using bracket notation:
delete hash[3];

// Deleting a property using dot notation:
delete hash.key1;
delete hash.key2;
console.log(hash); // {key3: 'value3'}

// ######################################################################

// The value associated with a key can be a function.
export let hash2 = {
  method1: function () {
    console.log("method1 called.");
  },
  "property-name": "not a valid identifier",
};


hash2.method1(); // 'method1 called.'

// Bracket notation is useful when using property names that are not valid identifiers (containing special characters), such as:
let property = "property-name";
console.log(hash2[property]); // 'not a valid identifier'

// Creating a key-value storage using object literal syntax (for true dictionaries, prefer Map or Object.create(null) to avoid prototype key collisions):
const container = {
  key1: "value1",
};

// Adding a new property with dot notation:
container.key2 = "value2";
console.log(container); // { key1: 'value1', key2: 'value2' }

// Adding a new property with bracket notation:
container["key3"] = "value3";
console.log(container); // { key1: 'value1', key2: 'value2', key3: 'value3' }

// In JavaScript, integer-like keys of plain objects are converted to strings and, during property iteration, are iterated in ascending numeric order:
container[2] = 2;
container[1] = 1;
// Property keys can only be strings or symbols (integer keys are converted to strings):
console.log(container); // { '1': 1, '2': 2, key1: 'value1', key2: 'value2', key3: 'value3' }

// Deleting a property using bracket notation:
delete container["key1"];

// Deleting a property using dot notation:
delete container.key2;
delete container.key3;
console.log(container); // { '1': 1, '2': 2 }

// ######################################################################

// The value associated with a key can be a function:
const container2 = {
  method1: function () {
    console.log("method1 called.");
  },
  "property-name": "not a valid identifier",
};

container2.method1(); // 'method1 called.'

// Bracket notation is useful when using property names that are not valid identifiers (containing special characters), such as:
const property = "property-name";
console.log(container2[property]); // 'not a valid identifier'

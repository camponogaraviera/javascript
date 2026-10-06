/* Arrow Function (ES6) */

// Multiple parameters and explicit return:
const createPerson = (name, age) => {
  // Private variables within the function scope:
  let privateName = name;
  let privateAge = age;

  // Returning an object literal with four properties:
  return {
    getName: () => privateName, // Accessor method for privateName.
    getAge: () => privateAge, // Accessor method for privateAge.
    setName: (newName) => {
      privateName = newName;
    }, // Mutator method for privateName.
    setAge: (newAge) => {
      privateAge = newAge;
    }, // Mutator method for privateAge.
  };
};

const person = createPerson("Alice", 30);

// Access private variables using accessor methods:
console.log(person.getName()); // Output: Alice
console.log(person.getAge()); // Output: 30

// Update private variables using mutator methods:
person.setName("Bob");
person.setAge(30);

console.log(person.getName()); // Output: Bob
console.log(person.getAge()); // Output: 30

// Attempting to access private variables directly will still fail:
console.log(person.privateName); // Output: undefined
console.log(person.privateAge); // Output: undefined

// ##############################################################

// If the function body is a single expression, you can omit the curly braces and the return keyword:

// Multiple parameters and implicit return:
const add = (a, b) => a + b;

const result = add(1, 2);
console.log(result); // Output: 3

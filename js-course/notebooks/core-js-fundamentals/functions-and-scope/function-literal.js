/*
Function Literal a.k.a anonymous function (ES6).
An anonymous function is a function that does not have a name.
*/

// Function literal assigned to a constant variable `createPerson`:
const createPerson = function (name, age) {
  const greetings = `Hello from ${name}. I am ${age} years old.`;
  // Return an object literal with three properties/attributes:
  return {
    attribute1: greetings,
    attribute2: name,
    attribute3: age,
  };
};

/*
Unlike C++, the `const` keyword in front of the variable `createPerson` does not impose any restrictions on the data type of the function's returned value. 
The function itself can return a value of any data type. Instead, it is a variable declaration. 
The variable `createPerson` is a constant that holds a reference to the function. 
The function, however, is not a constant, it can be called multiple times with different arguments. For example, trying to do `createPerson = someOtherFunction` would result in an error.
*/

// Calling the function and storing the returned object in a variable:
const firstPerson = createPerson("Alice", 30);
const secondPerson = createPerson("Bob", 30);
console.log(firstPerson.attribute1); // Output: Hello from Alice. I am 30 years old.
console.log(secondPerson.attribute1); // Output: Hello from Bob. I am 30 years old.

/*
Function Literal a.k.a anonymous function (ES6).
An anonymous function is a function that does not have a name.
*/

const functionLiteral = function (name, age) {
  let greetings = "Hello from functionLiteral!";
  // Return an object literal with three properties/attributes:
  return {
    attribute1: greetings,
    attribute2: name,
    attribute3: age,
  };
};

/*
Unlike in C++, the `const` keyword in front of the variable `functionLiteral` does not impose any restrictions on the data type of the function's returned value. The function itself can return a value of any data type.
Instead, it is a variable declaration. The variable `functionLiteral` is a constant that holds a reference to the function. 

The function, however, is not a constant, it can be called multiple times with different arguments. For example, trying to do `functionLiteral = someOtherFunction` would result in an error.
*/

let result = functionLiteral("Alice", 30); // Calling the function with a set of inputs.
let result2 = functionLiteral("Bob", 30); // Calling the function with a different set of inputs.
console.log(result.attribute1); // Output: Hello from functionLiteral!
console.log(result); // Output: { attribute1: 'Hello from functionLiteral!', attribute2: 'Alice', attribute3: 30 }
console.log(result2); // Output: { attribute1: 'Hello from functionLiteral!', attribute2: 'Bob', attribute3: 30 }

// ##############################################################

// Without the return keyword, the return value is undefined:

const functionLiteral2 = function () {
  console.log("Hello from functionLiteral2!");
};

let result3 = functionLiteral2(); // Output: Hello from functionLiteral2!
console.log(result3); // Output: undefined

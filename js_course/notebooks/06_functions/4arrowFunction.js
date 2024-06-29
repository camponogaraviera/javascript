// ES6 - Arrow Function

// Multiple parameters and explicit return:
const arrowFunction1 = (name, age) => {
  // Private variable using let:
  let insideVariable = "Private variable of arrowFunction1!";
  console.log(insideVariable);
  // Returning an object literal with three properties:
  return {
    attribute1: "Attribute1 of arrowFunction1!",
    attribute2: name,
    attribute3: age,
  };
};

let result1 = arrowFunction1("Alice", 30);
console.log(result1); // Output: { attribute1: 'Attribute1 of arrowFunction1!', attribute2: 'Alice', attribute3: 30 }
console.log(result1.attribute1); // Output: Attribute1 of arrowFunction1!

// Trying to access the private variable 'insideVariable' directly will return undefined.
console.log(result1.insideVariable); // Output: undefined

// ##############################################################

// If the function body is a single expression, you can omit the curly braces and the return keyword:

// Multiple parameters and implicit return:
const arrowFunction2 = (a, b) => a + b;

let result2 = arrowFunction2(1, 2); 
console.log(result2); // Output: 3

// ##############################################################

// One can use () to return an object without the return keyword:

const arrowFunction3 = () => ({
  attribute1:
    "Attribute1 of arrowFunction3 returned without the return keyword!",
});

let result3 = arrowFunction3();
console.log(result3.attribute1); // Output: Attribute1 of arrowFunction3 returned without the return keyword!

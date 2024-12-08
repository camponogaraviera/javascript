// ES6 - Arrow Function

// Multiple parameters and explicit return:
const createPerson = (name, age) => {
  // Private variable using let:
  let privateName = name;
  let privateAge = age;
  
  // Returning an object literal with two properties:
  return {
    name: name,
    age: age,
  };
};

let person = createPerson("Alice", 30);
console.log(person); // Output: { name: 'Alice', age: 30 }
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30

// Attempting to access private variables directly will fail:
console.log(person.privateName); // Output: undefined
console.log(person.privateAge); // Output: undefined

// ##############################################################

// If the function body is a single expression, you can omit the curly braces and the return keyword:

// Multiple parameters and implicit return:
const add = (a, b) => a + b;

let result = add(1, 2); 
console.log(result); // Output: 3

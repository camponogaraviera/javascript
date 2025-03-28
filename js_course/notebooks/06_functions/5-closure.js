/*
A closure is what allows an inner function to retain access to variables from its outer lexical scope (including those declared in the body of the outer function), even after the outer function has finished execution.

In JavaScript, closures are created at function creation time whenever a nested function accesses variables from its outer lexical scope.

Note: Lexical scoping refers to how variable access is determined by the position (structure) of the code, not by how the functions are executed.
*/

function outerFunction(name) {
  return function innerFunction(age) {
    console.log(`Name: ${name}, Age: ${age}`);
  };
}
  
const person1 = outerFunction("Bob");
person1(30); // Output: Name: Bob, Age: 30
  
// Even after the outerFunction has finished execution, the innerFunction retains access to the variable "name" because of closure.
  
  
  
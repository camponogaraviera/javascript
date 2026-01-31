/*
A closure is what allows an inner function to retain access to variables from its outer lexical scope (including those declared in the body of the outer function), even after the outer function has finished execution.

In JavaScript, closures are created at function creation time whenever a nested function accesses variables from its outer lexical scope.

Note: Lexical scoping refers to how variable access is determined by the position (structure) of the code, not by how the functions are executed.
*/

function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add10 = createAdder(10);
console.log(add10(10)); // Outputs: 20

// Even after the createAdder has finished execution, the innerFunction retains access to the variable "x" because of closure.

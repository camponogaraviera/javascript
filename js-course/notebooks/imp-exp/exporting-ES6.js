// Exporting in ES6 syntax using the `export` keyword.

// Named export:
export function regularFunction() {
  // Function body:
  let insideVariable = "Hello from regularFunction().";
  return insideVariable;
}

// Named export (via variable declaration):
export const arrowFunction = () => {
  // Function body:
  let insideVariable = "Hello from arrowFunction().";
  return insideVariable;
};

// Default export:
const arrowFunction2 = () => {
  // Function body:
  let insideVariable = "Hello from arrowFunction2().";
  return insideVariable;
};
export default arrowFunction2;

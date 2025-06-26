// Exporting in ES6 syntax using the `export` keyword.

// Export as a named export:
export const arrowFunction = () => {
  // Function body:
  let insideVariable = "Hello from arrowFunction().";
  return insideVariable;
};

// Export as default export:
const arrowFunction2 = () => {
  // Function body:
  let insideVariable = "Hello from arrowFunction2().";
  return insideVariable;
};
export default arrowFunction2;

// Export directly:
export function regularFunction() {
  // Function body:
  let insideVariable = "Hello from regularFunction().";
  return insideVariable;
}
// Exporting in ES6 syntax using the `export` keyword.

console.log("Exporting from exporting-ES6.js!\n");

// Default export:
export default function regularFunction() {
  // Function body:
  const insideVariable = "Hello from regularFunction().";
  return insideVariable;
}

// Named export:
export function regularFunction2() {
  // Function body:
  const insideVariable = "Hello from regularFunction2().";
  return insideVariable;
}

// Named export (via variable declaration):
export const arrowFunction = () => {
  // Function body:
  const insideVariable = "Hello from arrowFunction().";
  return insideVariable;
};

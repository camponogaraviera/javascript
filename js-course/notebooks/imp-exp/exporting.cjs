// Exporting in CommonJS module syntax (`module.exports`):

console.log("Hello from exporting.cjs!\n");

let message1 = "Regular Function exported in CJS!"; // Implementation detail. Does not need to be exported.

function regularFunction() {
  // Return an object literal with one property:
  return {
    attribute1: message1,
  };
}

module.exports.method1 = regularFunction; // Method on the exported object.

// Or also:
//exports.method1 = regularFunction;

// Aternatively, exporting the function directly:
//module.exports = regularFunction;

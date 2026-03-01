// Exporting in CommonJS module syntax (`module.exports`):

console.log("Exporting from exporting.cjs!\n");

function regularFunction() {
  const message = "Hello from regularFunction()!"; // Implementation detail. Does not need to be exported.

  // Return an object literal with one property:
  return {
    attribute: message,
  };
}

// Exporting the function directly:
module.exports = regularFunction;

// Alternatively:
//module.exports.method = regularFunction;

// Or also:
//exports.method = regularFunction;

console.log("Importing from importing.cjs!\n");

// It is a best practice to use const for variables that store exported values to avoid overriding.
const regularFunction = require("./exporting.cjs"); // Store the exported object in a variable.
console.log(regularFunction); // [Function: regularFunction]

const returnedValue = regularFunction(); // Call the imported function and store the returned value.
console.log(returnedValue.attribute); // Hello from regularFunction()!

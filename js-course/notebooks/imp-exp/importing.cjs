// It is a best practice to use const for variables that store exported values to avoid overriding.

const logger = require("./exporting.cjs"); // Store the exported object in a variable.

console.log(logger); // { method1: [Function: regularFunction] }
const returnedValue = logger.method1();
console.log(returnedValue); // { attribute1: 'Regular Function exported in CJS!' }
console.log(returnedValue.attribute1); // Regular Function exported in CJS!

// Aternatively, you can use the dot notation to access the exported function.
const logger2 = require("./exporting.cjs").method1; // Store the exported function in a variable.
console.log(logger2().attribute1); // Regular Function exported in CJS!

// Alternatively, you can destructure the exported object.
const { method1 } = require("./exporting.cjs"); // Destructure the exported object.
console.log(method1().attribute1); // Regular Function exported in CJS!

// Aternatively, if the function was exported directly:
//const log = require("./exporting.cjs"); // Store the exported function in a variable.
//log();

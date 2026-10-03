console.log("Importing from importing-ES6.js!\n");

// Default/direct import:
import regularFunction from "./exporting-ES6.js";

// Named import:
import { regularFunction2 } from "./exporting-ES6.js";

// Named import with alias:
import { arrowFunction as arrowFunctionAlias } from "./exporting-ES6.js";

// ####################################################################

let returnedValue = regularFunction();
console.log(returnedValue); // Output: Hello from regularFunction().

returnedValue = regularFunction2();
console.log(returnedValue); // Output: Hello from regularFunction2().

returnedValue = arrowFunctionAlias();
console.log(returnedValue); // Output: Hello from arrowFunction().

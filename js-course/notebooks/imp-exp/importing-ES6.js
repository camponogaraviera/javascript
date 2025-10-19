// Named import:
import { regularFunction } from "./exporting-ES6.js";

const returnedValue = regularFunction();
console.log(returnedValue); // Output: Hello from regularFunction().

// ####################################################################

// Named import with alias:
import { arrowFunction as arrowFunctionAlias } from "./exporting-ES6.js";

const returnedValue2 = arrowFunctionAlias();
console.log(returnedValue2); // Output: Hello from arrowfunction().

// ####################################################################

// Default/direct import:
import arrowFunction2 from "./exporting-ES6.js";

const returnedValue3 = arrowFunction2();
console.log(returnedValue3); // Output: Hello from arrowFunction2().

// ####################################################################

// The following method won't work because `require` is not defined in the ES6 module scope:
// const { regularFunction } = require("./exporting-ES6.js");

// Importing in ES6:

import { regularFunction } from "./4exportingES6.js";

const returnedValue = regularFunction();
console.log(returnedValue); // Output: Hello from regularFunction().

// ####################################################################

// Importing with alias:
import { arrowFunction as arrowFunctionAlias } from "./4exportingES6.js";

const returnedValue2 = arrowFunctionAlias(); 
console.log(returnedValue2); // Output: Hello from arrowfunction().

// ####################################################################

// The following method won't work because `require` is not defined in the ES6 module scope:
// const { regularFunction } = require("./4_exportingES6.js");

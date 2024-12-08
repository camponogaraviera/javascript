// Importing in ES6:

import { regularFunction } from "./4exportingES6.js";

const returnedValue = regularFunction();
console.log(returnedValue.attribute1); // Output: Regular Function exported in ES6!

// ####################################################################

// Importing with alias:
import { arrowFunction as arrowFunctionAlias } from "./4exportingES6.js";

arrowFunctionAlias(); // Output: Arrow Function exported in ES6!

// ####################################################################

// The following method won't work because `require` is not defined in the ES6 module scope:
// const { regularFunction } = require("./4_exportingES6.js");

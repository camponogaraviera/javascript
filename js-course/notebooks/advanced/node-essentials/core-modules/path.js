// Path Module: Provides utilities for working with file and directory paths.

// ESM Syntax:
import path from "path";
import { fileURLToPath } from "url";

// Convert `import.meta.url` to a file path:
const __filename = fileURLToPath(import.meta.url);

// Parse the file path:
const pathobj = path.parse(__filename);

console.log(pathobj);

/*
//.cjs Syntax:
const path = require("path");

const pathobj = path.parse(__filename);

console.log(pathobj);
*/

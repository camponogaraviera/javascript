// OS Module: Provides information about the operating system, such as CPU architecture, memory, etc.

//const os = require("os");
import os from "os";

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

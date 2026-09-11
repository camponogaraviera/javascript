// OS Module: Provides information about the operating system, such as CPU architecture, memory, etc.

//const os = require("os");
import os from "os";

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

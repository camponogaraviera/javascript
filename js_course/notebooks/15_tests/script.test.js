/*
This file defines the unit tests.
Naming convention: <module_name>.test.js

"Jest ships with experimental support for ECMAScript Modules (ESM). The implementation may have bugs and lack features. For the latest status check out the issue and the label on the issue tracker."
—Source: https://jestjs.io/docs/ecmascript-modules
*/

import path from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import { readFilesRecursive } from "./script.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notebooksDir = path.join(__dirname, ".."); // Moves one directory level up.

// Jest test to check whether each JavaScript module in the notebooks/ folder runs without errors:
describe("JavaScript Modules", () => {
  const jsFiles = readFilesRecursive(notebooksDir);

  jsFiles.forEach((file) => {
    test(`Should run module: ${file}`, async () => {
      await new Promise((resolve, reject) => {
        const worker = new Worker(file, { workerData: null });

        worker.on("exit", (code) => {
          expect(code).toBe(0);
          resolve();
        });

        worker.on("error", (error) =>
          reject(new Error(`Error in ${file}: ${error.message}`)),
        );
      });
    });
  });
});

/*
//import { checkSign } from "./script.js";
//const checkSign = require("./script.js");

// Using Describe Blocks to group tests:
describe("checkSign", () => {
  it("Returns 'positive' if input is positive", () => {
    // https://jestjs.io/docs/using-matchers
    expect(checkSign(1)).toBe("positive");
  });

  it("Returns 'negative' if input is negative", () => {
    expect(checkSign(-1)).toBe("negative");
  });

  it("Returns 'zero' if input is zero", () => {
    expect(checkSign(0)).toBe("zero");
  });
});
*/

/*
This file checks whether each JavaScript module in the notebooks/ folder runs without errors.
*/

import { readFilesRecursive } from "./helper.js";
import path from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notebooksDir = path.join(__dirname, ".."); // Moves one directory level up.

//console.log(notebooksDir); // ~/javascript/js_course/notebooks

// Read all .js files recursively in the notebooks directory:
const jsFiles = readFilesRecursive(notebooksDir); // Returns an array of file paths.

// Create a worker for each file:
const runModuleInWorker = async (file) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(file, { workerData: null });
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker exited with code ${code} in ${file}`));
      } else {
        resolve();
      }
    });
    worker.on("error", (error) =>
      reject(new Error(`Error in ${file}: ${error.message}`)),
    );
  });
};

// Run all the files in parallel and wait for all of them to finish:
const results = await Promise.allSettled(jsFiles.map(runModuleInWorker));

// Log the results:
results.forEach((result, i) => {
  const file = jsFiles[i];
  if (result.status === "fulfilled") {
    console.log(`✅ ${file} ran without error.`);
  } else {
    console.error(`❌ ${result.reason.message}`);
  }
});

// This file defines the functions to be tested in the script.test.js file.

import fs from "fs";
import path from "path";

// Helper function to read all .js files recursively:
export const readFilesRecursive = (dir) => {
  const files = fs.readdirSync(dir);
  let allFiles = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      allFiles = [...allFiles, ...readFilesRecursive(filePath)]; // Recurse into subdirectories.
    } else if (file.endsWith(".js") && !["script.test.js", "benchmarking.js"].includes(file)) {
      allFiles.push(filePath);
    }
  });

  return allFiles;
};

/*
// The following function has three execution paths:
export function checkSign(value) {
  if (value > 0) {
    return "positive";
  } else if (value < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
*/

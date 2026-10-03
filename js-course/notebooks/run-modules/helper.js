import fs from "fs";
import path from "path";

// Helper function to read all .js files recursively:
export const readFilesRecursive = (dir) => {
  const files = fs.readdirSync(dir); // "files" is an array of subfolders or filenames in the current directory.
  //console.log(Array.isArray(files)); // true
  let allFiles = []; // Initialize an empty array to store file paths.

  // Iterate over each file in the directory:
  files.forEach((file) => {
    const filePath = path.join(dir, file); // Join the directory and file name to get the full path.
    const stats = fs.statSync(filePath); // Get the stats of the file or directory.
    //console.log(stats);

    if (stats.isDirectory()) {
      allFiles = [...allFiles, ...readFilesRecursive(filePath)]; // Recurse into subdirectories.
    } else if (
      file.endsWith(".js") &&
      !["script.js", "script.test.js", "helper.js", "run-modules.js"].includes(
        file,
      ) // Using high-order Array function to exclude specific files.
    ) {
      allFiles.push(filePath);
      //console.log(`Filename: ${file}`);
    }
  });

  return allFiles;
};

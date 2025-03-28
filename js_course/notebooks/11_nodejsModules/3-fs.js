// File System Module:

//const fs = require("fs");
import fs from "fs";

// The following method is asynchronous (non-blocking):
fs.readdir("./", (err, result) => {
  // The first argument specifies the current path directory.
  // The second argument is a callback function with two parameters: error and result.
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Files", result);
  }
});

// File System Module:
const fs = require("fs");

// The following method is asynchronous (non-blocking):
fs.readdir("./", function (err, result) {
  // The first argument specifies the current path directory.
  // The second argument is a callback function with two parameters: error and result.
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Files", result);
  }
});

// Writing the function above using the arrow function syntax:
fs.readdir("./", (err, result) => {
  // The first argument specifies the current path directory.
  // The second argument is a callback function with two parameters: error and result.
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Files", result);
  }
});

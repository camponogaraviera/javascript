// This file defines the functions to be tested in the script.test.js file.

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

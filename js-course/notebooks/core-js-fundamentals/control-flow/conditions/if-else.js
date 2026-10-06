/*
// The following values are falsy:
Boolean(false)     // false
Boolean(0)         // false
Boolean('')        // false
Boolean(null)      // false
Boolean(undefined) // false

// The following are truthy:
Boolean([])       // true
Boolean({})       // true
*/

// Order: if -> else if -> else

const x = 15;

if (x > 10) {
  console.log(`${x} is greater than 10.`);
} else if (x > 5) {
  // Only executed if x <= 10.
  console.log(`${x} is greater than 5 but less than or equal to 10.`);
} else {
  console.log("5 or less");
}

/*
The `else if` structure enforces mutual exclusivity, i.e., only one branch of the condition can execute, even if multiple conditions are truthy in isolation.
The else if only runs if the first if fails.

If x = 15, only the first block runs (x > 10), and the else if is skipped.
Even though 15 > 5 is also true, it does not execute because the conditions are mutually exclusive. 
*/

if (process.env.NODE_ENV === "development") {
  console.log("Under development.");
} else if (process.env.NODE_ENV === "production") {
  console.log("In production.");
} else {
  console.log("In testing.");
}

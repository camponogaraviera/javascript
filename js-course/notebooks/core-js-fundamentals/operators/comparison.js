const a = 0;
const b = 1;

// Less than:
if (a < b) {
  console.log("a is less than b.");
}

// Greater than:
if (b > a) {
  console.log("b is greater than a.");
}

// Loose equality (checks value only, uses type coercion; generally discouraged in production):
if (a == "0") {
  console.log('"0" coerces to 0.');
}

// Strict Equality (checks both value and type, does not use type coercion):
if (b === 1) {
  console.log("b matches value and type of 1.");
}

/*
console.log(true == 1); // true (true coerces to 1). Prefer === in production code.
console.log(true === 1); // false (types are different).
console.log(null == undefined); // true (one of the rare cases sometimes used intentionally).
console.log(null === undefined); // false
*/

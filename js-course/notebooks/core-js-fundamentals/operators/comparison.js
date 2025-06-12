const a = 5;
const b = 10;

// Greater than:
if (a > b) {
  console.log("a is greater than b.");
}

// Less than:
if (a < b) {
  console.log("a is less than b.");
}

// Loose equality (checks value only with type coercion):
if (b == "10") {
  // true because "10" is coerced to 10.
  console.log("b is exactly 10.");
}

// Strict Equality (checks both value and type with no type coercion):
if (a === 5) {
  console.log("a is exactly 5.");
}

console.log(true == 1); // true (true coerces to 1).
console.log(true === 1); // false (true is boolean, 1 is number).
console.log(null == undefined); // true
console.log(null === undefined); // false

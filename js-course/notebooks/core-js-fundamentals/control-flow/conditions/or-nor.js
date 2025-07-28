// OR
console.log("OR:");
console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(5 > 3 || 2 > 4); // true (first condition is true)

// NOR
console.log("NOR:");
console.log(!(false || false)); // true
console.log(!(true || false)); // false
console.log(!(false || true)); // false
console.log(!(true || true)); // false
console.log(!(5 > 3 || 2 > 4)); // false (first condition is true)
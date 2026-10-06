const a = false;
const b = true;

// AND
console.log("AND:");
console.log(a && a); // false
console.log(b && a); // false
console.log(a && b); // false
console.log(b && b); // true

// NAND
console.log("NAND:");
console.log(!(a && a)); // true
console.log(!(b && a)); // true
console.log(!(a && b)); // true
console.log(!(b && b)); // false

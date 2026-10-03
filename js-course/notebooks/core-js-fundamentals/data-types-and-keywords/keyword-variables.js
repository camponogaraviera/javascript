/*
# Keyword variables in Javascript ES6 (EcmaScript 6).

1. var: This keyword is function-scoped, but not block-scoped, and therefore, it is not a best practice to use it.

2. let: This keyword was introduced in ES6 and is used to declare block-scoped variables that can be reassigned. 

3. const: This keyword was introduced in ES6 and is used to declare block-scoped variables that cannot be reassigned, i.e., whose value remains constant. 

Note: block-scoped means the variable is accessible only within the block (function, loop, or conditional) where it is declared. 
Variables can only be declared once. Declaring a variable twice results in an error.
*/

// Declaring a variable with let:
let name = "Alice";
console.log(name); // Output: Alice
name = "Bob";
console.log(name); // Output: Bob

// Declaring a variable with const:
const number = 30;
console.log(number + 1); // Output: 31
//number = 0 // Uncaught TypeError: Assignment to constant variable.

// ##############################################################

function varExample() {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    var x = "x"; // x is accessible throughout varExample().
  }
  console.log(x); // Output: x
}
varExample();
console.log(typeof x); // Output: undefined (x is not accessible globally).

// ##############################################################

function letExample() {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    let y = "y"; // y is accessible only within this block.
    console.log(y); // Output: y
  }
  console.log(typeof y); // Output: undefined
}
letExample();

// ##############################################################

function constExample() {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    const z = "z"; // z is accessible only within this block.
    console.log(z); // Output: z
  }
  console.log(typeof z); // Output: undefined
}
constExample();

// ##############################################################

// Primitives are copied by value:
// When you assign an immutable data type (number, string, or boolean) to a new variable, a copy (rather than a reference) of the same value is created.

let a = 1; 
let b = a; // Assigns an immutable data type to variable b by value.

a = 2; // Changes made to the original variable will not affect the new variable.
console.log(b); // Output: 1

// ##############################################################

// Objects are copied by reference.
// Assigning a mutable data type (array or plain object) to a new variable creates a new reference pointing to the same object in memory.

a = { value: 1 };
b = a; // Assigns a mutable data type to variable b by reference.

a.value = 2; // Changes made to the data through the original variable will be reflected in the new variable as well.
console.log(b.value); // Output: 2

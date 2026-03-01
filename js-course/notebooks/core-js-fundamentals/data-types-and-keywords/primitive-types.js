/*
Primitive data types (a.k.a value or immutable data types) in Javascript ES6 (EcmaScript 6):

1. Number: 1, 2, 3, 1.5, 2.5;
2. String: "Hello World";
3. Boolean: true, false;
4. Undefined: undefined;
5. Null: null;
6. Symbol: Symbol();
7. BigInt: BigInt('1000000');

In JavaScript, the `number` type is used to represent both integer and floating-point numbers, and it conforms to the IEEE 754 standard for double-precision (64-bit) floating-point numbers. 
*/

// ######################################################################

// Number:
let x = 1; // Declaring a variable and assigning a value.
console.log(typeof x); // Output: number

// String:
x = "string"; // Reassigning a value to the variable x.
console.log(typeof x); // Output: string

// Template string:
console.log(`This is a template ${x}!`); // Output: This is a template string!

// Checking if a variable is of type string:
console.log(typeof x === "string"); // Output: true

// Boolean:
x = true;
console.log(typeof x); // Output: boolean

// Undefined:
let y;
console.log(typeof y); // Output: undefined

// Null:
x = null;
console.log(typeof x); // Output: object

// Symbol:
x = Symbol();
console.log(typeof x); // Output: symbol

// BigInt:
x = BigInt("12345678901234567890");
console.log(typeof x); // Output: bigint

/*
# Dynamic Typing in JavaScript ES6

Unlike Java or C++, JavaScript is a dynamically typed language, i.e., the data type of a variable can change at runtime. There is no need to explicitly declare the data type of the variable. Javascript will automatically infer the data type of the variable based on the value assigned to it. 

Pros: type-checking is done at runtime. 
Cons: as the codebase grows and becomes more complex, it gets increasingly difficult to find runtime errors and debug.
*/

let myVariable; // Declaring a variable without assigning a value. 
console.log(typeof myVariable); // Output: "undefined" (myVariable has not been assigned a data type)

myVariable = 5; // Assigning an integer value. 
console.log(typeof myVariable); // Output: "number" (myVariable is inferred to be a Number data type)

myVariable = "Hello, world!"; // Reassigning to string value.
console.log(typeof myVariable); // Output: "string"

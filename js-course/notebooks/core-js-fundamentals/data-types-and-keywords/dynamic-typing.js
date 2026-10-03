/*
# Dynamic Typing in JavaScript ES6

Unlike Java or C++, JavaScript is a dynamically typed language, i.e., the data type of a variable can change at runtime. 
There is no need to explicitly declare the data type of the variable. 
Javascript will automatically infer the data type of the variable based on the value assigned to it. 

- Pros: type-checking is done at runtime allowing faster prototyping as developers can easily modify the code by passing around different types. 

- Cons: 
  - Can lead to slower access to object properties as compared to statically typed languages. However, modern JavaScript engines (e.g., V8) use optimization techniques such as Hidden Classes and Inline Caching to mitigate these performance issues.
  - As the codebase grows and becomes more complex, finding and debugging runtime errors becomes increasingly difficult due to the lack of compile-time type checking.
*/

let myVariable; // Declaring a variable without assigning a value. 
console.log(typeof myVariable); // Output: "undefined" (myVariable has not been assigned a data type)

myVariable = 5; // Assigning an integer value. 
console.log(typeof myVariable); // Output: "number" (myVariable is inferred to be a Number data type)

myVariable = "Hello, world!"; // Reassigning to string value.
console.log(typeof myVariable); // Output: "string"

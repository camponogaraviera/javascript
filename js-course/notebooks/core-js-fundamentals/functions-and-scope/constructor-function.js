/* 
Constructor Function. 
The function name should start with a capital letter and follow the Pascal case convention, just like classes.
*/

function ConstructorFunction(name, age) {
  // Private variable using let
  let insideVariable = "Running Constructor function!";
  // Public properties:
  this.name = name;
  this.age = age;
  // Public Methods:
  this.method = function () {
    console.log(insideVariable);
    console.log(this.name);
  };
}

// Creating a new instance of the constructor function:
const myInstance = new ConstructorFunction("Alice", 30);

/*
The `new` operator is used to create an empty object, and to set the `this` keyword to point to that empty object. The empty object is then returned from the function.
*/

console.log(myInstance.name); // Alice
console.log(myInstance.age); // 30
myInstance.method(); // Running Constructor function! Alice

// Trying to access the private variable 'insideVariable' directly will return undefined:
console.log(myInstance.insideVariable); // undefined

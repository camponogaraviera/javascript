/*
Example of Abstraction using a closure.
*/

function Abstraction() {
  // public property:
  this.publicProperty = "public property";
  // private property:
  const privateProperty = "private property";
  // private method:
  const privateMethod = function () {
    console.log("private method");
    // It is not possible to access public properties through a private method. The next line will throw an error:
    //console.log(this.publicProperty); // Output: TypeError: Cannot read properties of undefined (reading 'publicProperty')
  };
  // Public method:
  this.publicMethod = function () {
    console.log(this.publicProperty);
    // Accessing a private property directly works:
    console.log(privateProperty);
    // Using closure to access the private method works because the private method is defined within the same lexical scope as the public method:
    privateMethod();
  };
}

const abs = new Abstraction();
console.log(abs.publicProperty); // Ouput: "public property"
console.log(abs.privateProperty); // Ouput: undefined.
abs.publicMethod(); // Ouput: "public property" "private property" "private method"
//abs.privateMethod(); // Ouput: TypeError: abs.privateMethod is not a function

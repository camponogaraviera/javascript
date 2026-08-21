/*
Getter: A method used to read the value of a property.
Setter: A method used to set the value of a property from outside of the function.
*/

function Example() {
  // Creating a private property:
  let privateProperty = "private property";
  // Adding a getter and setter to the object:
  Object.defineProperty(this, "privateProperty", {
    // Adding a getter to the object:
    get: function () {
      return privateProperty;
    },
    // Adding a setter to the object:
    set: function (value) {
      privateProperty = value;
    },
  });
}

// Creating a new instance of the Example object:
const example = new Example();
// Reading the value of the private property:
console.log(example.privateProperty); // private property
// Setting the value of the private property:
example.privateProperty = "new private property";
console.log(example.privateProperty); // new private property

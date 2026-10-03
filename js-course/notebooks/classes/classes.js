/*

# About

Classes were introduced in EcmaScript 2015 (ES6), together with static methods used to make a method accessible from the global scope without having to create an instance of the class.

A JavaScript class consists of:
1) Class body, denoted by curly braces {}, it is where class members are defined.
2) Class members: constructor, fields, and methods.
3) Constructor: it is where class fields are defined.
4) Class methods: are functions defined to perform specific operations. They are called on instances of the class.

Class elements can be classified into:
 - Kind: getter, setter, method, or field.
 - Location: static or instance.
 - Visibility (Access Modifiers): public or private.
 
# Naming convention 

The name of a JavaScript class should start with a capital letter and follow the Pascal case convention.

# Updates in ES13

1) Since ES13, class fields can now be declared outside the constructor.

2) In JavaScript, classes do not have built-in private methods like Java.
 - Before ES13, the convention was to add an underscore in front of a private method, however, this method would still be accessible.
 - Since ES13, it is possible to set private methods and fields using hashtag (#).
*/

//////////////////////////////////////////////////////////////////////

// General Class declaration:
class MyClass {
  constructor(field1, field2) {
    // Function body:
    this.field1 = field1;
    this.field2 = field2;
  }
  method1() {
    console.log("First method.");
  }
}

// Creating an instance of the class:
const myClassInstance = new MyClass("input1", "input2");
// Check if an object is an instance of a class:
console.log(myClassInstance instanceof MyClass); // true
// Accessing a field:
console.log(myClassInstance.field1); // Output: input1

//////////////////////////////////////////////////////////////////////

// Class declaration before ES13:
class BeforeES13 {
  constructor() {
    this._fakePrivateField = "_fakePrivateField"; // Private field (still accessible from the outside)
    this.message = "Before ES13"; // Public property
  }

  publicMethod() {
    console.log(this.message);
  }

  _fakePrivateMethod() {
    console.log(
      `Hello from _fakePrivateMethod, displaying ${this._fakePrivateField}`,
    ); // Still accessible from the outside.
  }
}

// Creating an instance of the class:
const before = new BeforeES13();
// Calling the public method:
before.publicMethod(); // Output: Before ES13
// Accessing a field:
console.log(before._fakePrivateField); // Output: _fakePrivateField
before._fakePrivateMethod(); // Output: Hello from _fakePrivateMethod, displaying _fakePrivateField

//////////////////////////////////////////////////////////////////////

class AfterES13 {
  #privateField = "#privateField"; // Private field (not accessible from the outside).
  publicField = "After ES13"; // Public field.

  static staticMethod() {
    console.log("staticMethod");
  }

  publicMethod() {
    console.log(this.publicField);
    // Calling private property internally:
    console.log(`Hello from publicMethod, displaying ${this.#privateField}!`);
    // Calling private method internally:
    this.#privateMethod();
  }

  // Private method (not accessible from the outside):
  #privateMethod() {
    console.log(`Hello from #privateMethod, displaying ${this.#privateField}!`);
  }
}

// Calling a static method which does not require a class instance:
AfterES13.staticMethod(); // Output: staticMethod
// Creating a class instance:
const after = new AfterES13();
after.publicMethod(); // Output: After ES13 Hello from publicMethod, displaying #privateField
//console.log(after.#privateField); // Output: SyntaxError: Private field '#privateField' must be declared in an enclosing class
//after.#privateMethod(); // Output: SyntaxError: Private field '#privateMethod' must be declared in an enclosing class

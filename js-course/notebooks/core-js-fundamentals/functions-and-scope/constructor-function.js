/* 
Constructor Function. 
The function name should start with a capital letter and follow the Pascal case convention, just like classes.
*/

function CreatePerson(name, age) {
  if (!(this instanceof CreatePerson)) {
    throw new Error(
      "CreatePerson function must be called with the 'new' keyword.",
    );
  }

  // Public properties:
  this.publicMessage = `This is a public message from ${name}!`;
  this.name = name;
  this.age = age;

  const privateMessage = `This is a private message from ${name}!`;

  // Public method defined inside the constructor (not recommended for memory efficiency):
  this.sendPrivateMessage = function () {
    console.log(privateMessage);
  };
}

// Public method on the prototype (shared among all instances):
CreatePerson.prototype.sendPublicMessage = function () {
  console.log(this.publicMessage);
};

// Creating a new instance of the constructor function:
const firstPerson = new CreatePerson("Alice", 30);
const secondPerson = new CreatePerson("Bob", 25);

/*
The `new` operator:
1. Creates a new empty object.
2. Sets the object's [[Prototype]] to Person.prototype.
3. Binds `this` inside the constructor to that object.
4. Returns the object (unless the constructor returns another object).
*/

firstPerson.sendPublicMessage(); // This is a public message from Alice!
firstPerson.sendPrivateMessage(); // This is a private message from Alice!
console.log(firstPerson.name); // Alice
console.log(firstPerson.age); // 30

// Prototype methods are shared:
console.log(firstPerson.sendPublicMessage === secondPerson.sendPublicMessage); // true

// Methods defined inside the constructor are unique to each instance:
console.log(firstPerson.sendPrivateMessage === secondPerson.sendPrivateMessage); // false

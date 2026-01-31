/* Regular function (a.k.a factory function) follows the camelCase convention. */

function createPerson(name, age) {
  // Private variables:
  const privateName = name; // The variable is scoped to the function. This means it cannot be accessible from outside the function.
  const privateAge = age;

  // Returning an object literal with two properties/attributes:
  return {
    // Public Method:
    getName: function () {
      return privateName;
    },
    // Public Method:
    getAge: function () {
      return privateAge;
    },
  };
}

const person = createPerson("Alice", 30);
console.log(person); // Output: { getName: [Function: getName], getAge: [Function: getAge] }
console.log(person.getName()); // Output: Alice
console.log(person.getAge()); // Output: 30

// Attempting to access private variables directly will fail:
console.log(person.privateName); // Output: undefined
console.log(person.privateAge); // Output: undefined

// ##############################################################

function modifyObject(obj) {
  /* 
  In JavaScript, objects are passed by reference, meaning that when you pass an object to a function, you are passing a reference to that object, not a copy of it.
  Therefore, after modifying the object inside the function, the changes will be reflected in the original object as well.
  */
  obj.value++;
}

const object = { value: 1 };
modifyObject(object);
console.log(object); // Output: { value: 2 }

// ##############################################################

// Without the return keyword, the return value is undefined:

function someOtherFunction() {
  console.log("Hello from someOtherFunction!");
}

const result = someOtherFunction();
console.log(result); // Output: undefined

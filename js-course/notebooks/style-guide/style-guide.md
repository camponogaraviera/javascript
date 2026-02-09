<div align='center'>
  <h1> Style Guide </h1>
  <h2> JavaScript </h2>
</div>

# About

A style guide incorporates industry best practices for writing clean, readable, and maintainable code. 

# Table of Contents

- [Naming Convention](#naming-convention)
- [Use Meaningful Names](#use-meaningful-names)
- [Leading and Trailing Underscores](#leading-and-trailing-underscores)
- [Variable Declaration and Assignment](#variable-declaration-and-assignment)
- [Property Access](#property-access)
- [Iterators](#iterators)
- [Generators](#generators)
- [Tests](#tests)
- [Use Object-Oriented Programming (OOP)](#use-object-oriented-programming-oop)
- [Follow the DRY (Don't Repeat Yourself) Principle](#follow-the-dry-dont-repeat-yourself-principle)
- [Follow the Single Responsibility Principle](#follow-the-single-responsibility-principle)
- [Modularize Code](#modularize-code)

# Naming Convention

```bash
`dash-separated`: used to name modules or regular files. For example: **flatlist-component.jsx** and **flatlist-component-styles.jsx**.

`camelCase`: used to name variables, regular functions, and modules (or regular files). The first letter is lowercase, and subsequent words start with an uppercase letter. For example: **myVariable**, **regularFunction**, **factoryFunction**, **functionLiteral**, **arrowFunction**, and **homePage.js**.

`PascalCase`: used for naming classes and constructor functions. The first letter is uppercase, and each subsequent word also begins with an uppercase letter. For example: **ClassName** and **ConstructorFunction**.

`SCREAMING_SNAKE_CASE`: used for naming constants. All letters are uppercase, and words are separated by underscores. For example: **CONSTANT_NAME**.

`#prefix`: is used to indicate private fields and methods. For example: **#privateField**, **#privateMethod**.

JavaScript is a case-sensitive language. myVariable and MyVariable are different variables.
```

# Use Meaningful Names

- Choose clear, descriptive names for variables, functions, and classes.

```javascript
// Bad practice: 
function f1(x) {}

// Good practice: 
function fetchUserData(user) {}
```

# Leading and Trailing Underscores

- Single leading underscore `_privateField` has been superseded by `#privateField` to indicate private fields and methods in classes.

- Use single trailing underscore `var_` to avoid naming conflicts with JavaScript reserved keywords.

```javascript
// Avoid conflict with the 'class' keyword:
const class_ = "ES6"; 

// Avoid conflict with the 'delete' operator:
function delete_(item) { 
}
```

# Variable Declaration and Assignment

- Avoid declaring global variables in the global namespace by using `let` and `const` keywords.
- Avoid using the `var` keyword since it is function-scoped, but not block-scoped.

```javascript
// Bad practice (implicit global declaration):
x = 10;  

// Bad practice (not block-scoped):
var x = 20;  

// Good practice (block-scoped, explicit declaration):
let x;  

// Good practice (if reassignment is not needed):
const x;  

// Bad practice (undeclared assignment, throws in strict mode):
someClass = new SomeClass();  

// Good practice (property declared):
const someClass = new SomeClass();  
```

# Property Access

- Prefer dot notation over bracket notation.

```javascript
const hash = {
  key1: 1,
  key2: 2,
};

// Bad practice:
const value1 = hash['key1'];
 
// Good practice:
const value1 = hash.key1;
```

# Iterators

Prefer declarative, functional programming patterns using built-in high-order functions over imperative loops when readability and maintainability is a priority over micro-optimizations.

Caveat: for loops are generally faster.

- To iterate over arrays: `.map()`, `.filter()`, `.includes()`, `.find()`, `.findIndex`, `.reduce()`, `.every()`, `.some()`.  

- To iterate over objects: `Object.keys()`, `Object.values()`, `Object.entries()`.

```javascript
const numbersArray = [1, 2, 3, 4, 5];

// Bad practice:
let sum = 0;
for (let item of numbersArray) {
  sum += item;
}

// Good practice:
const sum = numbersArray.reduce((sum, currentItem) => sum + currentItem, 0);

// Bad practice:
const increasedByOne = [];
for (let i = 0; i < numbersArray.length; i++) {
  increasedByOne.push(numbersArray[i] + 1);
}

// Good practice:
const increasedByOne = numbersArray.map((num) => num + 1);
```

# Generators

```javascript

// Good practice:
function* functionName(i) {
  yield i;
  yield i + 10;
}
const gen = functionName(10);
console.log(gen.next().value); // 10
console.log(gen.next().value); // 20
```

# Tests

- Always write a regression test whenever a bug is fixed. 
- Create 100% test coverage whenever possible.

# Use Object-Oriented Programming (OOP) 

- Instead of writing multiple functions that operate on global data, encapsulate related data and behavior within classes avoiding spaghetti code. 
- Use abstraction to hide complex implementation details from the user using closure variables or `#` to define private methods and fields.

# Follow the DRY (Don't Repeat Yourself) Principle

- Avoid code duplication by abstracting common logic into reusable functions, components or classes. 

# Follow the Single Responsibility Principle

- Ensure that each function or class has a single, well-defined purpose. This makes your code easier to understand and maintain.

```javascript
// Bad practice: a function that processes data and displays it.

// Good practice: a dedicated function for processing the data and another for displaying it.
```

# Modularize Code

- Break your code into smaller, reusable modules or functions. Each module should be responsible for a specific part of the functionality. For example, separate the user interface code from the backend logic.

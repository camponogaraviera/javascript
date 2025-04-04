<div align='center'>
<h1> Style Guide </h1>
</div>

# About

A style guide incorporates industry best practices for writing clean, readable, and maintainable code. 

# Table of Contents

- [Use Meaningful Names](#use-meaningful-names)
- [Variables](#variables)
- [Properties](#properties)
- [Iterators](#iterators)
- [Generators](#generators)
- [Tests](#tests)
- [Use Object-Oriented Programming (OOP)](#use-object-oriented-programming-oop)
- [Follow the DRY (Don't Repeat Yourself) Principle](#follow-the-dry-dont-repeat-yourself-principle)
- [Follow the Single Responsibility Principle](#follow-the-single-responsibility-principle)
- [Modularize Code](#modularize-code)

# Use Meaningful Names

- Choose clear, descriptive names for variables, functions, and classes.

```javascript
// Bad: function f1(x) {}

// Good: function fetchUserData(user) {}
```

# Variables

- Avoid global variables in the global namespace by using `let` and `const` keywords.

```javascript
// Bad
someClass = new SomeClass();

// Good
const someClass = new SomeClass();
```

# Properties

- Prefer dot notation over bracket notation.

```javascript
const hash = {
  key1: 1,
  key2: 2,
};

// Bad
const value1 = hash['key1'];

// Good
const value1 = hash.key1;
```

# Iterators

- Avoid for loops, instead, use built-in high-order functions.

To iterate over arrays: `.map()`, `.filter()`, `.includes()`, `.find()`, `.findIndex`, `.reduce()`, `.every()`, `.some()`.  
To iterate over objects: `Object.keys()`, `Object.values()`, `Object.entries()`.

```javascript
const numbersArray = [1, 2, 3, 4, 5];

// Bad
let sum = 0;
for (let item of numbersArray) {
  sum += item;
}

// Good
const sum = numbersArray.reduce((sum, currentItem) => sum + currentItem, 0);

// Bad
const increasedByOne = [];
for (let i = 0; i < numbersArray.length; i++) {
  increasedByOne.push(numbersArray[i] + 1);
}

// Good
const increasedByOne = numbersArray.map((num) => num + 1);
```

# Generators

```javascript

// Good
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
- Use abstraction to hide complex implementation details from the user.

# Follow the DRY (Don't Repeat Yourself) Principle

- Avoid code duplication by abstracting common logic into reusable functions, components or classes. 

# Follow the Single Responsibility Principle

- Ensure that each function or class has a single, well-defined purpose. This makes your code easier to understand and maintain.

```javascript
// Bad Practice: a function that processes data and displays it.

// Good Practice: one function for processing the data and another for displaying it.
```

# Modularize Code

- Break your code into smaller, reusable modules or functions. Each module should be responsible for a specific part of the functionality. For example, separate the user interface code from the backend logic.

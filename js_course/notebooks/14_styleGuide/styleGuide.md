<div align='center'>
<h1> Style Guide </h1>
</div>

# About

A style guide is a reflection of a company's culture. Whether you are implementing for loops or high-level functions, if your code uses the right data structures, has optimal time complexity, and is understandable to your team, embrace it as your style.

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

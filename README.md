<!-- Badges: -->

[![Node.js](https://img.shields.io/badge/Node.js-v21.6.2-informational)](https://nodejs.org/en)
[![Contributions](https://img.shields.io/badge/contributions-welcome-orange?style=flat-square)](https://github.com/camponogaraviera/javascript/pulls)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/camponogaraviera/javascript/graphs/commit-activity)

<!-- Title: -->
<div align='center'>
<h1> Fundamentals of Modern JavaScript (ES6+) </h1>
</div>

# About

This repository introduces JavaScript from the ground up, spanning classes (ES6), async/await (ES8), top-level await (ES13), class field declarations outside the constructor (ES13), private methods and fields (ES13), and others.

# Table of Contents

## 1. Intro

### 1.1 [About Javascript](js_course/notebooks/00_intro/about-javascript.md)

- Intro
  - Interpreter vs Compiler vs Transpiler vs JIT Compiler
- JavaScript Internals
  - Single Threaded
  - JavaScript Runtime Environment (of the Browser)
    - Web API
    - JS Engine
      - Pipeline
      - Call Stack
      - Memory Heap
    - Callback Queue
    - Event Loop
  - Garbage Collection
  - Memory Leaks
  - WebAssembly

### 1.2 [Javascript & TypeScript](js_course/notebooks/00_intro/javascript-typeScript.md)

### 1.3 [NodeJS & Deno](js_course/notebooks/00_intro/nodejs-deno.md)

- Why NodeJS
- NodeJS Runtime Environment
  - Node API
  - V8 Engine
    - Pipeline
    - Call Stack
    - Memory Heap
  - Event Queue
  - Event Loop
    - Timer Phase
    - Pending Callbacks Phase
    - Idle Phase
    - Poll Phase
    - Check Phase
    - Close Callbacks Phase
- Why Deno
  - Deno Features

### 1.4 [Naming Convention](js_course/notebooks/00_intro/naming-convention.md)

## 2. Data Types And Keywords

- [1-primitive-types.js](js_course/notebooks/01_dataTypesAndKeywords/1-primitive-types.js)
- [2-reference-types.js](js_course/notebooks/01_dataTypesAndKeywords/2-reference-types.js)
- [3-keyword-variables.js](js_course/notebooks/01_dataTypesAndKeywords/3-keyword-variables.js)
- [4-dynamic-typing.js](js_course/notebooks/01_dataTypesAndKeywords/4-dynamic-typing.js)

## 3. Collections

### 3.1 Arrays

- [1-intro-and-big-O.md](js_course/notebooks/02_collections/arrays/1-intro-and-big-O.md)
- [2-built-in-methods.js](js_course/notebooks/02_collections/arrays/2-built-in-methods.js)
- [3-array-destructuring.js](js_course/notebooks/02_collections/arrays/3-array-destructuring.js)
- Built-in high-order functions:
  - [4-map.js](js_course/notebooks/02_collections/arrays/4-map.js)
  - [5-filter.js](js_course/notebooks/02_collections/arrays/5-filter.js)
  - [6-includes.js](js_course/notebooks/02_collections/arrays/6-includes.js)
  - [7-find.js](js_course/notebooks/02_collections/arrays/7-find.js)
  - [8-find-index.js](js_course/notebooks/02_collections/arrays/8-find-index.js)
  - [9-reduce.js](js_course/notebooks/02_collections/arrays/9-reduce.js)
  - [10-every.js](js_course/notebooks/02_collections/arrays/10-every.js)
  - [11-some.js](js_course/notebooks/02_collections/arrays/11-some.js)

### 3.2 Hash Tables

- [1-intro-and-big-O.md](js_course/notebooks/02_collections/hashTables/1-intro-and-big-O.md)
- [2-built-in-methods.js](js_course/notebooks/02_collections/hashTables/2-built-in-methods.js)
- [3-obj-literal.js](js_course/notebooks/02_collections/hashTables/3-obj-literal.js)
- [4-object-destructuring.js](js_course/notebooks/02_collections/hashTables/4-object-destructuring.js)

### 3.3 Map

- [1-map.js](js_course/notebooks/02_collections/1-map.js)

### 3.4 Set

- [2-set.js](js_course/notebooks/02_collections/2-set.js)

## 4. Operators

- [1-spread.js](js_course/notebooks/03_operators/1-spread.js)
- [2-rest.js](js_course/notebooks/03_operators/2-rest.js)
- [3-ternary.js](js_course/notebooks/03_operators/3-ternary.js)

## 5. Conditions

- [1-if-else.js](js_course/notebooks/04_conditions/1-if-else.js)
- [2-and.js](js_course/notebooks/04_conditions/2-and.js)
- [3-or.js](js_course/notebooks/04_conditions/3-or.js)
- [4-not.js](js_course/notebooks/04_conditions/4-not.js)
- [5-switch-case.js](js_course/notebooks/04_conditions/5-switch-case.js)

## 6. Loops

- [loops.js](js_course/notebooks/05_loops/loops.js)

## 7. Functions

- [1-factory-function.js](js_course/notebooks/06_functions/1-factory-function.js)
- [2-getters-setters.js](js_course/notebooks/06_functions/2-getters-setters.js)
- [3-function-literal.js](js_course/notebooks/06_functions/3-function-literal.js)
- [4-arrow-function.js](js_course/notebooks/06_functions/4-arrow-function.js)
- [5-closure.js](js_course/notebooks/06_functions/5-closure.js)
- [6-constructor-function.js](js_course/notebooks/06_functions/6-constructor-function.js)

## 8. Classes

- [classes.js](js_course/notebooks/07_classes/classes.js)

## 9. Importing/Exporting in CJS & ES6

- [1-module.cjs](js_course/notebooks/08_impExp/1-module.cjs)
- [2-exporting.cjs](js_course/notebooks/08_impExp/2-exporting.cjs)
- [3-importing.cjs](js_course/notebooks/08_impExp/3-importing.cjs)
- [4-exporting-ES6.js](js_course/notebooks/08_impExp/4-exporting-ES6.js)
- [5-importing-ES6.js](js_course/notebooks/08_impExp/5-importing-ES6.js)

## 10. Regex

- [regular-expressions.js](js_course/notebooks/09_regex/regular-expressions.js)

## 11. Asynchronous Operations

- [1-about.js](js_course/notebooks/10_asynchronous/1-about.js)
- [2-callback.js](js_course/notebooks/10_asynchronous/2-callback.js)
- [3-callback-hell.js](js_course/notebooks/10_asynchronous/3-callback-hell.js)
- [4-promise.js](js_course/notebooks/10_asynchronous/4-promise.js)
- [5-async-await.js](js_course/notebooks/10_asynchronous/5-async-await.js)

## 12. NodeJS Modules

- [1-path.js](js_course/notebooks/11_nodejsModules/1-path.js)
- [2-os.js](js_course/notebooks/11_nodejsModules/2-os.js)
- [3-fs.js](js_course/notebooks/11_nodejsModules/3-fs.js)

## 13. Object-oriented Programming (OOP)

- [1-intro.js](js_course/notebooks/12_oop/1-intro.js)
- [2-encapsulation.js](js_course/notebooks/12_oop/2-encapsulation.js)
- [3-abstraction.js](js_course/notebooks/12_oop/3-abstraction.js)
- [4-inheritance.js](js_course/notebooks/12_oop/4-inheritance.js)
- [5-polymorphism.js](js_course/notebooks/12_oop/5-polymorphism.js)

## 14. Engine Optimization

- [hidden-classes.js](js_course/notebooks/13_optimization/hidden-classes.js)
- [inline-caching.js](js_course/notebooks/13_optimization/inline-caching.js)

## 15. Benchmarking For Loops vs High-order Functions

- [benchmarking.js](js_course/notebooks/14_benchmark/benchmarking.js)

## 16. Tests

- [test-pyramid.md](js_course/notebooks/15_tests/test-pyramid.md)
- [script.js](js_course/notebooks/15_tests/script.js)
- [script.test.js](js_course/notebooks/15_tests/script.test.js)

## 17. Style Guide

- [style-guide.md](js_course/notebooks/16_styleGuide/style-guide.md)

 <!-- ################################################################ -->

# Quick run

1. [Install node](https://github.com/camponogaraviera/nvm-npm?tab=readme-ov-file#node-version-manager-nvm).

2. Select node version:

```bash
nvm use 21.6.2
```

3. Install all dependencies listed in the `js_course/package.json` file:

```bash
cd js_course && yarn
```

4. Run a test:

```bash
yarn test
```

5. Lint:

```bash
yarn eslint .
```

or

```bash
yarn lint
```

 <!-- ################################################################ -->

# Notes

1. The `.cjs` extension is used to execute files in CommonJS module syntax.
2. Setting key-value `"type": "module"` in `package.json` enables ECMAScript (ESM) syntax (e.g., import/export syntax) in `.js` files.
3. Babel (`.babelrc`) can also be used to transpile modern JavaScript (ES6+) code into an older JavaScript version (e.g., ES5) to ensure compatibility with environments (browsers, older Node.js versions) that do not support certain modern JavaScript syntax (e.g., `let`, `const`, `arrow functions`, `async/await`, `import/export`). Polyfills for missing built-in features (`Promise`, `fetch`, `Map`, `Set`, etc.) can be added by configuring the `@babel/preset-env` preset in the `.babelrc` file with `core-js` and the `useBuiltIns` option.
4. When using `yarn.lock`, there is no need to keep the `package-lock.json`.
5. Do not `.gitignore` the `yarn.lock` file.

# References

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript

[2] https://github.com/airbnb/javascript

[3] https://deno.com/

[4] https://nodejs.org/en

[5] https://eslint.org/docs/latest

[6] https://prettier.io

[7] https://jestjs.io/docs/getting-started

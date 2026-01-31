<!-- Badges: -->

[![Node.js](<https://img.shields.io/badge/Node.js_(LTS)-v24.13.0-informational>)](https://nodejs.org/en)
[![YARN](https://img.shields.io/badge/YARN-4.12.0-informational)](https://yarnpkg.com/)
[![Contributions](https://img.shields.io/badge/contributions-welcome-orange?style=flat-square)](https://github.com/camponogaraviera/javascript/pulls)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/camponogaraviera/javascript/graphs/commit-activity)

<!-- Title: -->
<div align='center'>
  <h1> Modern JavaScript (ES6+) </h1>
  <h2> Fundamentals to Advanced Concepts </h2>
</div>

# About

The goal of this course is to provide a comprehensive introduction to modern JavaScript (ES6+), covering fundamentals and advanced concepts.

Modern JS features include: import/export keywords (ES6), classes (ES6), async/await syntactic sugars (ES8), rest/spread operators for objects (ES9), top-level await (ES13), private methods (ES13), and class field declarations outside the constructor (ES13).

# Table of Contents

- [1. Intro](#intro)
  - 1.1 Javascript Vs. TypeScript
  - 1.2 Naming Convention
- [2. Core JavaScript Fundamentals](#core)
  - 2.1 [Data Types And Keywords](#dk)
    - primitive-types.js
    - reference-types.js
    - keyword-variables.js
    - dynamic-typing.js
  - 2.2 [Operators](#operators)
    - comparison.js
    - ternary.js
    - modulo.js
    - spread.js
    - rest.js
  - 2.3 Control Flow
    - 2.3.1 [Conditions](#conditions)
      - if-else.js
      - not.js
      - and-nand.js
      - or-nor.js
      - xor-xnor.js
      - switch-case.js
    - 2.3.2 [Loops](#loops)
      - for-loops.js
      - while-loop.js
      - do-while-loop.js
      - break-statement.js
      - continue-statement.js
  - 2.4 [Functions & Scope](#functions)
    - factory-function.js
    - function-literal.js
    - arrow-function.js
    - closure.js
    - getters-setters.js
    - regular-expressions.js
    - constructor-function.js
  - 2.5 [Collections](#collections)
    - 2.5.1 [Array](#array)
      - Intro and Big O
      - built-in-methods.js
      - array-destructuring.js
      - Built-in High-order Functions
        - map.js
        - filter.js
        - includes.js
        - find.js
        - find-index.js
        - reduce.js
        - every.js
        - some.js
    - 2.5.2 [Plain Object](#plain_object)
      - built-in-methods.js
      - obj-literal.js
      - object-destructuring.js
    - 2.5.3 [Map](#map)
      - map.js
    - 2.5.4 [Set](#set)
      - set.js
- [3. Classes](#classes)
- [4. Object-oriented Programming (OOP)](#oop)
  - intro.js
  - encapsulation.js
  - abstraction.js
  - inheritance.js
  - polymorphism.js
- [5. Asynchronous Operations](#async)
  - about.js
  - callback.js
  - callback-hell.js
  - promise.js
  - async-await.js
- [6. Importing/Exporting (CJS & ES6)](#imp_exp)
  - module.cjs
  - exporting.cjs
  - importing.cjs
  - exporting-ES6.js
  - importing-ES6.js
- [7. Advanced Concepts](#advanced)
  - 7.1 JavaScript Internals
    - 7.1.1 Runtime Environment
    - 7.1.2 Memory Management
    - 7.1.3 WebAssembly
  - 7.2 Concurrency
    - 7.2.1 Multithreading
    - 7.2.2 Multiprocessing
    - 7.2.3 Asynchronous Programming
  - 7.3 Node.js Essentials
    - 7.3.1 Node.js vs. Deno
    - 7.3.2 Core Modules
      - path.js
      - os.js
      - fs.js
      - Worker Threads
  - 7.4 Engine Optimization
    - hidden-classes.js
    - inline-caching.js
  - 7.5 Benchmarking For Loops vs. High-order Functions
    - benchmarking.js
- [8. Testing](#testing)
  - 8.1 Test Pyramid
  - script.js
  - script.test.js
- [9. Style Guide](#style)
- [10. Install Dependencies](#install)
- [11. Linting](#lint)
- [12. Security Audit](#audit)
- [13. Run Tests](#run_tests)
- [14. Run All Modules](#run_modules)
- [Notes](#notes)
- [References](#ref)

<!-- #region 1. Intro -->
<details>
  <summary><h1 id="intro"> 1. Intro </h1></summary>

- 1.1 [Javascript Vs. TypeScript](js-course/notebooks/intro/javascript-typescript.md)

- 1.2 [Naming Convention](js-course/notebooks/intro/naming-convention.md)

</details>
<!-- #endregion -->

---

<!-- #region 2. Core JavaScript Fundamentals -->
<details open>
  <summary><h1 id="core"> 2. Core JavaScript Fundamentals </h1></summary>

  <details>
    <summary id="dk"><h2> 2.1 Data Types And Keywords </h2></summary>
  
  - 2.1.1 [primitive-types.js](js-course/notebooks/core-js-fundamentals/data-types-and-keywords/primitive-types.js)
  - 2.1.2 [reference-types.js](js-course/notebooks/core-js-fundamentals/data-types-and-keywords/reference-types.js)
  - 2.1.3 [keyword-variables.js](js-course/notebooks/core-js-fundamentals/data-types-and-keywords/keyword-variables.js)
  - 2.1.4 [dynamic-typing.js](js-course/notebooks/core-js-fundamentals/data-types-and-keywords/dynamic-typing.js)
  
  </details>
  <!-- #endregion -->

  <details>
    <summary id="operators"><h2> 2.2 Operators </h2></summary>
  
  - 2.2.1 [comparison.js](js-course/notebooks/core-js-fundamentals/operators/comparison.js)
  - 2.2.2 [ternary.js](js-course/notebooks/core-js-fundamentals/operators/ternary.js)
  - 2.2.3 [modulo.js](js-course/notebooks/core-js-fundamentals/operators/modulo.js)
  - 2.2.4 [spread.js](js-course/notebooks/core-js-fundamentals/operators/spread.js)
  - 2.2.5 [rest.js](js-course/notebooks/core-js-fundamentals/operators/rest.js)
  
  </details>
  <!-- #endregion -->

  <details open>
    <summary><h2 id="operators"> 2.3 Control Flow </h2></summary>

  <details>
    <summary id="conditions"><h3> 2.3.1 Conditions </h3></summary>
  
  - 2.3.1.1 [if-else.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/if-else.js)
  - 2.3.1.2 [not.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/not.js)
  - 2.3.1.3 [and-nand.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/and-nand.js)
  - 2.3.1.4 [or-nor.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/or-nor.js)
  - 2.3.1.5 [xor-xnor.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/xor-xnor.js)
  - 2.3.1.6 [switch-case.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/switch-case.js)

  </details>
  <!-- #endregion -->

  <details>
    <summary id="loops"><h3> 2.3.2 Loops </h3></summary>
    
- 2.3.2.1 [for-loops.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/for-loops.js)
- 2.3.2.2 [while-loop.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/while-loop.js)
- 2.3.2.3 [do-while-loop.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/do-while-loop.js)
- 2.3.2.4 [break-statement.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/break-statement.js)
- 2.3.2.5 [continue-statement.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/continue-statement.js)

  </details>
  <!-- #endregion -->

  </details>
  <!-- #endregion -->
  
  <details>
    <summary id="functions"><h2> 2.4 Functions & Scope </h2></summary>
  
- [factory-function.js](js-course/notebooks/core-js-fundamentals/functions-and-scope/factory-function.js)
- [function-literal.js](js-course/notebooks/core-js-fundamentals/functions-and-scope/function-literal.js)
- [arrow-function.js](js-course/notebooks/core-js-fundamentals/functions-and-scope/arrow-function.js)
- [closure.js](js-course/notebooks/core-js-fundamentals/functions-and-scope/closure.js)
- [getters-setters.js](js-course/notebooks/core-js-fundamentals/functions-and-scope/getters-setters.js)
- [regular-expressions.js](js-course/notebooks/core-js-fundamentals/functions-and-scope/regular-expressions.js)
- [constructor-function.js](js-course/notebooks/core-js-fundamentals/functions-and-scope/constructor-function.js)

  </details>
  <!-- #endregion -->

  <details>
    <summary id="collections"><h2> 2.5 Collections </h2></summary>
    
  <h3 id="array">2.5.1 Array</h3>
  
  - [Intro and Big O](js-course/notebooks/core-js-fundamentals/collections/array/intro-and-big-o.md)
  - [built-in-methods.js](js-course/notebooks/core-js-fundamentals/collections/array/built-in-methods.js)
  - [array-destructuring.js](js-course/notebooks/core-js-fundamentals/collections/array/array-destructuring.js)
  - Built-in high-order functions:
    - [map.js](js-course/notebooks/core-js-fundamentals/collections/array/map.js)
    - [filter.js](js-course/notebooks/core-js-fundamentals/collections/array/filter.js)
    - [includes.js](js-course/notebooks/core-js-fundamentals/collections/array/includes.js)
    - [find.js](js-course/notebooks/core-js-fundamentals/collections/array/find.js)
    - [find-index.js](js-course/notebooks/core-js-fundamentals/collections/array/find-index.js)
    - [reduce.js](js-course/notebooks/core-js-fundamentals/collections/array/reduce.js)
    - [every.js](js-course/notebooks/core-js-fundamentals/collections/array/every.js)
    - [some.js](js-course/notebooks/core-js-fundamentals/collections/array/some.js)
  
  <h3 id="plain_object">2.5.2 Plain Object</h3>
  
  - [built-in-methods.js](js-course/notebooks/core-js-fundamentals/collections/plain-object/built-in-methods.js)
  - [obj-literal.js](js-course/notebooks/core-js-fundamentals/collections/plain-object/obj-literal.js)
  - [object-destructuring.js](js-course/notebooks/core-js-fundamentals/collections/plain-object/object-destructuring.js)
  
  <h3 id="map">2.5.3 Map</h3>
  
  - [map.js](js-course/notebooks/core-js-fundamentals/collections/map.js)
  
  <h3 id="set">2.5.4 Set</h3>
  
  - [set.js](js-course/notebooks/core-js-fundamentals/collections/set.js)

  </details>
  <!-- #endregion -->
  
</details>
<!-- #endregion -->

---

<!-- #region 3. Classes -->
<details>
  <summary><h1 id="classes"> 3. Classes </h1></summary>

- [classes.js](js-course/notebooks/classes/classes.js)

</details>
<!-- #endregion -->

---

<!-- #region 4. Object-oriented Programming (OOP) -->
<details>
  <summary><h1 id="oop"> 4. Object-oriented Programming (OOP) </h1></summary>

- 4.1 [intro.js](js-course/notebooks/oop/intro.js)
- 4.2 [encapsulation.js](js-course/notebooks/oop/encapsulation.js)
- 4.3 [abstraction.js](js-course/notebooks/oop/abstraction.js)
- 4.4 [inheritance.js](js-course/notebooks/oop/inheritance.js)
- 4.5 [polymorphism.js](js-course/notebooks/oop/polymorphism.js)

</details>
<!-- #endregion -->

---

<!-- #region 5. Asynchronous Operations -->
<details>
  <summary><h1 id="async"> 5. Asynchronous Operations </h1></summary>

- 5.1 [about.js](js-course/notebooks/asynchronous/about.js)
- 5.2 [callback.js](js-course/notebooks/asynchronous/callback.js)
- 5.3 [callback-hell.js](js-course/notebooks/asynchronous/callback-hell.js)
- 5.4 [promise.js](js-course/notebooks/asynchronous/promise.js)
- 5.5 [async-await.js](js-course/notebooks/asynchronous/async-await.js)

</details>
<!-- #endregion -->

---

<!-- #region 6. Importing/Exporting (CJS & ES6) -->
<details>
  <summary><h1 id="imp_exp"> 6. Importing/Exporting (CJS & ES6) </h1></summary>

- 6.1 [module.cjs](js-course/notebooks/imp-exp/module.cjs)
- 6.2 [exporting.cjs](js-course/notebooks/imp-exp/exporting.cjs)
- 6.3 [importing.cjs](js-course/notebooks/imp-exp/importing.cjs)
- 6.4 [exporting-ES6.js](js-course/notebooks/imp-exp/exporting-ES6.js)
- 6.5 [importing-ES6.js](js-course/notebooks/imp-exp/importing-ES6.js)

</details>
<!-- #endregion -->

---

<!-- #region 7. Advanced Concepts -->
<details>
  <summary><h1 id="advanced"> 7. Advanced Concepts </h1></summary>

## 7.1 JavaScript Internals

- 7.1.1 [Runtime Environment](js-course/notebooks/advanced/js-internals/runtime-env.md): Web API, JS Engine (pipeline, call stack, memory heap), Callback Queue, and Event Loop.

- 7.1.2 [Memory Management](js-course/notebooks/advanced/js-internals/memory-management.md): Garbage Collection and Memory Leaks.

- 7.1.3 [WebAssembly](js-course/notebooks/advanced/js-internals/web-assembly.md)

## 7.2 Concurrency

- [Concurrency](js-course/notebooks/advanced/concurrency/concurrency.md)

## 7.3 Node.js Essentials

### 7.3.1 [Node.js vs. Deno](js-course/notebooks/advanced/node-essentials/runtime-env/nodejs-vs-deno.md)

### 7.3.2 Core Modules

- [path.js](js-course/notebooks/advanced/node-essentials/core-modules/path.js)
- [os.js](js-course/notebooks/advanced/node-essentials/core-modules/os.js)
- [fs.js](js-course/notebooks/advanced/node-essentials/core-modules/fs.js)
- [Worker Threads](js-course/notebooks/advanced/node-essentials/core-modules/worker-threads.md)

## 7.4 Engine Optimization

- 7.4.1 [hidden-classes.js](js-course/notebooks/advanced/engine-optimization/hidden-classes.js)
- 7.4.2 [inline-caching.js](js-course/notebooks/advanced/engine-optimization/inline-caching.js)

## 7.5 Benchmarking For Loops vs. High-order Functions

- [benchmarking.js](js-course/notebooks/advanced/benchmarking/benchmarking.js)

</details>
<!-- #endregion -->

---

<!-- #region 8. Testing -->
<details>
  <summary><h1 id="testing"> 8. Testing </h1></summary>

- [Test Pyramid](js-course/notebooks/testing/test-pyramid.md)
- [script.js](js-course/notebooks/testing/script.js)
- [script.test.js](js-course/notebooks/testing/script.test.js)

</details>
<!-- #endregion -->

---

<!-- #region 9. Style Guide -->
<details>
  <summary><h1 id="style"> 9. Style Guide </h1></summary>

- [Style Guide](js-course/notebooks/style-guide/style-guide.md)

</details>
<!-- #endregion -->

---

<!-- #region 10. Install Dependencies -->
<details>
  <summary><h1 id="install"> 10. Install Dependencies </h1></summary>

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM):

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

2. Install the latest LTS release version of Node.js:

```bash
nvm install --lts && nvm use --lts && node -v
```

NPM is automatically updated to the version bundled with Node.js.

3. Update Yarn to the latest stable version (enter the project folder to avoid creating a new package.json file):

```bash
cd js-course
```

```bash
corepack enable && yarn set version stable && yarn -v
```

4. Install package dependencies listed in the `js-course/package.json` file:

```bash
yarn
```

</details>
<!-- #endregion -->

---

<!-- #region 11. Linting -->
<details>
  <summary><h1 id="lint"> 11. Linting </h1></summary>

Lint to check for code quality and style consistency:

```bash
cd js-course
```

```bash
yarn lint
```

or

```bash
yarn eslint .
```

</details>
<!-- #endregion -->

---

<!-- #region 12. Security Audit -->
<details>
  <summary><h1 id="audit"> 12. Security Audit </h1></summary>

```bash
yarn npm audit
```

</details>
<!-- #endregion -->

---

<!-- #region 13. Run Tests -->
<details>
  <summary><h1 id="run_tests"> 13. Run Tests </h1></summary>

```bash
cd js-course
```

```bash
yarn test
```

</details>
<!-- #endregion -->

---

<!-- #region 14. Run All Modules -->
<details>
  <summary><h1 id="run_modules"> 14. Run All Modules </h1></summary>

```bash
cd js-course
```

```bash
node notebooks/run-modules/run-modules.js
```

</details>
<!-- #endregion -->

---

<!-- #region Notes -->
<details>
  <summary><h1 id="notes"> Notes </h1></summary>

1. It is not a best practice to mix different package managers. Use either `yarn` (recommended) or `npm` to install packages during the development cycle.
2. When using `yarn.lock`, there is no need to keep the `package-lock.json`.
3. Do not `git ignore` the `yarn.lock` file and the `.yarn/` folder (from Yarn V2+ a.k.a Berry), as they ensure that the exact versions of dependencies are installed, even if the versions in `package.json` are defined using version ranges (such as ^ or ~).
4. The `.cjs` extension executes files in CommonJS module syntax.
5. Setting key-value `"type": "module"` in `package.json` enables ECMAScript (ESM) syntax (e.g., import/export syntax) in `.js` files.

</details>
<!-- #endregion -->

---

<!-- #region References -->
<details>
  <summary><h1 id="ref"> References </h1></summary>

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript

[2] https://github.com/airbnb/javascript

[3] https://deno.com/

[4] https://nodejs.org/en

[5] https://eslint.org/docs/latest

[6] https://prettier.io

[7] https://jestjs.io/docs/getting-started

[8] https://github.com/tc39

</details>
<!-- #endregion -->

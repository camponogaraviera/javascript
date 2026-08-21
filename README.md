<!-- Badges: -->

[![Node.js](<https://img.shields.io/badge/Node.js_(LTS)-v24.19.0-informational>)](https://nodejs.org/en)
[![YARN](https://img.shields.io/badge/YARN-4.18.0-informational)](https://yarnpkg.com/)
[![Contributions](https://img.shields.io/badge/contributions-welcome-orange?style=flat-square)](https://github.com/camponogaraviera/javascript/pulls)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/camponogaraviera/javascript/graphs/commit-activity)

<!-- Title: -->
<div align='center'>
  <h1> Modern JavaScript (ES6+) </h1>
  <h2> Fundamentals to Advanced Concepts </h2>
</div>

# About

This course provides a comprehensive introduction to modern JavaScript (ES6+), covering fundamentals and advanced concepts.

Modern JS features include: import/export keywords (ES6), classes (ES6), async/await syntactic sugars (ES8), rest/spread operators for objects (ES9), top-level await (ES13), private methods (ES13), and class field declarations outside the constructor (ES13).

# Table of Contents

- [1. Environment Setup](#setup)
  - Install Node Version Manager (NVM)
  - Install Node.js
  - Install Yarn
  - Install Dependencies
- [2. Intro](#intro)
  - 2.1 JavaScript vs. TypeScript
  - 2.2 Naming Convention
- [3. Core JavaScript Fundamentals](#core)
  - 3.1 [Data Types And Keywords](#dk)
    - primitive-types.js
    - reference-types.js
    - keyword-variables.js
    - dynamic-typing.js
  - 3.2 [Operators](#operators)
    - comparison.js
    - ternary.js
    - modulo.js
    - spread.js
    - rest.js
  - 3.3 Control Flow
    - 3.3.1 [Conditions](#conditions)
      - if-else.js
      - not.js
      - and-nand.js
      - or-nor.js
      - xor-xnor.js
      - switch-case.js
    - 3.3.2 [Loops](#loops)
      - for-loops.js
      - while-loop.js
      - do-while-loop.js
      - break-statement.js
      - continue-statement.js
  - 3.4 [Functions & Scope](#functions)
    - factory-function.js
    - function-literal.js
    - arrow-function.js
    - closure.js
    - getters-setters.js
    - regular-expressions.js
    - constructor-function.js
  - 3.5 [Collections](#collections)
    - 3.5.1 [Array](#array)
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
    - 3.5.2 [Plain Object](#plain_object)
      - built-in-methods.js
      - obj-literal.js
      - object-destructuring.js
    - 3.5.3 [Map](#map)
      - map.js
    - 3.5.4 [Set](#set)
      - set.js
- [4. Classes](#classes)
- [5. Object-oriented Programming (OOP)](#oop)
  - intro.js
  - encapsulation.js
  - abstraction.js
  - inheritance.js
  - polymorphism.js
- [6. Asynchronous Operations](#async)
  - about.js
  - callback.js
  - callback-hell.js
  - promise.js
  - async-await.js
- [7. Importing/Exporting (CJS & ES6)](#imp_exp)
  - module.cjs
  - exporting.cjs
  - importing.cjs
  - exporting-ES6.js
  - importing-ES6.js
- [8. Advanced Concepts](#advanced)
  - 8.1 JavaScript Internals
    - 8.1.1 Runtime Environment
    - 8.1.2 Memory Management
    - 8.1.3 WebAssembly
  - 8.2 Concurrency
    - 8.2.1 Multithreading
    - 8.2.2 Multiprocessing
    - 8.2.3 Asynchronous Programming
  - 8.3 Node.js Essentials
    - 8.3.1 Node.js vs. Deno
    - 8.3.2 Core Modules
      - path.js
      - os.js
      - fs.js
      - Worker Threads
  - 8.4 Engine Optimization
    - hidden-classes.js
    - inline-caching.js
  - 8.5 Benchmarking For Loops vs. Higher-order Functions
    - benchmarking.js
- [9. Style Guide](#style)
- [10. Testing](#testing)
  - Test Pyramid
  - script.js
  - script.test.js
- [11. Run Tests](#run_tests)
- [12. Linting](#lint)
- [13. Run All Modules](#run_modules)
- [References](#ref)

<!-- #region 1. Environment Setup -->
<details>
  <summary><h1 id="setup"> 1. Environment Setup </h1></summary>

## Install [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Check installation:

```bash
command -v nvm
```

## Install [Node.js](https://nodejs.org/en)

- Install and use the latest LTS release version of Node.js (recommended):

```bash
nvm install --lts && nvm use --lts && node -v
```

## Install Yarn

Yarn is suitable for handling installation and versioning of package dependencies for React-based applications.

- Enter the project folder:

```bash
cd js-course
```

1. Install Corepack

```bash
npm install -g corepack
```

2. Install [modern Yarn](https://yarnpkg.com/getting-started/install) V2+ with Corepack (shipped by default with Node.js):

```bash
corepack enable && yarn set version stable && yarn install
```

3. Check installed version:

```bash
yarn -v
```

## Install Dependencies

- Install package dependencies listed in the `package.json` file:

```bash
yarn
```

</details>
<!-- #endregion -->

---

<!-- #region 2. Intro -->
<details>
  <summary><h1 id="intro"> 2. Intro </h1></summary>

- [Javascript Vs. TypeScript](js-course/notebooks/intro/javascript-typescript.md)

- [Naming Convention](js-course/notebooks/intro/naming-convention.md)

</details>
<!-- #endregion -->

---

<!-- #region 3. Core JavaScript Fundamentals -->
<details>
  <summary><h1 id="core"> 3. Core JavaScript Fundamentals </h1></summary>

  <details>
    <summary id="dk"><h2> 3.1 Data Types And Keywords </h2></summary>
  
  - [primitive-types.js](js-course/notebooks/core-js-fundamentals/data-types-and-keywords/primitive-types.js)
  - [reference-types.js](js-course/notebooks/core-js-fundamentals/data-types-and-keywords/reference-types.js)
  - [keyword-variables.js](js-course/notebooks/core-js-fundamentals/data-types-and-keywords/keyword-variables.js)
  - [dynamic-typing.js](js-course/notebooks/core-js-fundamentals/data-types-and-keywords/dynamic-typing.js)
  
  </details>
  <!-- #endregion -->

  <details>
    <summary id="operators"><h2> 3.2 Operators </h2></summary>
  
  - [comparison.js](js-course/notebooks/core-js-fundamentals/operators/comparison.js)
  - [ternary.js](js-course/notebooks/core-js-fundamentals/operators/ternary.js)
  - [modulo.js](js-course/notebooks/core-js-fundamentals/operators/modulo.js)
  - [spread.js](js-course/notebooks/core-js-fundamentals/operators/spread.js)
  - [rest.js](js-course/notebooks/core-js-fundamentals/operators/rest.js)
  
  </details>
  <!-- #endregion -->

  <details>
    <summary><h2 id="operators"> 3.3 Control Flow </h2></summary>

  <details>
    <summary id="conditions"><h3> 3.3.1 Conditions </h3></summary>
  
  - [if-else.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/if-else.js)
  - [not.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/not.js)
  - [and-nand.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/and-nand.js)
  - [or-nor.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/or-nor.js)
  - [xor-xnor.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/xor-xnor.js)
  - [switch-case.js](js-course/notebooks/core-js-fundamentals/control-flow/conditions/switch-case.js)

  </details>
  <!-- #endregion -->

  <details>
    <summary id="loops"><h3> 3.3.2 Loops </h3></summary>
    
- [for-loops.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/for-loops.js)
- [while-loop.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/while-loop.js)
- [do-while-loop.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/do-while-loop.js)
- [break-statement.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/break-statement.js)
- [continue-statement.js](js-course/notebooks/core-js-fundamentals/control-flow/loops/continue-statement.js)

  </details>
  <!-- #endregion -->

  </details>
  <!-- #endregion -->
  
  <details>
    <summary id="functions"><h2> 3.4 Functions & Scope </h2></summary>
  
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
    <summary id="collections"><h2> 3.5 Collections </h2></summary>
    
  <h3 id="array">3.5.1 Array</h3>
  
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
  
  <h3 id="plain_object">3.5.2 Plain Object</h3>
  
  - [built-in-methods.js](js-course/notebooks/core-js-fundamentals/collections/plain-object/built-in-methods.js)
  - [obj-literal.js](js-course/notebooks/core-js-fundamentals/collections/plain-object/obj-literal.js)
  - [object-destructuring.js](js-course/notebooks/core-js-fundamentals/collections/plain-object/object-destructuring.js)
  
  <h3 id="map">3.5.3 Map</h3>
  
  - [map.js](js-course/notebooks/core-js-fundamentals/collections/map.js)
  
  <h3 id="set">3.5.4 Set</h3>
  
  - [set.js](js-course/notebooks/core-js-fundamentals/collections/set.js)

  </details>
  <!-- #endregion -->
  
</details>
<!-- #endregion -->

---

<!-- #region 4. Classes -->
<details>
  <summary><h1 id="classes"> 4. Classes </h1></summary>

- [classes.js](js-course/notebooks/classes/classes.js)

</details>
<!-- #endregion -->

---

<!-- #region 5. Object-oriented Programming (OOP) -->
<details>
  <summary><h1 id="oop"> 5. Object-oriented Programming (OOP) </h1></summary>

- [intro.js](js-course/notebooks/oop/intro.js)
- [encapsulation.js](js-course/notebooks/oop/encapsulation.js)
- [abstraction.js](js-course/notebooks/oop/abstraction.js)
- [inheritance.js](js-course/notebooks/oop/inheritance.js)
- [polymorphism.js](js-course/notebooks/oop/polymorphism.js)

</details>
<!-- #endregion -->

---

<!-- #region 6. Asynchronous Operations -->
<details>
  <summary><h1 id="async"> 6. Asynchronous Operations </h1></summary>

- [about.js](js-course/notebooks/asynchronous/about.js)
- [callback.js](js-course/notebooks/asynchronous/callback.js)
- [callback-hell.js](js-course/notebooks/asynchronous/callback-hell.js)
- [promise.js](js-course/notebooks/asynchronous/promise.js)
- [async-await.js](js-course/notebooks/asynchronous/async-await.js)

</details>
<!-- #endregion -->

---

<!-- #region 7. Importing/Exporting (CJS & ES6) -->
<details>
  <summary><h1 id="imp_exp"> 7. Importing/Exporting (CJS & ES6) </h1></summary>

- [module.cjs](js-course/notebooks/imp-exp/module.cjs)
- [exporting.cjs](js-course/notebooks/imp-exp/exporting.cjs)
- [importing.cjs](js-course/notebooks/imp-exp/importing.cjs)
- [exporting-ES6.js](js-course/notebooks/imp-exp/exporting-ES6.js)
- [importing-ES6.js](js-course/notebooks/imp-exp/importing-ES6.js)

</details>
<!-- #endregion -->

---

<!-- #region 8. Advanced Concepts -->
<details>
  <summary><h1 id="advanced"> 8. Advanced Concepts </h1></summary>

## 8.1 JavaScript Internals

- [Runtime Environment](js-course/notebooks/advanced/js-internals/runtime-env.md): Web API, JS Engine (pipeline, call stack, memory heap), Callback Queue, and Event Loop.

- [Memory Management](js-course/notebooks/advanced/js-internals/memory-management.md): Garbage Collection and Memory Leaks.

- [WebAssembly](js-course/notebooks/advanced/js-internals/web-assembly.md)

## 8.2 Concurrency

- [Concurrency](js-course/notebooks/advanced/concurrency/concurrency.md)

## 8.3 Node.js Essentials

### [Node.js vs. Deno](js-course/notebooks/advanced/node-essentials/runtime-env/nodejs-vs-deno.md)

### 8.3.2 Core Modules

- [path.js](js-course/notebooks/advanced/node-essentials/core-modules/path.js)
- [os.js](js-course/notebooks/advanced/node-essentials/core-modules/os.js)
- [fs.js](js-course/notebooks/advanced/node-essentials/core-modules/fs.js)
- [Worker Threads](js-course/notebooks/advanced/node-essentials/core-modules/worker-threads.md)

## 8.4 Engine Optimization

- [hidden-classes.js](js-course/notebooks/advanced/engine-optimization/hidden-classes.js)
- [inline-caching.js](js-course/notebooks/advanced/engine-optimization/inline-caching.js)

## 8.5 Benchmarking For Loops vs. High-order Functions

- [benchmarking.js](js-course/notebooks/advanced/benchmarking/benchmarking.js)

</details>
<!-- #endregion -->

---

<!-- #region 9. Style Guide -->
<details>
  <summary><h1 id="style"> 9 Style Guide </h1></summary>

- [Style Guide](js-course/notebooks/style-guide/style-guide.md)

</details>
<!-- #endregion -->

---

<!-- #region 10. Testing -->
<details>
  <summary><h1 id="testing"> 10. Testing </h1></summary>

- [Test Pyramid](js-course/notebooks/testing/test-pyramid.md)
- [script.js](js-course/notebooks/testing/script.js)
- [script.test.js](js-course/notebooks/testing/script.test.js)

</details>
<!-- #endregion -->

---

<!-- #region 11. Run Tests -->
<details>
  <summary><h1 id="run_tests"> 11. Run Tests </h1></summary>

```bash
cd js-course
```

```bash
yarn test
```

</details>
<!-- #endregion -->

---

<!-- #region 12. Linting -->
<details>
  <summary><h1 id="lint"> 12 Linting </h1></summary>

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

<!-- #region 13. Run All Modules -->
<details>
  <summary><h1 id="run_modules"> 13. Run All Modules </h1></summary>

```bash
cd js-course
```

```bash
node notebooks/run-modules/run-modules.js
```

</details>
<!-- #endregion -->

---

<!-- #region References -->
<details>
  <summary><h1 id="ref"> References </h1></summary>

[1] Modern JavaScript (ES6+):

- [ECMA-262/ECMAScript](https://tc39.es/ecma262/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

[2] Node.js: [Node.js Documentation](https://nodejs.org/docs/latest/api/)

[3] Deno: [Deno Documentation](https://docs.deno.com/runtime/)

[4] NVM: [NVM Guide](https://www.nvmnode.com/guide/)

[5] NPM: [NPM Documentation](https://docs.npmjs.com/)

[6] Yarn: [Yarn Documentation](https://classic.yarnpkg.com/lang/en/docs/)

[7] ESLint: [ESLint Documentation](https://eslint.org/docs/latest/)

[8] Prettier: [Prettier Documentation](https://prettier.io/docs/)

[9] Jest: [Jest Documentation](https://jestjs.io/docs/getting-started)

</details>
<!-- #endregion -->

---

# License

© This work is licensed under the [Apache License 2.0](LICENSE) license.

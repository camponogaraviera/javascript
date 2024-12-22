[![Node.js](https://img.shields.io/badge/Node.js-v20.14.0-informational)](https://nodejs.org/en)
[![Contributions](https://img.shields.io/badge/contributions-welcome-orange?style=flat-square)](https://github.com/camponogaraviera/javascript/pulls)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/camponogaraviera/javascript/graphs/commit-activity)

<div align='center'>
<h1> Introduction to JavaScript </h1>
</div>

# About

This repository introduces JavaScript from the ground up, spanning classes (ES6), async/await (ES8), top-level await (ES13), class field declarations outside the constructor (ES13), private methods and fields (ES13), and others.

# Table of Contents

- 00_intro

  - [aboutJavascript.md](js_course/notebooks/00_intro/aboutJavascript.md)
    - Intro
      - Interpreter vs Compiler vs JIT
    - JavaScript Internals
      - Single Threaded
      - JavaScript Runtime (of the Browser)
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
  - [javascript&TypeScript.md](js_course/notebooks/00_intro/javascriptTypeScript.md)
  - [nodejs&Deno](js_course/notebooks/00_intro/nodejsDeno.md)
    - Why NodeJs
    - NodeJs Components
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
  - [namingConvention.md](js_course/notebooks/00_intro/namingConvention.md)

- 01_dataTypesAndKeywords

  - [1primitiveTypes.js](js_course/notebooks/01_dataTypesAndKeywords/1primitiveTypes.js)
  - [2referenceTypes.js](js_course/notebooks/01_dataTypesAndKeywords/2referenceTypes.js)
  - [3keywordVariables.js](js_course/notebooks/01_dataTypesAndKeywords/3keywordVariables.js)
  - [4dynamicTyping.js](js_course/notebooks/01_dataTypesAndKeywords/4dynamicTyping.js)

- 02_collections

  - arrays

    - [1introAndBigO.md](js_course/notebooks/02_collections/arrays/1introAndBigO.md)
    - [2builtInMethods.js](js_course/notebooks/02_collections/arrays/2builtInMethods.js)
    - [3arrayDestructuring.js](js_course/notebooks/02_collections/arrays/3arrayDestructuring.js)
    - Built-in high-order functions:
      - [4map.js](js_course/notebooks/02_collections/arrays/4map.js)
      - [5filter.js](js_course/notebooks/02_collections/arrays/5filter.js)
      - [6includes.js](js_course/notebooks/02_collections/arrays/6includes.js)
      - [7find.js](js_course/notebooks/02_collections/arrays/7find.js)
      - [8findIndex.js](js_course/notebooks/02_collections/arrays/8findIndex.js)
      - [9reduce.js](js_course/notebooks/02_collections/arrays/9reduce.js)
      - [10every.js](js_course/notebooks/02_collections/arrays/10every.js)
      - [11some.js](js_course/notebooks/02_collections/arrays/11some.js)

  - hashTables

    - [1introAndBigO.md](js_course/notebooks/02_collections/hashTables/1introAndBigO.md)
    - [2objLiteral.js](js_course/notebooks/02_collections/hashTables/2objLiteral.js)
    - [3builtInMethods.js](js_course/notebooks/02_collections/hashTables/3builtInMethods.js)
    - [4objectDestructuring.js](js_course/notebooks/02_collections/hashTables/4objectDestructuring.js)

  - [1map.js](js_course/notebooks/02_collections/1map.js)
  - [2set.js](js_course/notebooks/02_collections/2set.js)

- 03_operators

  - [1spread.js](js_course/notebooks/03_operators/1spread.js)
  - [2rest.js](js_course/notebooks/03_operators/2rest.js)
  - [3ternary.js](js_course/notebooks/03_operators/3ternary.js)

- 04_conditions

  - [1ifElse.js](js_course/notebooks/04_conditions/1ifElse.js)
  - [2and.js](js_course/notebooks/04_conditions/2and.js)
  - [3or.js](js_course/notebooks/04_conditions/3or.js)
  - [4not.js](js_course/notebooks/04_conditions/4not.js)
  - [5switchCase.js](js_course/notebooks/04_conditions/5switchCase.js)

- 05_loops

  - [loops.js](js_course/notebooks/05_loops/loops.js)

- 06_functions

  - [1factoryFunction.js](js_course/notebooks/06_functions/1factoryFunction.js)
  - [2gettersSetters.js](js_course/notebooks/06_functions/2gettersSetters.js)
  - [3functionLiteral.js](js_course/notebooks/06_functions/3functionLiteral.js)
  - [4arrowFunction.js](js_course/notebooks/06_functions/4arrowFunction.js)
  - [5constructorFunction.js](js_course/notebooks/06_functions/5constructorFunction.js)

- 07_classes

  - [classes.js](js_course/notebooks/07_classes/classes.js)

- 08_impExp

  - [1module.cjs](js_course/notebooks/08_impExp/1module.cjs)
  - [2exporting.cjs](js_course/notebooks/08_impExp/2exporting.cjs)
  - [3importing.cjs](js_course/notebooks/08_impExp/3importing.cjs)
  - [4exportingES6.js](js_course/notebooks/08_impExp/4exportingES6.js)
  - [5importingES6.js](js_course/notebooks/08_impExp/5importingES6.js)

- 09_regex

  - [regularExpressions.js](js_course/notebooks/09_regex/regularExpressions.js)

- 10_asynchronous

  - [1about.js](js_course/notebooks/10_asynchronous/1about.js)
  - [2callback.js](js_course/notebooks/10_asynchronous/2callback.js)
  - [3callbackHell.js](js_course/notebooks/10_asynchronous/3callbackHell.js)
  - [4promise.js](js_course/notebooks/10_asynchronous/4promise.js)
  - [5asyncAwait.js](js_course/notebooks/10_asynchronous/5asyncAwait.js)

- 11_nodejsModules

  - [1path.cjs](js_course/notebooks/11_nodejsModules/1path.cjs)
  - [2os.cjs](js_course/notebooks/11_nodejsModules/2os.cjs)
  - [3fs.cjs](js_course/notebooks/11_nodejsModules/3fs.cjs)

- 12_oop

  - [1intro.js](js_course/notebooks/12_oop/1intro.js)
  - [2encapsulation.js](js_course/notebooks/12_oop/2encapsulation.js)
  - [3abstraction.js](js_course/notebooks/12_oop/3abstraction.js)
  - [4inheritance.js](js_course/notebooks/12_oop/4inheritance.js)
  - [5polymorphism.js](js_course/notebooks/12_oop/5polymorphism.js)

- 13_engine_optimization

  - [hiddenClasses.js](js_course/notebooks/13_optimization/hiddenClasses.js)
  - [inlineCaching.js](js_course/notebooks/13_optimization/inlineCaching.js)
  
- 14_tests

  - [testPyramid.js](js_course/notebooks/14_tests/testPyramid.js)
  - [script.js](js_course/notebooks/14_tests/script.js)
  - [script.test.js](js_course/notebooks/14_tests/script.test.js)

- 15_styleGuide

  - [styleGuide.md](js_course/notebooks/15_styleGuide/styleGuide.md)

 <!-- ################################################################ -->

# Quick run

1. [Install node](https://github.com/camponogaraviera/nvm-npm?tab=readme-ov-file#node-version-manager-nvm).

2. Install all dependencies listed in the `js_course/package.json` file:

```bash
cd js_course && yarn
```

3. Run a test:

```bash
yarn test
```

4. Lint:

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
2. Setting key-value `"type": "module"` in `package.json` enables execution of `.js` files in ECMAScript (ESM) syntax. Babel can also be used to translate ES6 to ES5, i.e., to translate into equivalent code that works in environments without native ES6 module support.
3. When using `yarn.lock`, there is no need to keep the `package-lock.json`.
4. Do not `.gitignore` the `yarn.lock` file.

# References

[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript

[2] https://nodejs.org/en

[3] https://deno.com/

[4] https://github.com/airbnb/javascript

[5] https://eslint.org/docs/latest

[6] https://prettier.io

[7] https://jestjs.io/docs/getting-started

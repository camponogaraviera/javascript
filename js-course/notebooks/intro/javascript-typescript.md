<div align='center'>
  <h1> JavaScript vs TypeScript </h1>
</div>

# Table of Contents

- [JavaScript](#javascript)
- [Interpreter vs Compiler vs Transpiler vs JIT Compiler](#interpreter-vs-compiler-vs-transpiler-vs-jit-compiler)
- [TypeScript](#TypeScript)
  - [Features](#features)
- [Examples](#examples)
- [Summary](#summary)
  
# JavaScript

JavaScript is a high-level, `event-driven` and `single-threaded` programming language, `free of deadlocks`. JavaScript was initially designed to be interpreted, however, modern JavaScript engines such as V8 (used in Google Chrome and Node.js) and SpiderMonkey (used in Firefox) use [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) compilation. In JavaScript, functions are treated as [first-class citizens](https://en.m.wikipedia.org/wiki/First-class_function), i.e., they can be passed as arguments to other functions. In the functional programming style, [higher-order functions](https://en.m.wikipedia.org/wiki/Higher-order_function) are a standard practice.

- **Pros:** beginner-friendly with a faster learning curve. Flexible, allowing scripts to run even in the presence of errors. Since it is dynamic typing, type-checking is done at runtime. 
- **Cons:** does not flag semantic errors, such as reassigning the data type of a variable by mistake, which might break the API. As the codebase grows in complexity and number of contributors, it gets increasingly difficult to find runtime errors and debug.

## Interpreter vs Compiler vs Transpiler vs JIT Compiler

Modern JavaScript uses JIT compiled.

- `Interpreter`: executes source code line-by-line directly without compiling it to machine code, and interprets intermediate code (bytecode) at runtime. For instance, Python uses a Compiler to first compile source code to an intermediate representation (e.g., bytecode in .pyc files) which is then interpreted by the CPython Interpreter at runtime. Not all Interpreters rely on bytecode.

- `Compiler`: translates source code into machine code (binary code) at compile time (before execution). The output is specific to a given CPU architecture (e.g., x86, ARM) to run.

- `Transpiler`: converts source code from one high-level language to another (e.g., TypeScript → JavaScript or ES6+ → ES5).

- `JIT Compiler`: combines an Interpreter and a Compiler to translate bytecode code into machine code at runtime.

Bytecode: is an intermediate, machine-independent representation of source code, usually generated by a compiler. It can be interpreted by an Interpreter, executed by a virtual machine or compiled to machine code at runtime using a JIT compiler.

Binary Code (machine code): is the low-level code that is directly executable by the CPU. It is generated by a Compiler and is machine-specific, meaning it is tailored to the architecture of a given CPU.

# TypeScript

TypeScript is a superset of JavaScript, i.e., it includes all JavaScript features and extends its functionalities by providing static type annotations while enforcing type checking.
 
- **Pros:** static typing can flag errors at compile time before runtime. 
- **Cons:** TypeScript features can make the code more verbose. Code must be transpiled into JavaScript to run in the browser.

## Features

TypeScript introduced: 

- `Type annotations:` are used to provide hints about the data type of a variable, parameter, function, and other constructs.
- `Access modifiers:` can be **public**, **private**, **protected**, or **read-only**. Are used to define the visibility and accessibility of classes, methods, and member variables.
- `Interfaces:` are used to define the structure of an object, i.e., the data type of the properties of an object. In VsCode, TypeScript interfaces are implemented to enable code hints.

# Examples

To run `.ts` files, install the TypeScript compiler:
```bash
npm install -g typescript
```

Since JavaScript is dynamically typed, when using a JavaScript runtime environment (e.g. node.js), trying to reassign a variable that has already been declared does not render a compile-time error.

```javascript
// node message.js
let message = 'message';
message = 10;
```

In TypeScript, it is possible to reassign a variable that has already been assigned, but the new value must match the type of the variable, otherwise it will render a compile-time error:

```typescript
// tsc message.ts
let message: string = 'message';
message = 10; // ERROR: Type 'number' is not assignable to type 'string'.
```

It is also possible to write JavaScript code and still leverage TypeScript functionality. To achieve this, use `.ts` file extension and run the code through a TypeScript compiler, which will infer the data type of the variable based on the value assigned to it.

```javascript
// tsc message.ts
let message = 'message';
message = 10; // ERROR: Type 'number' is not assignable to type 'string'.
```

# Summary

TypeScript can be gradually integrated into a JavaScript workflow as the project becomes more complex. Make sure to change file extensions to .ts and use a TypeScript compiler.

- JavaScript is recommended for small-scale applications that require fast prototyping. 
- TypeScript is recommended for code maintainability of complex large-scale enterprise applications (such as VsCode) with many potential contributors.

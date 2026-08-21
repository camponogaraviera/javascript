<div align='center'>
  <h1> Runtime Environment </h1>
</div>

# Table of Contents

- [JavaScript Runtime Environment (of the Browser)](#javascript-runtime-environment-of-the-browser)
  - Web API
  - JavaScript Engine
    - Pipeline
    - Call Stack
    - Memory Heap
  - Callback Queue
  - Event Loop

# JavaScript Runtime Environment (of the Browser)

JavaScript is single-threaded. Single-threaded means that instructions are executed one task at a time, sequentially, in order, in a single call stack (no parallelism) and, therefore, in a synchronous way. 

To manage memory as well as function calls, and to run `asynchronous (non-blocking) operations`, JavaScript needs a `runtime environment`. The JavaScript runtime environment of the web browser consists of a `web API`, a `callback queue`, an `event loop`, and an `engine`. The JavaScript engine of the runtime has only one call stack and one memory heap.

## Web API 

Uses C++ to perform asynchronous operations in the background, such as `window fetch()` (to send HTTP requests), listen to `DOM events` (button click), schedule events with timers `window setTimeout`, `window setInterval`, and others. These operations are not native to JavaScript. The Web API does not run JavaScript code. Instead, it returns the result of the asynchronous task in the form of a callback, which the event loop of the JS engine then pushes onto the call stack for execution.

## JavaScript Engine

Is used to parse JS source code into optimized machine code (binary code). Every browser uses a different ECMAScript engine. Firefox uses the SpiderMonkey engine (the first JS engine created), and Google Chrome uses the V8 engine. The engine has two main components, a Call Stack and a Memory Heap.

- A typical pipeline within a JS engine looks as follows: 

```bash
Source Code -> Parser -> Abstract Syntax Tree (AST) -> Bytecode Generator -> Bytecode -> Interpreter -> Profiler (monitor) -> JIT Compiler -> Optimized Machine Code (for hot paths).
```

- `Call Stack:` used to keep track of local variables (whose size/length is fixed) and the order of function calls and their execution following the LIFO method. Each function call creates a new stack frame that stores its primitive types (numbers, booleans, short strings, etc.) and references (the memory address or pointer) to objects, while `the actual object is stored in the heap`. When a string is too large, or is a part of a reference type (like a string inside an object), its actual content may be stored in the heap.
  
- `Memory Heap:` is a region in memory used for dynamic memory allocation, i.e., to allocate memory for storing, without order, dynamic objects (hash tables, arrays, functions, ect.) created at runtime since they do not have a fixed size/length (is unknown). It enables efficient storage and retrieval of data during a program's execution. In JavaScript, memory management is managed by the `garbage collector`.

## Callback/task Queue

This queue holds callback functions from asynchronous operations that are ready to be executed by the engine's Call Stack.

## Event Loop

It continuously checks if the `Call Stack` is empty. If it is, and there are tasks in the `Callback Queue` (macrotasks), the Event loop takes the first task from the Callback Queue and pushes it onto the Call Stack for execution. However, before executing a macrotask, the event loop first processes any tasks in the `microtask queue` (which includes promises, MutationObserver callbacks, etc.), and finally moves on to tasks in the `macrotask queue`.


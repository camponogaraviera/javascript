# About JavaScript

JavaScript is a high-level interpreted (or [JIT compiled](https://en.wikipedia.org/wiki/Just-in-time_compilation)) single-threaded programming language free of deadlocks. Single-threaded means that processes are executed one task at a time, sequentially, in a single call stack. To run JavaScript code outside the browser (e.g. on a mobile device) on the server/backend side, or to use asynchronous (non-blocking) operations in JavaScript, one needs a JavaScript runtime environment. The runtime environment of the web browser consists of Web APIs, a Callback Queue, an Event Loop, and an Engine. Google Chrome uses the V8 engine. The engine has two main components: the memory heap, and the call stack.

Note: asynchronous is not concurrent or multi-threading, it is non-blocking.

# NodeJs

NodeJs (and also Deno) is a [cross-platform, open-source JavaScript runtime environment](https://en.wikipedia.org/wiki/Node.js) (not a framework or programming language) that enables asynchronous operations to be executed outside the browser. Node.js is a C++ program that uses Google's V8 JavaScript engine to run JavaScript code outside the browser. It is asynchronous by default and single-threaded, i.e., the event loop runs on a single thread. Therefore, it is designed to handle data I/O-intensive and real-time operations more efficiently than CPU-intensive operations such as video processing and image editing. To enable CPU-intensive performance (multi-threading), the [worker_threads](https://nodejs.org/api/worker_threads.html), [child_process](https://nodejs.org/docs/latest/api/child_process.html), and [cluster](https://nodejs.org/docs/latest/api/cluster.html) modules can be used.

Note: multi-threading in low-level languages such as C++, Java, or Rust is faster than using subprocess modules in NodeJs. 

- Pros: can be used for both Backend and Frontend, allows fast development, optimal for I/O intensive and real-time operations.
- Cons: single-threaded, not optimal for CPU-intensive operations.

/*

This section covers the following patterns used for handling asynchronous operations:

1. Callbacks: basic approach, but can lead to callback hell.
2. Promises: more structured approach that allows chaining and better error handling.
3. Async/Await: simplifies Promise handling, improving code readability and maintainability.

*These patterns, however, will not convert a synchronous operation into an asynchronous one.

- Asynchronous operations are those that do not block the execution of the program while they are running. 
- There is no need to wait for one async operation to finish before starting the next one.
- Asynchronous is not the same as multi-threaded, it only means non-blocking. Recall that JavaScript is single-threaded. 
- Examples of asynchronous operations: I/O-bound operations such as network requests and file system access.
*/

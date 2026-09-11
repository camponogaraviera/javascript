<div align='center'>
  <h1> Memory Management </h1>
</div>

# Table of Contents

- [Memory Leaks](#memory-leaks)
- [Garbage Collection](#garbage-collection)

# Memory Leaks

A memory leak occurs when a program allocates memory but fails to release it properly, leading to a gradual increase of unused memory in the memory heap. In such cases, garbage collection is not activated. Examples are:

- `Global variables`: in long-running applications, they can lead to memory leaks since they remain in memory for the lifetime of the application because the global scope (window object in Browsers, or global object in Node.js) always holds a reference to them, which prevents them from being garbage collected.

- `Event listeners`: can lead to memory leaks if not properly removed, because they can keep references to objects that are no longer needed.

- `setInterval function`: can lead to memory leaks if the interval is not cleared with [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval), as the callback function can keep reference of objects that are no longer needed.

# Garbage Collection

JavaScript uses Garbage collection (GC), an automatic memory management process that identifies and frees up memory from the memory heap that was allocated to objects, arrays, and functions that are no longer reachable or in use in a program. It helps to prevent `memory leaks` in a memory heap. For example, when an object (array or hash table) loses its reference in memory, it becomes eligible for garbage collection. It is available to high-level languages such as Python and JavaScript. In JavaScript, GC uses the [mark-and-sweep algorithm]().
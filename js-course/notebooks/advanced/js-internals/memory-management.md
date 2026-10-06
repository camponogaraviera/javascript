<div align='center'>
  <h1> Memory Management </h1>
</div>

# Table of Contents

- [Memory Leaks](#memory-leaks)
- [Garbage Collection](#garbage-collection)

# Memory Leaks

A memory leak occurs when a program retains memory that is no longer needed, preventing that memory from being reclaimed.

The following examples can cause memory leaks when they unintentionally keep objects reachable when they are no longer needed:

- `Global variables`: in long-running applications, unnecessarily retaining an object in a global variable can cause a memory leak because the object remains reachable for the lifetime of the application and therefore cannot be garbage collected.

- `Event listeners`: can cause memory leaks when not properly removed, because listeners can retain references to objects that are no longer needed.

- `setInterval function`: can lead to memory leaks if the interval is not cleared with [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval), because the active interval retains its callback, which can in turn retain references to objects that are no longer needed.

---

# Garbage Collection

JavaScript uses garbage collection (GC), an automatic memory-management process that identifies objects that are no longer reachable and reclaims the memory associated with them.

When a memory leak occurs, GC can continue to run normally but cannot reclaim leaked objects if they are still reachable, i.e., if the program still holds a reference to them, directly or indirectly.

An object becomes eligible for garbage collection when it is no longer reachable from any root (such as global variables or the current call stack).

An object becomes eligible for garbage collection when it is no longer reachable from any GC root, such as global objects (e.g., `window` in browsers or `global` in Node.js) or references held by active execution contexts (e.g., the call stack).

JavaScript engines generally use [tracing garbage collection](https://en.wikipedia.org/wiki/Tracing_garbage_collection), based on the concept of marking reachable objects and reclaiming unreachable ones.
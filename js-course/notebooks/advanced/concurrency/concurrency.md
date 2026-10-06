<div align='center'>
  <h1> Concurrency </h1>
</div>

# About

Concurrency is a general concept that involves managing multiple tasks during overlapping periods of time, but not necessarily simultaneously (in parallel) because execution can be interleaved or switched between tasks. 

Concurrency encompasses multiple approaches, such as multithreading, multiprocessing, and asynchronous programming.

- `Multithreading`: Is a specific form of concurrency where multiple threads run within a single process, which may perform many tasks. All threads **share the process's address space**.
  - It is well suited to I/O-bound operations: while one thread waits on I/O, another can run.
  - On a **single-core CPU**, the operating system assigns each thread a short **time slice**. The OS then switches between threads using **context switching**, creating the illusion of simultaneous execution. In this case, tasks are **concurrent**, but **not truly parallel**.
  - On a **multicore CPU**, multiple threads can execute CPU-bound operations in parallel.

- `Multiprocessing`: Is a specific form of concurrency where multiple processes run **independently**, each with its own virtual address space.
  - It doesn't inherently mean simultaneous execution. Multiple processes can be concurrent on a single CPU core through scheduling, just as threads can. 
  - On a **multicore CPU**, multiple processes can execute in parallel by running on different CPU cores, making multiprocessing particularly suitable for CPU-bound workloads.

- `Asynchronous Programming`: A programming model in which an operation can be initiated without synchronously waiting for its completion, allowing the current execution flow to continue while the operation is in progress.
  - It is particularly useful for I/O-bound workloads (e.g., network requests, file system access), where a program can perform other tasks while waiting for external operations to complete. 
  - It provides concurrency but does not inherently imply parallel execution.
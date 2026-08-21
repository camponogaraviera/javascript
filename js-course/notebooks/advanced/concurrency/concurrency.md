<div align='center'>
  <h1> Concurrency </h1>
</div>

# About

# Concurrency

Concurrency is a general concept that involves managing multiple tasks at once, but not necessarily simultaneously (in parallel) since it can switch between tasks. It encompasses multiple paradigms, such as multithreading, multiprocessing, event-driven programming, and asynchronous programming.

- `Multithreading`: Is a specific form of concurrency where multiple threads (potentially thousands) run within a single process, which may perform many tasks. All threads **share the same memory space** of the process. On a **single-core CPU**, the operating system assigns each thread a short **time slice** (e.g., 5 ms). The CPU then switches between threads using **context switching**, creating the illusion of simultaneous execution. In this case, tasks are **concurrent**, but **not truly parallel**. Multithreading is suitable for **I/O-bound operations**, where threads often wait for external input/output (e.g., file access, network requests). While one thread is waiting, others can proceed, without blocking the whole process.

- `Multiprocessing`: Is a specific form of concurrency where multiple processes run **independently and simultaneously**, **each with its own memory space**. Each process can be assigned to a separate core, allowing **true parallelism** execution, making it suitable for **CPU-bound operations**.

- `Asynchronous Programming`: Is a specific form of concurrency that happens in a non-blocking manner, where a program does not block the execution of another program during runtime. It is efficient for data I/O-bound operations such as network requests and file system access. **It does not** run tasks in parallel (simultaneously).

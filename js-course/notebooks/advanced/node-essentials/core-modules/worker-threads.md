<div align='center'>
  <h1>Worker Threads</h1>
</div>

# About

Node.js is traditionally `single-threaded`, however, the [worker_threads](https://nodejs.org/api/worker_threads.html) module enables multithreading capabilities for handling `CPU-bound operations in parallel` since it uses a separate event loop. ["Workers (threads) are useful for performing CPU-intensive JavaScript operations. They do not help much with I/O-intensive work. The Node.js built-in asynchronous I/O operations are more efficient than Workers can be."](https://nodejs.org/api/worker_threads.html#worker-threads)

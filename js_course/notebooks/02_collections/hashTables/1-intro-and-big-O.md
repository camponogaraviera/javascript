<div align='center'>
  <h1> Hash Tables </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use cases](#use-cases)
- [Implementation](#implementation)
  - [Collisions](#collisions)
    - [Ways to Avoid Collisions](#ways-to-avoid-collisions)
    - [Ways to Handle Collisions](#ways-to-handle-collisions)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

A `Hash Table` is a data structure that stores data in `key-value pairs`. Each key is mapped to a hash code (in constant time) via a hash function in a process known as "`hashing`". This hash code is transformed (often using the `modulo % operation`) into an index/address to locate the memory slot that will store or retrieve data associated with the key. The address either points to a `single slot` (as in `Open Addressing`) or to a `bucket (e.g., Array or Linked List)` that can store `multiple keys` (as in `Chaining`) to resolve collisions.

Properties:

- In Hash Tables, keys are unique by default, i.e., it is not possible to have duplicate keys.
- The values associated with these keys can be of any data type (Number, String, Boolean, Undefined, Null, Symbol, BigInt, Objects, Functions).
- Hash Tables are faster than arrays when there are no collisions.
- In JavaScript:
  - Hash Tables are called objects, in Python they are called dictionaries.
  - If a key of a hash table is not a type string or symbol, JavaScript will automatically convert it to a string.
  - Numeric keys in Hash Tables are automatically sorted in ascending order. In Python, they are not.
  - General Hash Tables do not preserve the order of insertion. In Python (newer versions), they do.

# Use cases

A Hash Table can be used to implement:

- Dictionaries.
- Key-value store databases.
- Caching layers.
- A user session management.
- Memory buffers.
- A mapping of human-friendly domain names (example.com) into IP addresses (e.g. 192.0.2.1) in DNS, etc.

# Implementation

A `Hash Table` can be implemented with a class using:

- `Arrays` to create buckets for separate chaining.

  - When a collision occurs and separate chaining is used, the implementation of the `delete() method`, when re-indexing elements (key-value pairs) in the bucket, requires `shifting elements to the left`. This additional re-indexing adds an `overhead of O(n)`, which causes the overall delete() method to be `O(n^2)`. However, re-indexing is not mandatory as one could simply mark the deleted slot as null.

- `Linked Lists` to create buckets for separate chaining that will store key-value pairs in nodes.

  - This allows for an overall O(n) time complexity for deletion instead of O(n^2) due to re-indexing.

## Collisions

A `Collision` occurs when multiple keys are mapped (hashed) to the same address. This happens when there is limited memory. As a consequence, it can slow read and write (lookup, insert, and delete) operations.

### Ways to Avoid Collisions

1. Devise a good hashing function and choose a Hash Table size to be a `large prime number` to distribute keys uniformly across the hash table. A prime number `minimizes patterns in the modulo operation` (key % size), `preventing clustering`. For example, a `composite number` (n\*m) creates a `cyclic behavior` where multiple keys are mapped to the same index causing clustering. A prime not too close to a power of 2 is often chosen because powers of 2 (e.g., 2, 4, 8, 16, etc.) align poorly with bitwise operations (e.g., AND, OR) in certain hash functions, leading to clustering.

- Example:

  - `Bad choice (composite number = 10)`: Keys {10, 20, 30, 40} → All map to index 0 (10 % 10 = 0, 20 % 10 = 0, etc.) creating a cyclic behavior.
  - `Good choice (prime size = 11)`: Keys {10, 20, 30, 40} → Map to different indices (10 % 11 = 10, 20 % 11 = 9, etc.).

### Ways to Handle Collisions

1. `Separate Chaining`: when multiple keys hash to the same address, instead of overwriting the existing key-value pair, the Hash Table stores each pair (often as a tuple) in the same bucket (e.g., an Array or a Linked List).

2. `Linear Probing`: is a form of `Open Addressing`. When a collision occurs, the algorithm probes for the next available slot rather than storing multiple elements in the same slot. `Each slot is designed to hold only a single key-value pair`. When no empty slots are available, a common approach is to rehash all existing keys into a new larger table using the same hash function.

Note: hashing refers to the process of mapping a key to a specific memory address (index) using a hash function. Rehashing doesn't change the basic idea of hashing, but it involves creating a new, larger hash table.

# Big O

## Space Complexity

- Worst or Average case: `O(n)`. Because the amount of memory required to store the entire Hash Table is directly proportional to the number of key-value pairs in it.

## Time Complexity

- **Average case (no collisions)**: O(1). Because indexing can be used to find the right memory slot that contains a single key-value pair.

  - **Access (lookup-by-key)**: `O(1)`.
  - **Search (lookup-by-value)**: `O(1)`.
  - **Insertion**: `O(1)`.
  - **Deletion**: `O(1)`.

- **Worst case (with collisions)**: `O(n)`. Because all keys are hashed to the same bucket due to collisions.

  - **Access (lookup-by-key)**: `O(n)`. Because it requires iterating over all entries in the bucket to `find the right value given the key`.
  - **Search (lookup-by-value)**: `O(n)`. Because it requires iterating over all entries in the bucket to `find the right key given the value`.
  - **Insertion**: `O(n)`. Because it requires iterating over all entries in the bucket to find the correct location `to insert the new key-value pair`. If the bucket is an array, `shifting to the right` is required.
  - **Deletion**: `O(n)`. Because it requires iterating over all entries in the bucket to find the correct location `to delete the existing key-value pair`.

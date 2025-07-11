<div align='center'>
  <h1> Hash Tables </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use Cases](#use-cases)
- [Collisions](#collisions)
  - [Ways to Avoid Collisions](#ways-to-avoid-collisions)
  - [Ways to Handle Collisions](#ways-to-handle-collisions)
    - Separate Chaining
    - Linear Probing
- [Implementation](#implementation)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

A `Hash Table` is a data structure that stores data in `key-value pairs`. Each key is mapped to a hash code (in constant time) via a hash function in a process known as "`hashing`". This hash code is transformed (often using the `modulo % operation`) into an index/address to locate the memory slot that will store or retrieve data associated with the key. The address either points to a `single slot` (as in `Open Addressing`) or to a `bucket (e.g., Array or Linked List)` that can store `multiple keys` (as in `Chaining`) to resolve collisions.

Properties of the Hash Function:

- One-way: maps a key to an address, but not the address back to a key.
- Deterministic: the same key is always mapped to the same address.

Properties of the Hash Table:

- Keys are unique by default, i.e., it is not possible to have duplicate keys.
- Values associated with keys can be of any data type.
- Hash Tables are faster than Arrays when there are no collisions.

- In JavaScript

  - Hash Tables are called `objects`.
  - Valid `keys` can be only of type `String` and `Symbol`.
  - If a key is not a type string or symbol, JavaScript will automatically convert it to a string.
  - Numeric keys are `sorted in ascending order`.
  - Hash Tables do not preserve the order of insertion.

- In Python:

  - Hash Tables are called `dictionaries`.
  - Valid `keys` can be only of `Immutable Types` (e.g., int, str, float, tuple, boolean).
  - Numeric keys are `not sorted`.
  - Hash Tables preserve the order of insertion.
  - Dictionaries are ordered since Python 3.6.

# Use Cases

A Hash Table can be used to implement:

- Dictionaries.
- Key-value store databases.
- Caching layers.
- A user session management.
- Memory buffers.
- A mapping of human-friendly domain names (example.com) into IP addresses (e.g., 192.0.2.1) in DNS, etc.

# Collisions

A `Collision` occurs when multiple keys are mapped (hashed) to the same address (bucket). This happens when there is limited memory. As a consequence, it can slow down read and write (lookup, insert, and delete) operations.

## Ways to Avoid Collisions

1. Devise a good hashing function and choose a Hash Table size to be a `large prime number` to distribute keys uniformly across the hash table. A prime number `minimizes patterns in the modulo operation` (key % size), `preventing clustering`. For example, a `composite number` ($n\*m$) creates a `cyclic behavior` where multiple keys are mapped to the same index, causing clustering. A prime not too close to a power of 2 is often chosen because powers of 2 (e.g., 2, 4, 8, 16, etc.) align poorly with bitwise operations (e.g., AND, OR) in certain hash functions, leading to clustering.

- Example:

  - `Bad choice (composite number = 10)`: Keys {10, 20, 30, 40} → All map to index 0 (10 % 10 = 0, 20 % 10 = 0, etc.) creating a cyclic behavior.
  - `Good choice (prime size = 11)`: Keys {10, 20, 30, 40} → Map to different indices (10 % 11 = 10, 20 % 11 = 9, etc.).

## Ways to Handle Collisions

1. `Separate Chaining`: when multiple keys hash to the same address, instead of overwriting the existing key-value pair, the Hash Table stores each pair (often as a tuple) in the same bucket (e.g., an Array or a Linked List).

2. `Linear Probing`: is a form of `Open Addressing`. When a collision occurs, the algorithm probes for the next available slot rather than storing multiple elements in the same slot. `Each slot is designed to hold only a single key-value pair`. When no empty slots are available, a common approach is to `rehash all existing keys` into a new, larger table using the same hash function.

Note: rehashing involves creating a new, larger hash table.

# Implementation

A `Hash Table` can be implemented with a Class using:

- `Arrays as Buckets for Separate Chaining:`
  - Each bucket is an array storing key-value pairs.
  - Collision Handling: If two keys hash to the same bucket, they are appended to the bucket's array.
  - Cons: deleting a node requires shifting (re-index) remaining elements to the left adding an overhead of $O(n)$ in time complexity. Re-indexing can be avoided by marking deleted slots as `tombstones` (null/None), however, this will waste memory in the long run.

- `Linked Lists as Buckets for Separate Chaining:`
  - Each bucket is a linked list of nodes (key-value pairs).
  - Collision Handling: colliding keys are appended to the linked list.
  - Pros: deletion requires no shifting overhead.

# Big O

## Space Complexity

- Worst or Average case: $O(n)$. Because the amount of memory required to store the entire Hash Table is directly proportional to the number of key-value pairs in it.

## Time Complexity

- **Average case (no collisions)**: O(1). Because indexing can be used to find the right memory slot that contains a single key-value pair.

  - `Access (lookup-by-key)`: $O(1)$.
  - `Search (lookup-by-value)`: $O(1)$.
  - `Insertion`: $O(1)$.
  - `Deletion`: $O(1)$.

- **Worst case (with collisions)**: 

  - `Access (lookup-by-key)`: $O(n)$. Because it requires iterating over all entries in the bucket to `find the right value given the key`.
  - `Search (lookup-by-value)`: $O(n)$. Because it requires iterating over all entries in the bucket to `find the right key given the value`.
  - `Insertion`: $O(n)$. Because it requires iterating over all entries in the bucket to find the correct location `to insert the new key-value pair`. If the bucket is an array, `shifting to the right` is required.
  - `Deletion`: $O(n)$. Because it requires iterating over all entries in the bucket to find the target key-value pair to remove.
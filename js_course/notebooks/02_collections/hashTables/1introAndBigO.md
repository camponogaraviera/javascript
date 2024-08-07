# About 

A hash table is a data structure that stores data in key-value pairs. In hash tables, keys are unique by default, i.e., it is not possible to have duplicate keys. 

In JavaScript, hash tables are called objects, in Python they are called dictionaries. In JavaScript, hash tables are automatically sorted when using numbers as keys, in Python, they are not. In general, hash tables do not preserve the order of insertion. Hash tables are faster than arrays when there is no collision.

# Use cases

A hash table can be used to create dictionaries, key-value store databases, caching layers, user session management, mapping human-friendly domain names (example.com) into IP addresses (e.g. 192.0.2.1) in DNS, etc.

# Collisions

In the context of hashing and hash tables, a "collision" occurs when two or more elements (or keys) are mapped to the same hash address or memory slot. A collision occurs when there is limited memory, and it can slow read and write operations.

Ways to deal with collisions:

1) Increase memory size and devise a good hashing function.

2) Separate chaining: multiple key-value pairs are stored in an array or a linked list in the same memory slot.

3) Linear probing: a form of open addressing where a key-value pair is placed in the next empty slot available.

# Big O

- Worst case
    - Access (lookup by key): O(n)
    - Search (lookup by value): O(n)
    - Insertion: O(n)
    - Deletion: O(n)
    - Space Complexity: O(n)

- Average case
    - Access (lookup by key): O(1) (if there are no collisions).
    - Search (lookup by value): O(n)
    - Insertion: O(1)
    - Deletion: O(1)
    - Space Complexity: O(n)

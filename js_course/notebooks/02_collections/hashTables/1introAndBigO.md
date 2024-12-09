# About Hash Tables

A hash table is a data structure that stores data in key-value pairs. In hash tables, keys are unique by default, i.e., it is not possible to have duplicate keys. If a key of a hash table is not of type string or symbol, JavaScript will automatically convert it to a string. 

- The values associated with these keys can be of any data type (Number, String, Boolean, Undefined, Null, Symbol, BigInt, Objects, Functions).
- Hash tables are faster than arrays when there is no collision.
- In JavaScript, hash tables are called objects, in Python they are called dictionaries. 
- In JavaScript, numeric keys in hash tables are automatically sorted in ascending order. In Python, they are not. 
- In JavaScript, general hash tables do not preserve the order of insertion. In Python (newer versions), they do.

# Use cases

- A hash table can be used to create: 
  - Dictionaries;
  - Key-value store databases;
  - Caching layers;
  - A user session management;
  - Memory buffers.
  - A mapping of human-friendly domain names (example.com) into IP addresses (e.g. 192.0.2.1) in DNS, etc.

# Collisions

In the context of hashing and hash tables, a "collision" occurs when two or more elements (or keys) are mapped to the same hash address or memory slot. A collision occurs when there is limited memory, and it can slow read and write operations.

Ways to deal with collisions:

1) Increase memory size and devise a good hashing function.

2) Separate chaining: multiple key-value pairs are stored in an array or a linked list in the same memory slot.

3) Linear probing: a form of open addressing where a key-value pair is placed in the next empty slot available.

# Big O

In the worst case of Time Complexity, when there are collisions, all keys are hashed to the same bucket containing all the entries of the hash table. The bucket is often implemented with an array.

- Worst case:

    - Access (lookup by key): O(n) Since all entries are in the same bucket, the algorithm will have to iterate over each element in that bucket.
    - Search (lookup by value): O(n) Since it requires iterating across all entries regardless of collisions.
    - Insertion: O(n) Since it requires iterating the entire bucket to find the correct location to insert the new key-value pair. If the bucket is an array, then shifting to the right is required.
    - Deletion: O(n) Since it requires iterating the entire bucket to find the correct location to delete the existing key-value pair. If the bucket is an array, then shifting to the left is required.
    - Space Complexity: O(n) The amount of memory required to store the entire hash table is directly proportional to the number of entries.


- Average case (when there are no collisions):
  
    - Access (lookup by key): O(1) Since indexing can be used.
    - Search (lookup by value): O(n) Since it requires iterating across all entries regardless of collisions.
    - Insertion: O(1) Using indexing to access the right bucket.
    - Deletion: O(1) Using indexing to access the right bucket.
    - Space Complexity: O(n) The amount of memory required to store the entire hash table is directly proportional to the number of entries.

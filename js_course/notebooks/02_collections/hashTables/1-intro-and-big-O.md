# About Hash Tables

A Hash Table is a data structure that stores data in key-value pairs. 

Each key is mapped to a hash code via a hash function in a process known as "hashing". This hash code is transformed (often using modulo operation) into an index/address for the memory slot that will store or retrieve data associated with the key. The address either points to a single slot (as in open addressing) or to a bucket (e.g., array or linked list) that can store multiple elements (as in chaining) to resolve collisions. 

- In Hash Tables, keys are unique by default, i.e., it is not possible to have duplicate keys. 
- The values associated with these keys can be of any data type (Number, String, Boolean, Undefined, Null, Symbol, BigInt, Objects, Functions).
- Hash Tables are faster than arrays when there are no collisions.
- In JavaScript:
  - Hash Tables are called objects, in Python they are called dictionaries. 
  - If a key of a hash table is not of type string or symbol, JavaScript will automatically convert it to a string.
  - Numeric keys in Hash Tables are automatically sorted in ascending order. In Python, they are not. 
  - General Hash Tables do not preserve the order of insertion. In Python (newer versions), they do.

# Use cases

- A Hash Table can be used to create: 
  - Dictionaries;
  - Key-value store databases;
  - Caching layers;
  - A user session management;
  - Memory buffers.
  - A mapping of human-friendly domain names (example.com) into IP addresses (e.g. 192.0.2.1) in DNS, etc.

# Collisions

In the context of hashing and hash tables, a "collision" occurs when two or more elements (or keys) are mapped to the same hash address. This happens when there is limited memory and it can slow read and write (lookup, insert, and delete) operations.

Ways to deal with collisions:

1) Increase memory size and devise a good hashing function.

2) Separate chaining: when multiple keys hash to the same address, instead of overwriting the existing key-value pair, the Hash Table stores those pairs in the same bucket (e.g., an array or a linked list).

3) Linear probing: is a form of open addressing. When a collision occurs, the algorithm probes for the next available slot rather than storing multiple elements in one slot. Each slot is designed to hold only a single key-value pair. When no empty slots are available, a common approach is to rehash all existing keys into a new larger table using the same hash function. 

Note: hashing refers to the process of mapping a key to a specific memory address (index) using a hash function. Rehashing doesn't change the basic idea of hashing, but it involves creating a new, larger hash table. 

# Big O

## Space Complexity

- Worst or Average case: O(n) because the amount of memory required to store the entire Hash Table is directly proportional to the number of elements.

## Time Complexity

The worst case happens when there are collisions. In this case, all keys are hashed to the same bucket containing all the entries of the hash table. The bucket is often implemented with an array.

- Worst case:

    - Access (lookup-by-key): O(n). Since all entries are in the same bucket, the algorithm will have to iterate over each element in that bucket.
    - Search (lookup-by-value): O(n). Since it requires iterating across all entries regardless of collisions.
    - Insertion: O(n). Since it requires iterating over the entire bucket to find the correct location to insert the new key-value pair. If the bucket is an array, shifting to the right is required.
    - Deletion: O(n). Since it requires iterating over the entire bucket to find the correct location to delete the existing key-value pair. If the bucket is an array, shifting to the left is required.

- Average case (when there are no collisions):
  
    - Access (lookup-by-key): O(1). Since indexing can be used.
    - Search (lookup-by-value): O(n). Since it requires iterating across all entries regardless of collisions.
    - Insertion: O(1). Using indexing to access the right bucket.
    - Deletion: O(1). Using indexing to access the right bucket. Given the key, the hash function computes the index in constant time, allowing direct deletion.
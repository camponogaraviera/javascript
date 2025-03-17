<div align='center'>
  <h1> Arrays </h1>
</div>

# Table of Contents <!-- omit in toc -->

- [About](#about)
- [Use cases](#use-cases)
- [Implementation](#implementation)
- [Searching in Arrays](#searching-in-arrays)
  - [Example](#example)
- [Big O](#big-o)
  - [Space Complexity](#space-complexity)
  - [Time Complexity](#time-complexity)

# About

An `Array` is a collection of elements of possibly `many datatypes` stored/allocated in `contiguous memory locations`.

Arrays can be classified into two types:

- `Static Arrays`:

  - Fixed size: their size/length is determined at the time of declaration and cannot be changed at runtime.
  - Contiguous memory allocation: memory is allocated in a single block, making indexing efficient.
  - Efficient but inflexible: cannot grow or shrink dynamically.

- `Dynamic Arrays`:

  - Implemented using pointers: dynamic Arrays use pointers to allocate memory dynamically, typically in the heap, which allows for resizing during runtime. Manual memory management is required, such as using malloc() (for allocation) and free() (for deallocation) in C.
  - Reallocation: dynamic Arrays can grow or shrink at runtime using memory reallocation techniques. When a dynamic Array is resized, the memory needs to be reallocated. In C, this is often done with realloc(), which can resize an Array, potentially moving it to a new memory location and copying the elements over.

Note: a memory heap is a region in memory used for dynamic memory allocation, i.e., to allocate memory for storing, without order, dynamic objects (hash tables, Arrays, functions, etc.) created at run time since they do not have a fixed size/length (is unknown). It enables efficient storage and retrieval of data during a program's execution.

Depending on the programming language, an Array can store a `single (homogeneous)` or `many (heterogeneous)` data types. `Dynamic Arrays` can be either `heterogeneous or homogeneous`, while `Static Arrays` are typically `homogeneous`.

- Dynamically typed languages, such as Python and JavaScript, have only built-in dynamic Arrays, but not true Static Arrays. In Python, dynamic Arrays (lists) are heterogeneous, but some specialized dynamic Arrays (e.g., array.array) enforce homogeneity.

  - In `Python`, available data types include: `str, bool, int, float, complex, list, tuple, set, dict, NoneType, function`, etc.
  - In `JavaScript`, available data types include: `number, string, boolean, undefined, null, symbol, bigint, and object`.

- In statically typed languages, such as C, C++, and C#, Arrays (static or dynamic) are typically homogeneous, meaning that elements must be of the same data type.

  - In `C++`, available data types include: `char, signed char, unsigned char, short int, signed short int, unsigned short int, int, signed int, unsigned int, long int, signed long int, unsigned long int, long long int, signed long long int, unsigned long long int, float, double, bool, wchar_t, and enum`.
  - In `C#`, available data types include: `int, uint, short, ushort, long, ulong, byte, sbyte, float, double, char, bool, string`, `decimal`, `object`, `DateTime`, `TimeSpan`, etc.

# Use cases

Arrays can be used to implement:

- A social media feed.
- Social media stories.
- A memory buffer.
- Queues and Stacks.

Implementing a queue with a linked is more efficient than with Arrays (due to unshifting O(n)) since removing the first element (dequeue) and adding to the end (enqueue) provides constant time complexity O(1).

Implementing a stack with an Array is more efficient than with a liked list since Arrays allow fast access due to cash locality (elements are stored closer to each other in memory as compared to linked lists).

# Implementation

An `Array` can be implemented with a class using a `Hash Table`.

# Searching in Arrays

- If there is a need to perform `multiple searches` on the same Array or if the Array is large, sorting the Array with [merge sort](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/algorithms/03_sorting/5_mergeSort.md), which takes `O(n log n)` time complexity, can be advantageous. This is because, after sorting, it is possible to implement [binary search](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/algorithms/04_searching/2_binarySearch.md) (that uses [divide and conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)) which takes time complexity `O(log n)`, since a sorted Array resembles a [binary search tree](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/data_structures/07_trees/3_binarySearchTree.md).

- If you only need to perform a `single search` or if the Array is small, then the overhead of sorting might not be worth it compared to just doing a [linear search](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/algorithms/04_searching/1_linearSearch.md) which takes time complexity `O(n)`.

## Example

To put this into perspective, suppose the Array has a length of `n=1000`. Sorting the Array with [merge sort](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/algorithms/03_sorting/5_mergeSort.md) takes `O(n log n)~1000x10=10,000 operations`. Then `binary search` on this sorted Array will take `O(log n)~10 operations`, while linear search will take `O(n)=1000 operations`. Then `sorting + binary search` will equate to a total of 10,000 (sort) + 10 (search) = `10,010 operations`.

This means that `linear search` would be more suitable if `only one search` is required.

If `20 or more searches` are required, linear search will equate to a total of 1000x20=20,000 operations, while sort + binary search = 10,000 + 20x10 = 10,200 operations, in which case `sorting becomes advantageous`.

# Big O

## Space Complexity

- **Worst or Average case**: `O(n)`. Because the amount of memory required to store the entire Array is directly proportional to the number of elements in it.

## Time Complexity

Worst and Average cases have the same time complexity for either a static or dynamic Array.

- **Access (lookup-by-index)**: `O(1)`. Because it is possible to access an element directly knowing its index.
- **Search (lookup-by-value)**: `O(n)`. Because it requires iterating through the Array to find the element.
- **Insertion (to the beginning or middle)**: `O(n)`. Because it requires shifting the elements to the right.
- **Deletion (from the beginning or middle)**: `O(n)`. Because it requires shifting the elements to the left.
- **Append/Push (insert to the end)**: `O(1)`.
- **Pop (delete from the end)**: `O(1)`.

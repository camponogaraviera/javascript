# About

An array is a collection of items of possibly many datatypes stored/allocated in contiguous memory locations.

Arrays can be classified into two types:

- `Static Arrays`: are fixed-length data structures. Their size/length is determined at the time of declaration and cannot be changed during runtime.

- `Dynamic Arrays`: are arrays whose size/length can be changed during runtime. Arrays are often implemented using pointers and memory allocation.

Depending on the programming language, an array can store a single (homogeneous) or many (heterogeneous) data types.

- In dynamically typed languages, arrays are heterogeneous, meaning that elements can be of different data types.
  - In `JavaScript`, available data types include: `number, string, boolean, undefined, null, symbol, bigint, and object`.
  - In `Python`, available data types for lists (array equivalent) include: `str, bool, int, float, complex, list, tuple, set, dict, NoneType, function`, etc.

- In statically typed languages, arrays are homogeneous, meaning that elements must be of the same data type.
  -  In `C#`, available data types include: `int, uint, short, ushort, long, ulong, byte, sbyte, float, double, char, bool, string`, `decimal`, `object`, `DateTime`, `TimeSpan`, etc.
  -  In `C++`, available data types include: `char, signed char, unsigned char, short int, signed short int, unsigned short int, int, signed int, unsigned int, long int, signed long int, unsigned long int, long long int, signed long long int, unsigned long long int, float, double, bool, wchar_t, and enum`.

# Use cases

Social media feed, stories, etc.

# Big O

- Static (or dynamic) Array

  - Access (lookup by index): O(1) Because it is possible to access any element directly with its index.
  - Search (lookup by value): O(n) Because it requires iterating through the entire array to find the element.
  - Pop (delete from the end): O(1)
  - Push/Append (insert to the end): O(1)
  - Deletion (from the beginning or middle): O(n) Because it requires shifting the elements to the left.
  - Insertion (to the beginning or middle): O(n) Because it requires shifting the elements to the right.
  - Space Complexity: O(n) Because the amount of memory required to store the entire array is directly proportional to the number of elements (n) in the array.

# Searching in arrays

- If there is a need to perform `multiple searches` on the same array or if the array is large, sorting the array with [merge sort](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/algorithms/03_sorting/5_mergeSort.md), which takes O(n log n) time, can be advantageous. This is because, after sorting, it is possible to implement [binary search](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/algorithms/04_searching/2_binarySearch.md) (that uses [divide and conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)) which takes time complexity O(log n), since a sorted array resembles a [binary search tree](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/data_structures/07_trees/3_binarySearchTree.md).

- If you only need to perform a `single search` or if the array is small, then the overhead of sorting might not be worth it compared to just doing a [linear search](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/algorithms/04_searching/1_linearSearch.md) which takes time complexity O(n).

## Example

To put this into perspective, suppose the array has a length of `n=1000`. Sorting the array with [merge sort](https://github.com/camponogaraviera/ds-and-algo/blob/dev/theory/algorithms/03_sorting/5_mergeSort.md) takes `O(n log n)~1000x10=10,000 operations`. Then `binary search` on this sorted array will take `O(log n)~10 operations`, while linear search will take `O(n)=1000 operations`. Then `sorting + binary search` will equate to a total of 10,000 (sort) + 10 (search) = `10,010 operations`.

This means that `linear search` would be more suitable if `only one search` is required.

If `20 or more searches` are required, linear search will equate to a total of 1000x20=20,000 operations, while sort + binary search = 10,000 + 20x10 = 10,200 operations, in which case `sorting becomes advantageous`.

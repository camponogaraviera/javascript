/*
# Inline Caching

Inline caching is an optimization technique used by modern JavaScript engines (e.g., V8) to speed up (optimize) `property retrieval` and method calls by avoiding redundant lookups. This is achieved by remembering the object's Hidden Class (structure) and caching the result of the first property lookup (such as the resolved location of the property) for subsequent property accesses.

## Comparison 

- Hidden Classes speed up property retrieval by storing the structure of an object (property names, property types, and order of properties). 

- Inline Caching speeds up property retrieval by caching the result of property lookups.

## Features

- The engine caches the Hidden Class (object structure)
- On subsequent accesses, if an object's hidden class remains unchanged, inline caching can directly use the cached result instead of performing a full lookup.
- This optimization is most effective when the structure of the object remains consistent.

## Optimizing for Hidden Classes

1. Use consistent object structure.
2. Avoid adding/removing object properties.
3. Avoid changing property types.
*/

function getX(point) {	
  return [point.x, point.y]; // Uses property retrieval.
}

const p1 = { x: 1, y: 2 }; // Object with two properties of the same data type (Number).
const p2 = { x: 3, y: 4 };

console.log(getX(p1)); // First call: the engine caches the structure of `p1`.
console.log(getX(p1)); // Second call: cache hit, optimized retrieval. The engine uses the cached result.
console.log(getX(p2)); // The engine avoids redundant lookups since `p2` has the same structure (x, y) as `p1`.

const p3 = { y: 5, x: 6 }; // Here, p3 has a different structure (properties added in different order) than p1.
console.log(getX(p3)); // As a result, this may trigger a cache miss and a new lookup.

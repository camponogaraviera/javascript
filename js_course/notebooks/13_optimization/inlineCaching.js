/*
# Inline Caching

Inline caching is an optimization technique used by modern JavaScript engines (e.g., V8) to speed up property lookups and method calls. 
This is achieved by remembering the hidden class (shape, structure) of an object once it is accessed for the first time.

Features:

- The engine caches the shape of an object.
- On subsequent accesses, it can directly jump to the cached result instead of performing a full lookup.
- This works well when the shape and type of the object being accessed remain consistent.

To optimize for inline caching:

1. Use consistent object shapes.
2. Avoid changing the types of properties.
3. Try to maintain object types consistent.
*/

function getX(point) {	
  return [point.x, point.y];
}

let p1 = { x: 1, y: 2 };
let p2 = { x: 3, y: 4 };

console.log(getX(p1)); // First call: the engine caches the shape of `p1`.
console.log(getX(p1)); // Second call: cache hit, optimized lookup. The engine uses the cached result.
console.log(getX(p2)); // The engine can optimize lookup since `p2` has the same shape (x, y) as `p1`.

let p3 = { y: 5, x: 6 }; // Here, p3 has a different shape (properties added in different order) than p1: (y, x).
console.log(getX(p3));   // As a result, this may trigger a cache miss and a new lookup.

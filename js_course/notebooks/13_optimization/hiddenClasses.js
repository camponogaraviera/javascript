/*
# Hidden Classes

Hidden classes is an optimization technique used by modern JavaScript engines (e.g., V8) to speed up property access on objects. JavaScript is a dynamic and flexible language, meaning that object properties can be added, changed, or removed at runtime. This flexibility can make property access slow. Hidden classes help solve this problem by creating an internal representation of the object structure.

Properties:

- When an object is created, the JavaScript engine assigns it a hidden class.
- A new hidden class is created when a property is added, changed or removed from an existing object. This new hidden class holds the information of all the properties of the object.
- Every hidden class contains a memory offset for each property of the object.
- Objects with the same structure (same properties added in the same order) share the same hidden class.

These properties enable the engine to optimize property access by using memory offsets rather than dictionary lookups.

To optimize for hidden classes:

1. Initialize all object properties in the constructor.
2. Always add properties to objects in the same order.
3. Adding properties in a different order results in different hidden classes, which can impact performance.
*/

// Creating a class with a constructor function:
function Point(x, y) {
  // Initialize properties in the constructor in the same order:
  this.x = x;
  this.y = y;
}

// Creating objects with the same hidden class:
let p1 = new Point(1, 2);
let p2 = new Point(3, 4);
// p1 and p2 share the same hidden class because they have the same structure (x, y).

// Adding properties in the same order:
p1.z = 5; // A new hidden class is created for p1 because 'z' is a new property. Here, p1 has properties in the order x, y, z.
p2.z = 6; // p2 now shares the same hidden class as p1 because it has the same structure (x, y, z).

// Adding properties in different order:
p1.a = 7; // A new hidden class is created for p1 because 'a' is a new property. Here, p1 has properties in the order x, y, z, a.
p2.b = 8; // A new hidden class is created for p2, but it is different than p1 since it has different properties than p1. Here, p2 has properties in the order x, y, z, b.

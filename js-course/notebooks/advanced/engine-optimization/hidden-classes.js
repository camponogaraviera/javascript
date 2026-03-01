/*
# Hidden Classes

Hidden Classes is an optimization technique used by modern JavaScript engines (e.g., V8) to speed up (optimize) property access, i.e., both `property assignment` (write access) and `property retrieval` (read access). JavaScript is a dynamic and flexible language, meaning that object properties can be added, changed, or removed at runtime. This flexibility can make property access slow. Hidden Classes help solve this problem by storing the object's structure (property names, property types, and order of properties) enabling the engine to optimize property access by using memory offsets rather than dictionary lookups.

## Features 

- When an object is created, the JavaScript engine assigns it a hidden class. 
- As properties are added to the object, the Hidden Class evolves. The engine updates the Hidden Class (or creates a new one) to reflect the new structure of the object.
- A new hidden class is created when a property is added, changed or removed from an existing object. 
- Every Hidden Class contains a memory offset for each property of the object pointing to the location of that property in memory.
- Objects with the same structure share the same Hidden Class.

## Optimizing for Hidden Classes

1. Initialize all object properties in the constructor.
2. Always add properties to objects in the same order.
3. Adding properties in a different order results in different hidden classes, which can impact performance.
*/

// Creating a class with a constructor function:
function Point(x, y) {
  // Initializing object properties in the constructor:
  this.x = x; // Write Access (property assignment).
  this.y = y;
}

// Creating objects with the same hidden class:
const p1 = new Point(1, 2); // Read Access (property retrieval).
const p2 = new Point(3, 4);
// p1 and p2 share the same hidden class because they have the same structure (x, y).

// Adding properties in the same order:
p1.z = 5; // A new hidden class is created for p1 because 'z' is a new property. Here, p1 has properties in the order x, y, z.
p2.z = 6; // p2 now shares the same hidden class as p1 because it has the same structure (x, y, z).

// Adding properties in different order:
p1.a = 7; // A new hidden class is created for p1 because 'a' is a new property. Here, p1 has properties in the order x, y, z, a.
p2.b = 8; // A new hidden class is created for p2, but it is different than p1 since it has different properties than p1. Here, p2 has properties in the order x, y, z, b.

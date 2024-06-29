// Regular functions (a.k.a factory functions)

function regularFunction(name, age) {
  // Private variable using let:
  let insideVariable = "Hello World!";
  // Returning an object literal with three properties/attributes:
  return {
    attribute1: insideVariable,
    attribute2: name,
    attribute3: age,
  };
}

let result = regularFunction("Alice", 30);
console.log(result);
console.log(result.attribute1);

// ##############################################################

let object = { value: 1 };

function increase(_object) {
  _object.value++;
}

increase(object);
console.log(object.value); // 2

// ##############################################################

function createCircle(radius) {
  // Private variable using let:
  let pi = Math.PI;
  return {
    radius,
    // Public method:
    area: function () {
      return pi * radius ** 2;
    },
  };
}

const circle = createCircle(1);
console.log(circle.area()); // 3.141592653589793

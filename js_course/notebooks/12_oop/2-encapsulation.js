/*
Example of Encapsulation.
*/

// Creating an object using object literal notation:
let car = {
  make: "Toyota",
  color: "red",
  speed: 0,
  drive: function () {
    this.speed = 60;
  },
  stop: function () {
    this.speed = 0;
  },
};

console.log(car.color);
car.drive();
console.log(car.speed);
car.stop();
console.log(car.speed);

// ################################################################

// Creating the same object using a constructor function:
function Car(make, color) {
  this.make = make;
  this.color = color;
  this.speed = 0;
  this.drive = function () {
    this.speed = 60;
  };
  this.stop = function () {
    this.speed = 0;
  };
}

// Creating an instance of the Car object:
let car2 = new Car("Toyota", "red");
console.log(car2.color);
car2.drive();
console.log(car2.speed);
car2.stop();
console.log(car2.speed);

// ################################################################

// Creating the same object using a class:
class Car3 {
  constructor(make, color) {
    this.make = make;
    this.color = color;
    this.speed = 0;
  }
  drive() {
    this.speed = 60;
  }
  stop() {
    this.speed = 0;
  }
}

// Creating an instance of the Car3 class:
let car3 = new Car3("Toyota", "red");
console.log(car3.color);
car3.drive();
console.log(car3.speed);
car3.stop();
console.log(car3.speed);

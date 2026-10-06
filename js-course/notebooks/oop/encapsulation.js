/*
Example of Encapsulation.
*/

// Creating an object using object literal notation:
const car = {
  type: "Formula 1",
  color: "red",
  speed: 0,
  drive: function () {
    this.speed = 100;
  },
  stop: function () {
    this.speed = 0;
  },
};

console.log(car.color); // red
car.drive();
console.log(car.speed); // 100
car.stop();
console.log(car.speed); // 0

// ################################################################

// Creating the same object using a constructor function:
function Car(type, color) {
  this.type = type;
  this.color = color;
  this.speed = 0;
}

Car.prototype.drive = function () {
  this.speed = 100;
};

Car.prototype.stop = function () {
  this.speed = 0;
};

// Creating an instance of the Car object:
const car2 = new Car("Formula 1", "red");
console.log(car2.color); // red
car2.drive();
console.log(car2.speed); // 100
car2.stop();
console.log(car2.speed); // 0

// ################################################################

// Creating the same object using a class:
class Car3 {
  constructor(type, color) {
    this.type = type;
    this.color = color;
    this.speed = 0;
  }
  drive() {
    this.speed = 100;
  }
  stop() {
    this.speed = 0;
  }
}

// Creating an instance of the Car3 class:
const car3 = new Car3("Formula 1", "red");
console.log(car3.color); // red
car3.drive();
console.log(car3.speed); // 100
car3.stop();
console.log(car3.speed); // 0

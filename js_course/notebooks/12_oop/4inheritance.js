/*
Example of Inheritance.
*/

// Parent Class
class SmartRobot {
  constructor(name) {
    this.name = name;
  }

  seek() {
    console.log(`${this.name} is seeking.`);
  }

  recharge() {
    console.log(`${this.name} is recharging.`);
  }
}

// Child Class
class Spot extends SmartRobot {
  constructor(name, type) {
    super(name); // super() is used to call the constructor of the parent class which in this case expects one argument.
    this.type = type;
  }

  introduce() {
    console.log(`I am ${this.name}, a ${this.type} robot!`);
  }
}

let spot = new Spot("Spot", "quadruped");
spot.introduce(); // I am Spot, a quadruped robot!
spot.seek(); // Spot is seeking.
spot.recharge(); // Spot is recharging.

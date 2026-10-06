/*
Example of Inheritance.
*/

// Parent Class:
class SmartRobot {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`I am ${this.name}, a ${this.type} robot!`);
  }

  seek() {
    console.log(`${this.name} is seeking.`);
  }

  recharge() {
    console.log(`${this.name} is recharging.`);
  }
}

// Child Class:
class QuadrupedRobot extends SmartRobot {
  constructor(name) {
    super(name, "quadruped"); // super() is used to call the constructor of the parent class which in this case expects two arguments.
    this.legs = 4;
  }

  walk() {
    console.log(`${this.name} is walking on ${this.legs} legs.`);
  }

}

const spot = new QuadrupedRobot("Spot");
spot.introduce(); // I am Spot, a quadruped robot!
spot.walk(); // Spot is walking on 4 legs.
spot.seek(); // Spot is seeking.
spot.recharge(); // Spot is recharging.

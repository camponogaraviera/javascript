/*
Example of Run-Time Polymorphism (Method Overriding). In the following snippet, Polymorphism will override the introduce() method of the Parent class.
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

  introduce() {
    // Override the introduce() method to add more specific details:
    console.log(`I am ${this.name}, a quadruped robot with ${this.legs} legs!`);
  }

  walk() {
    console.log(`${this.name} is walking on ${this.legs} legs.`);
  }

}

const spot = new QuadrupedRobot("Spot");
spot.introduce(); // I am Spot, a quadruped robot with 4 legs!
spot.walk(); // Spot is walking on 4 legs.
spot.seek(); // Spot is seeking.
spot.recharge(); // Spot is recharging.

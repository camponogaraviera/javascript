/*
Example of Run-Time Polymorphism (Method Overriding).
In the following snippet, Polymorphism will override the seek method of the Parent class.
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
    super(name); // Running the parent constructor and passing the required attributes.
    this.type = type;
  }

  seek() {
    console.log(
      `${this.name} of type ${this.type} is overriding its parent seek method.`,
    );
  }
}

let spot = new Spot("Spot", "quadruped");
spot.seek(); // Spot of type quadruped is overriding its parent seek method.
spot.recharge(); // Spot is recharging.

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
//console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 30);
//console.log(john.name); // John

//Protypal chain

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

Array.prototype.hitesh = function () {
  return `custom method ${this}`;
};

let myarray = [1, 2, 3];
console.log(myarray.hitesh());
let myarray2 = [4, 5, 6];
//console.log(myarray2.hitesh());

class vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.make} ${this.model} started`;
  }
}

class Car extends vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
  }
  start() {
    return `${this.make} ${this.model} started in ${this.year}`;
  }
}

let myCar = new Car("Toyota", "Corolla", 2021);
//console.log(myCar.start());

let vehOne = new vehicle("Toyota", "Corolla", 2021);
//console.log(vehOne.start());

//Encaptulation
class PersonEncap {
  #name; // private field
  #age; // private field

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }
}
let johnEncap = new PersonEncap("John", 30);
//console.log(johnEncap.getName()); // John

//Abstraction

class coffeeMachine {
  start() {
    //call db
    //filter value
    return `Starting the machine...`;
  }
  brewedCoffee() {
    // Complex calculation
    return `Brewing coffee...`;
  }
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewedCoffee();
    return `${msgOne} and ${msgTwo}`;
  }
}

let myCoffeeMachine = new coffeeMachine();
// console.log(myCoffeeMachine.start());
// console.log(myCoffeeMachine.brewedCoffee());

// console.log(myCoffeeMachine.pressStartButton());

//Polymorphism
class Bird {
  fly() {
    return ` Bird is flying`;
  }
}

class PEnguin extends Bird {
  fly() {
    return `Penguin cannot fly`;
  }
}

let bird = new Bird();
let Penguin = new PEnguin();
// console.log(bird.fly());
// console.log(Penguin.fly());

//Static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
}

// let minicalc = new Calculator();
// console.log(minicalc.add(5, 10));

//console.log(Calculator.add(5, 10));

//getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      console.log("Salary cannot be negative");
      return;
    }

    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return this._salary;
  }

  set salary(value) {
    if (value < 0) {
      console.log("Salary cannot be negative");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee("John", 50000);
console.log(emp._salary);

emp.salary = -60000;

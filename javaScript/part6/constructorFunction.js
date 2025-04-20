function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Corolla");
//console.log(myCar);

let myNewCar = new Car("Honda", "Civic");
//console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type} tea.`;
  };
}

let lemonTea = new Tea("Lemon");
console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink is a constructor and should be called with 'new'");
  }
  this.name = name;
}
let coffee = new Drink("coffee");
let tea = Drink("tea");
//console.log(coffee.name);

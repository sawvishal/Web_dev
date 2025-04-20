const person = {
  name: "Hitesh",

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "John" });
boundGreet(); // Hello, my name is John

//

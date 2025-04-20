let computer = { cpu: 12 };
let lenevo = { screen: "hd", __proto__: computer };
let tomHardware = {};

//console.log(`lenevo `, lenevo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar); // setPrototypeOf is used to set the prototype of an object to another object
console.log(`tesla`, tesla); // 4

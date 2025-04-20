// for-of loop

let teaType = ["chai", "iced tea", "matcha", "earl grey"];
let prefferedTea = [];

for (const tea of teaType) {
  if (tea === "matcha") {
    continue;
    prefferedTea.push(tea);
  }
  prefferedTea.push(tea);
}
//console.log(prefferedTea);

// for-in loop
let cityPopulation = {
  Mumbai: 20,
  Sydney: 5,
  Berlin: 3,
  paris: 4,
};

let totalPopulation = {};
// console.log(Object.keys(cityPopulation)); // [ 'Mumbai', 'Sydney', 'Berlin', 'paris' ]

for (const cities in cityPopulation) {
  // console.log(cityPopulation[city]);
}

// forEach loop
let teaCollection = ["chai", "iced tea", "matcha", "earl grey"];
let availableTea = [];

teaCollection.forEach(function (tea) {
  if (tea === "matcha") {
    return;
  }
  availableTea.push(tea);
});
//console.log(availableTea);

let worldCities = ["Mumbai", "Sydney", "Berlin", "paris"];
let cityList = [];
worldCities.forEach(function (city) {
  if (city === "Berlin") {
    return;
  }

  cityList.push(city);
});
//console.log(cityList);

let n = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < n.length; i++) {
  if (n === 7) {
    continue;
  }
  doubledNumbers.push(n[i] * 2);
}
console.log(doubledNumbers);

//for-of loop

let chaiList = [
  "chai",
  "iced tea",
  "matcha",
  "hearbal avgss",
  "earl grey",
  "green tea",
];
let shortTeas = [];
for (const chai of chaiList) {
  if (chai.length > 10) {
    break;
  }
  shortTeas.push(chai);
}
console.log(shortTeas);

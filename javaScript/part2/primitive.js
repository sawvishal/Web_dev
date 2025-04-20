// Number

let balance = 120;
// let anotherBalance = new Number(120); // Object wrapper for number
// console.log(balance); // 120
// console.log(typeof balance); // number
// // console.log(anotherBalance); // [Number: 120]

// console.log(typeof balance); // number

//Boolean
let isActive = true;
//let anotherIsActive = new Boolean(true); // Object wrapper for boolean Not recomended

// Null and undefined

let firstName = null;
let lastName = undefined;
//console.log(lastName); // undefined
// undefined
//String

let myString = "Hey!";
let myString2 = "hola";
let username = "John Doe";

let oldGreet = myString + " " + username; // Concatenation
//console.log(oldGreet); // Hey! John Doe

let greetMessage = `Hello ${username}, welcome to the world of JavaScript!`;
//console.log(greetMessage); // Hello John Doe, welcome to the world of JavaScript!

let sm1 = Symbol("sm1"); // Symbol is a primitive data type
let sm2 = Symbol("sm1"); // Symbol is a primitive data type

console.log(sm1 == sm2);

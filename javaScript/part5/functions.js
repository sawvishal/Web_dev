//1.

function makeTea(typeOfTea) {
  return `Making ${typeOfTea} `;
  // console.log(test);
}
let teaOrder = makeTea("lemon tea");
console.log(teaOrder); // Making lemon tea

// 2. Function with default parameter

function orderTea(teaType) {
  function confirmOrder() {
    return `Order Confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea();
console.log(orderConfirmation);

// 3. Arrow function

const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal(100, 50);
console.log(totalCost); // 5000

// 4. High Order Function

function makeTea(tupeOftea) {
  return `maketea: ${tupeOftea}`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
//console.log(order); // Making earl grey tea

// 5. Function Expression

function second() {}
function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
console.log(teaMaker("green Tea")); // Making Green tea

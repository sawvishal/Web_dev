// && -> AND
// || -> OR
// ! -> NOT
// ! -> reverse the value of a boolean

let isloggedIn = true;
let isAdmin = false;

console.log(isloggedIn && isAdmin); // false (both conditions must be true)

let isUser = true;
let isGuest = false;

console.log(isUser || isGuest); // true (at least one condition must be true)

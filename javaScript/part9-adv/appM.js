// module Import file

// default import

import multiply from "./mathOperations.js";

//named import
import { add, subtract } from "./mathOperations.js";

console.log(multiply(2, 3)); // 6
console.log(add(2, 3)); // 5
console.log(subtract(2, 3)); // -1

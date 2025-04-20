function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = numberGenerator();
let genTwo = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1

console.log(genTwo.next().value); // 1
console.log(genTwo.next().value); // 1

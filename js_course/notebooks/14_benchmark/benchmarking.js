import Benchmark from "benchmark";

function reduce(array) {
  return array.reduce((acc, value, i) => {
    acc[i] = value + i;
    return acc;
  }, {});
}

function forOfLoop(array) {
  const result = {};
  for (let [i, value] of array.entries()) {
    result[i] = value + i;
  }
  return result;
}

function forLoop(array) {
  const result = {};
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i] + i;
  }
  return result;
}

function onCycle(event) {
  console.log(String(event.target));
}

function onComplete() {
  console.log(`The fastest function is: ${this.filter("fastest").map("name")}`);
}

function benchmarkSuite(array) {
  return new Benchmark.Suite("arrayMethods")
    .add("reduce()", () => reduce(array))
    .add("forOfLoop()", () => forOfLoop(array))
    .add("forLoop()", () => forLoop(array))
    .on("cycle", (event) => onCycle(event))
    .on("complete", onComplete)
    .run({ async: true });
}

const testArray = Array.from({ length: 10000 }, (_, i) => i + 1);
benchmarkSuite(testArray);

/*
reduce() x 5,821 ops/sec ±3.87% (91 runs sampled)
forOfLoop() x 4,181 ops/sec ±2.28% (93 runs sampled)
forLoop() x 6,200 ops/sec ±0.45% (94 runs sampled)
The fastest function is: forLoop()
*/

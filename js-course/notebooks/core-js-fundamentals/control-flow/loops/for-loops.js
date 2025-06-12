let array = [1, 2, 3];

console.log("\nfor (let i = 0; i < array.length; i++)");

for (let i = 0; i < array.length; i++) console.log(array[i]);

console.log("for (let item of array)");

for (let item of array) console.log(item);

console.log("for (let index in array)");

for (let index in array) console.log(index);

console.log("array.forEach()");

array.forEach(function (element) {
  console.log(element);
});

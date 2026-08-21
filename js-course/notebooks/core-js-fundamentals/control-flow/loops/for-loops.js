const array = [1, 2, 3]; // Arrays were introduced in 2.1 and later in 2.5.1.

console.log("\nfor (let i = 0; i < array.length; i++)");

for (let i = 0; i < array.length; i++) console.log(array[i]);

console.log("for (let item of array)");

for (let item of array) console.log(item);

console.log("for (const [index, value] of array.entries())");

for (const [index, value] of array.entries()) console.log(index, value);

console.log("array.forEach()");

array.forEach(function (element) {
  console.log(element);
});

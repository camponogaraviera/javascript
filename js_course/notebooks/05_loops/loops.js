// For loops
let array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
  console.log(i);
  console.log(array[i]);
}

console.log("End of the 1st loop.");

for (let item of array) {
  console.log(item);
}

console.log("End of the 2nd loop.");

for (let index in array) {
  console.log(array[index]);
}

console.log("End of the 3rd loop.");

array.forEach(function (element) {
  console.log(element);
});

console.log("End of the 4th loop.");

// While

while (array.length !== 0) {
  array.shift();
  console.log(array);
}

console.log("End of the 5th loop.");

// Break

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break; // Exit the loop.
  }
}

console.log("End of the 6th loop.");

// While and Break

let i = 0;
while (i < 10) {
  i++;
  if (i === 5) {
    break; // Exit the loop.
  }
  console.log(i);
}

console.log("End of the 7th loop.");

// Continue

i = 0;
while (i < 10) {
  i++;
  if (i === 5) {
    continue; // Skip iteration when i is 5.
  }
  console.log(i);
}

console.log("End of the 8th loop.");

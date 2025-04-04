let myObj = { x: 1 };

if (!myObj.x) {
  throw new Error("myObj is not defined.");
} else {
  console.log(`myObj.x is defined with type ${typeof myObj.x}.`);
}

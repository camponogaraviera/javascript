/*
// The following values are falsy:
Boolean(false)     // false
Boolean(0)         // false
Boolean('')        // false
Boolean(null)      // false
Boolean(undefined) // false
*/

// # if-elseif-else

if (process.env.NODE_ENV === "development") {
  console.log("Under development.");
} else if (process.env.NODE_ENV === "production") {
  console.log("In production.");
} else {
  console.log("In testing.");
}

// ##############################

let myObj = { x: 10, y: -20 };

/*
if (myObj.x < 0 && myObj.y < 0) {
  console.log(`Both x: ${myObj.x} and y: ${myObj.y} are negative.`);
} else if (myObj.x < 0) {
  console.log(`x: ${myObj.x} is negative, but y: ${myObj.y} is positive.`);
} else if (myObj.y < 0) {
  console.log(`x: ${myObj.x} is positive, but y: ${myObj.y} is negative.`);
} else {
  console.log(`Both x: ${myObj.x} and y: ${myObj.y} are positive.`);
}
*/

if (myObj.x > 0 && myObj.y > 0) {
  console.log(`Both x: ${myObj.x} and y: ${myObj.y} are positive.`);
} else if (myObj.x > 0) {
  console.log(`x: ${myObj.x} is positive, but y: ${myObj.y} is negative.`);
} else if (myObj.y > 0) {
  console.log(`x: ${myObj.x} is negative, but y: ${myObj.y} is positive.`);
} else {
  console.log(`Both x: ${myObj.x} and y: ${myObj.y} are negative.`);
}

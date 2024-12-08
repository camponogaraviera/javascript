/*
In the example below, the Conditional, a.k.a Ternary operator, sets the value of statusCode to '400' if err is truthy, otherwise, it sets it to '200' if falsy.
*/

let err = false;
let statusCode = err ? "400" : "200";
console.log(statusCode); // Output: 200
/*
Equivalent python expression:
statusCode = '400' if err else: '200'
*/

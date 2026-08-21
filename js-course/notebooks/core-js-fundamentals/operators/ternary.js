// Ternary Operator.

const err = false;
const statusCode = err ? 400 : 200; // If err is true, statusCode is 400, otherwise it is 200.
console.log(`Status Code: ${statusCode}`); // 200
/*
Equivalent if-else expression:
if (err) {
  statusCode = 400;
} else {
  statusCode = 200;
}

Equivalent Python expression:
statusCode = 400 if err else 200
*/

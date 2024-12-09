/*
The general form of a switch statement is composed of case clauses as follows:

switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default:
    statements
}

The default statement is executed if none of the case clauses (case caseExpression) match the value defined by `expression`.
*/

// Check whether a number is negative, zero or positive:

let number = -1;
switch (true) {
case (number < 0):
  console.log("The number is negative.");
  break;
case (number === 0):
  console.log("The number is zero.");
  break;
case (number > 0):
  console.log("The number is positive.");
  break;
default:
  console.log("Invalid input.");
}

// Check whether a number is integer, float or NaN:

number = 2.3;
switch (true) {
case isNaN(number):
  console.log("The number is NaN.");
  break;
case Number.isInteger(number):
  console.log("The number is integer.");
  break;
case typeof number === "number":
  console.log("The number is float.");
  break;
default:
  console.log("Invalid input.");
}

// Using a fall-through case:

let day = "saturday";
switch (day) {
case "monday":
case "tuesday":
case "wednesday":
case "thursday":
case "friday":
  console.log("Working day.");
  break;
case "saturday":
case "sunday":
default:
  console.log("Weekend.");
}

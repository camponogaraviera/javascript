// Exporting in ES6 syntax using the `export` keyword:

// Exporting a regular function:
export function regularFunction() {
  return {
    attribute1: "Regular Function exported in ES6!",
  };
}

// ####################################################################

// Exporting an arrow function without the return statement:
export const arrowFunction = () => {
  let insideVariable = "Arrow Function exported in ES6!";
  console.log(insideVariable);
};

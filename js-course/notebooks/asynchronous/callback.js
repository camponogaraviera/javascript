/*
Example of an asynchronous operation using a callback function.

A callback function is a function passed into another function as an argument.
Note: A callback does not convert a synchronous operation into an asynchronous one.
*/

// Callback function using arrow function syntax:
const callback = (user) => {
  console.log("User:", user);
};

// Asynchronous function using regular function syntax:
function asyncFunction(id, callbackFn) {
  // setTimeout simulates an asynchronous operation.
  setTimeout(() => {
    console.log(
      "Fetching user from database. This was displayed after 1 second.",
    );
    callbackFn({ id, name: "Bob" }); // The callback returns the result.
  }, 1000); // Await for 1 second (1000 miliseconds).
}

const id = 2; // Declaring the id variable.
console.log("before");
asyncFunction(id, callback); // This asynchronous function is scheduled to be called after 1 sec.
console.log("after");

/*
Output:
before
after
Fetching user from database. This was displayed after 1 second.
User: { id: 2, name: 'Bob' }
*/

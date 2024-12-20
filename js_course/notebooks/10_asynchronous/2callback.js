/*
Example of an asynchronous operation using a callback function.

A callback function is a function passed into another function as an argument.
Note: A callback does not convert a synchronous operation into an asynchronous one.
*/

// Callback function using arrow function syntax and function annotation:

/**
 * Logs the user object to the console.
 * 
 * @param {Object} user - The user object containing details of the user.
 * @param {number|string} user.id - The user's ID.
 * @param {string} user.name - The user's name.
 * 
 * @returns {void} - This function does not return a value.
 */
const callback = (user) => {
  console.log("User:", user);
};

// Asynchronous function using regular function syntax and function annotation:

/**
 * Simulates fetching a user from a database asynchronously.
 * 
 * @param {number|string} _id - The ID of the user to fetch.
 * @param {Function} _callback - The callback function that is called after fetching the user.
 * The callback receives an object containing the user's ID and name.
 * 
 * @returns {void} - This function does not return a value. It invokes the callback once the asynchronous operation is complete.
 */
function asyncFunction(_id, _callback) {
  // setTimeout simulates an asynchronous operation.
  setTimeout(() => {
    console.log(
      "Fetching user from database. This was displayed after 1 second."
    );
    _callback({ id: _id, name: "Lucas" }); // The callback returns the result.
  }, 1000); // Await for 1 second (1000 miliseconds).
}

const id = 2; // Declaring the id variable

console.log("before");
asyncFunction(id, callback); // This asynchronous function is scheduled to be called after 1 sec.
console.log("after");

/*
Output:
before
after
Fetching user from database. This was displayed after 1 second.
User: { id: 2, name: 'Lucas' }
*/

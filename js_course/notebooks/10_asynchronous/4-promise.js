/*
A promise is an object that holds the eventual success or failure of an asynchronous operation.
A promise is an alternative way to named functions to avoid the callback hell problem.
Note: A promise does not convert a synchronous operation into an asynchronous one.

A promise has three possible states:

1) Pending: starting state.
2) Fulfilled: whether it was successful or not.
3) Rejected.

Ps: .then(callback) is only called in a resolve promise.

*/

const promise = new Promise((resolve, reject) => {
  /*
	The promise constructor takes a function as an argument.
	This function takes two parameters: resolve and reject.
	Start asynchronous work here.
	Use resolve(value) to return a successful result.
	Use reject(error) to return an error.
	*/
  setTimeout(() => {
    const success = true;
    if (!success) {
      reject(new Error("Error message!"));
    }
    resolve("First promise finished with success!");
  }, 1000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

////////////////////////////////////////////////////////////

const getUser = (username) => {
  // The fetch function itself returns a promise. There is no need for a promise constructor.
  const API_URL = `https://api.github.com/users/${username}`;
  return fetch(API_URL).then((response) => response.json()); // Returns a promise.
  /*
		.catch((error) => {
			// Handle network errors, fetch errors, or JSON parsing errors:
			console.error(`Second promise error: ${error.message}!`);
			throw error; // Re-throw the error to propagate it to the next catch block, if any.
		  });
		*/
};

let promise2 = getUser("camponogaraviera");
console.log("Second promise status:", promise2); // Second promise status: Promise { <pending> }

// Consuming the promise.
promise2
  .then((gitInfo) => {
    console.log(gitInfo);
    console.log("Second promise finished with success!");
  })
  .catch((error) => console.error(`Second promise error: ${error.message}!`));

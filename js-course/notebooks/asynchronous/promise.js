/*
A promise is an object that holds the eventual success or failure of an asynchronous operation.
A promise is an alternative way to named functions to avoid the callback hell problem.
Note: A promise does not convert synchronous operations into asynchronous ones.

A promise has three possible states:

1) Pending: starting state.
2) Fulfilled: whether it was successful or not.
3) Rejected.

Note1: A try/catch block is only used for async/await. A promise is chained with .then().catch() instead.

Note2: .then(callback) is only called if the promise is resolved successfully (fulfilled).
*/

function delay(ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    /*
    The promise constructor takes a function as an argument.
    This function takes two parameters: resolve and reject.
    Use resolve(value) to return a successful result.
    Use reject(error) to return an error.
    */
    // Start asynchronous work:
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`Delay failed after ${ms}ms`));
        return;
      }
      resolve(`Function delay() finished with success after ${ms}ms.`);
    }, ms);
  });
}

delay(1000) // Call the function to start the asynchronous work.
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));

////////////////////////////////////////////////////////////

const getUser = (username) => {
  // Guard against invalid usernames:
  if (typeof username !== "string" || username.trim() === "") {
    throw new TypeError("Username must be a non-empty string!");
  }
  // The fetch function itself returns a promise. There is no need for a promise constructor.
  const API_URL = `https://api.github.com/users/${username}`;
  return fetch(API_URL).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }); // Returns a promise.
};

const username = "camponogaraviera";
const userPromise = getUser(username); // Calling the async function returns a Promise.

// Debugging (for development only, and should removed in production or guarded behind a debug flag):
console.log("userPromise status:", userPromise); // userPromise status: Promise { <pending> }

// Using .then() to consume the Promise returned by getUser() and .catch() to handle errors:
userPromise
  .then((gitInfo) => {
    console.log(gitInfo);
    console.log("userPromise fulfilled with success!");
  })
  .catch((error) =>
    console.error(
      `Failed to fetch GitHub user "${username}": ${error.message}`,
    ),
  );

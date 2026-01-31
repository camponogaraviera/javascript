/*
Async and Await were introduced in ECMAScript 2017 (ES8). They are syntactic sugars used to write asynchronous functions as if they were synchronous. 
They provide an alternative way to the promise syntax and like promises, they do not convert synchronous operations into asynchronous ones.

The `await` keyword is used to replace ".then" in promise().then(callback) when consuming the promise, i.e., it gets the result of the promise.
When `await` is used inside a function, that function has to be decorated with `async`. 

- Before ES13, the `await` keyword could only be used inside asynchronous functions.
- After ES13, the `await` keyword can be used at the top level, i.e., outside the async function (in the global scope). 

Note: Even though top level await does not block the event loop, it will pause the execution of this module until the awaited promise settles (either fulfilled or rejected).
*/

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const ms = 1000; // 1 second.

// Wrapping await inside an async IIFE (Immediately Invoked Function Expression) to avoid blocking module execution (top-level await is shown later).

(async () => {
  try {
    await delay(ms);
    console.log(`Function delay() finished with success after ${ms}ms.`);
  } catch (err) {
    console.error(err);
  }
})();

////////////////////////////////////////////////////////////

// The getUser() function is decorated with the `async` keyword since it uses the `await` keyword inside its body.

const getUser = async (username) => {
  // Guard against invalid usernames:
  if (typeof username !== "string" || username.trim() === "") {
    throw new TypeError("Username must be a non-empty string!");
  }
  // Using a try-catch block to handle situations where the fetch request itself fails due to network issues (e.g., the user is offline, the server is unreachable, etc.).
  try {
    const API_URL = `https://api.github.com/users/${username}`;
    const response = await fetch(API_URL); // The `await` keyword is used to resolve the Promise returned by the `fetch` operation which is an asynchronous function.

    // Checking for unsuccessful (non-2xx) HTTP responses, i.e., if the response status is out of the range 200–299. Without the !response.ok check, you could end up working with a successful promise even when the server returns an error status (e.g., 404 or 500).
    if (!response.ok) {
      // Throwing an error if the request is unsuccessful.
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parsing the response body as JSON. This is also an asynchronous operation and, therefore, `await` is needed.
    const data = await response.json();

    // Returning the parsed JSON data. Since `getUser` is an `async` function, it implicitly returns a Promise.
    return data;
  } catch (error) {
    // The catch block handles network failures.
    // Logging the error for debugging purposes.
    console.error("getUser failed:", error);
    throw error; // Propagate the error to the caller or next try-catch block.
  }
};

const username = "camponogaraviera";
const userPromise = getUser(username); // Calling the async function returns a Promise.

// Debugging (for development only, and should removed in production or guarded behind a debug flag):
console.log("userPromise status:", userPromise); // userPromise status: Promise { <pending> }

try {
  const gitInfo = await userPromise; // Using top-level await (ES13) to consume the Promise returned by getUser().
  console.log(gitInfo);
  console.log("userPromise fulfilled with success!");
} catch (error) {
  console.error(`Failed to fetch GitHub user "${username}": ${error.message}`);
}
// Note: The `throw error;` line inside the catch block of getUser propagates to this try-catch block.

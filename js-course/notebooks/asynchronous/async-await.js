/*

Async and Await were introduced in ECMAScript 2017 (ES8). They are syntactic sugars used to write asynchronous functions as if they were synchronous. 
They provide an alternative way to the promise syntax.

The `await` keyword is used to replace ".then" in promise().then(callback) when consuming the promise, i.e., it gets the result of the promise.

- Before ES13, the `await` keyword could only be used inside an asynchronous function.
- After ES13, the `await` keyword can be used at the top level, i.e., outside the async function (in the global scope).

When `await` is used inside a function, that function has to be decorated with `async`. 
*/

const getUser = async (username) => {
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
    console.error(error.message);
    // Optionally, uncomment the next line to propagate the error.
    //throw error;
  }
};

let result = await getUser("camponogaraviera"); // Await is used to resolve the Promise returned by the getUser function.
if (result) {
  console.log(result);
  console.log("Success!");
}

/*

Async and Await were introduced in ECMAScript 2017 (ES8). They are syntactic sugars used to write asynchronous functions as if they were synchronous. They provide an alternative way to the promise syntax.

The `await` keyword is used to replace ".then" in promise().then(callback). It gets the result of the promise.

- Before ES13, the `await` keyword could only be used inside an asynchronous function.
- After ES13, the `await` keyword can be used at the top level, i.e., outside the async function (in the global scope).

When `await` is used inside a function, that function has to be decorated with `async`. 
*/
  
const getUser = async (username) => {
  try {
    const API_URL = `https://api.github.com/users/${username}`;
    const response = await fetch(API_URL); // The `await` keyword is used to resolve the Promise returned by the `fetch` operation (which is an asynchronous function).

    // Checking for unsuccessful (non-2xx) HTTP responses, i.e., if the response status is out of the range 200–299:
    if (!response.ok) { 
      // Throws an error if the request is unsuccessful:
      throw new Error(`Error: ${response.status} ${response.statusText}`); 
    }
    
    // Parses the response body as JSON. This is also an asynchronous operation, so `await` is needed.
    const data = await response.json(); 

    // Returning the parsed JSON data. Since `getUser` is an `async` function, it implicitly returns a Promise.
    return data; 
  } catch (error) {               
    // The catch block handles network failures.
    // Logging the error for debugging purposes:
    console.error(error.message); 
    // Optionally, uncomment the next line to propagate the error:
    //throw error;                
  }
};

let result = await getUser("camponogaraviera"); // Await is used to resolve the Promise returned by the getUser function.
if (result) {
  console.log(result);
  console.log("Success!");
}

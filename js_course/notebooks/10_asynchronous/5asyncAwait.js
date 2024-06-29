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
    const response = await fetch(API_URL); // The await keyword is used to retrieve the results of the async op.
    const data = response.json();
    return data; // Returns a promise.
  } catch (error) {
    console.error(error.message);
    //throw error.message;
  }
};

let result = await getUser("camponogaraviera");
if (result) {
  console.log(result);
  console.log("Success!");
}

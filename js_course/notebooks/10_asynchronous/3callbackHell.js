/*
A callback hell is a situation where callbacks are nested within other callbacks several levels deep.
This renders the code difficult to understand.

One way to avoid a callback hell is to use named functions instead of anonymous functions.
*/

// Example of an asynchronous function with a Callback hell structure using anonymous functions:
console.log("Running asynchronous version.");
const user_id = 2;
firstAsync(user_id, (user) => {
  secondAsync(user.name, (repos) => {
    thirdAsync(repos[0], (commit) => {
      console.log(`First commit message: ${commit}.`);
    });
  });
});

// Defining the asynchronous functions:
function firstAsync(_user_id, callback) {
  setTimeout(() => {
    console.log("Fetching user from database.");
    const user = { id: _user_id, name: "camponogaralucas" };
    callback(user); // The callback returns the result.
  }, 1000); // Await for 1 second (1000 milisecond).
}

function secondAsync(username, callback) {
  setTimeout(() => {
    console.log(`Fetching repos from ${username}.`);
    const repos = [{ commit1: "init", commit2: "up" }, { commi1: "init" }];
    callback(repos); // The callback returns the result.
  }, 1000); // Await for 1 second (1000 milisecond).
}

function thirdAsync(repo, callback) {
  setTimeout(() => {
    console.log(`Found repo1 containing ${Object.keys(repo).length} commits.`);
    const commit = repo.commit1;
    callback(commit); // The callback returns the result.
  }, 1000); // Await for 1 second (1000 milisecond).
}

/*
The same asynchronous function in a synchronous way:
const user = firstAsync(user_id);
const repos = secondAsync(user.name);
const commit = thirdAsync(repos[0]);
console.log(`First commit message: ${commit}.`);
*/

// Example of a Callback hell structure with named functions:
console.log("Running synchronous-like version.\n");
firstAsync(user_id, getRepo);

function getRepo(user) {
  secondAsync(user.name, getCommit);
}

function getCommit(repos) {
  thirdAsync(repos[0], displayCommit);
}

function displayCommit(commit) {
  console.log(`First commit message: ${commit}.`);
}

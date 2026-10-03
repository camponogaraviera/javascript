/*
A callback hell is a situation where callbacks are nested within other callbacks several levels deep.
This renders the code difficult to understand.

One way to avoid a callback hell is to use named functions instead of anonymous functions.
*/

// Example of an asynchronous function with a Callback hell structure using anonymous functions:

console.log("Running asynchronous version.");
const userId = 2;
fetchUserById(userId, (user) => {
  fetchUserRepositories(user.name, (repos) => {
    fetchRepositoryCommit(repos[0], (commit) => {
      console.log(`First commit message: ${commit}.`);
    });
  });
});

/*
The inline callbacks (user) => { ... }, (repos) => { ... }, and (commit) => { ... } are anonymous functions because they are unnamed.
*/

// Defining the asynchronous functions:

function fetchUserById(userId, callback) {
  setTimeout(() => {
    console.log("Fetching user from database...");
    const mockUserData = { id: userId, name: "camponogaralucas" };
    callback(mockUserData); // The callback returns the result.
  }, 1000); // Await for 1 second (1000 milisecond).
}

function fetchUserRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Fetching repos from ${username}.`);
    const mockReposData = [
      { commit1: "init", commit2: "up" },
      { commit1: "init" },
    ];
    callback(mockReposData); // The callback returns the result.
  }, 1000); // Await for 1 second (1000 milisecond).
}

function fetchRepositoryCommit(repo, callback) {
  setTimeout(() => {
    console.log(`Found repo1 containing ${Object.keys(repo).length} commits.`);
    const commit = repo.commit1 || "No commits available";
    callback(commit); // The callback returns the result.
  }, 1000); // Await for 1 second (1000 milisecond).
}

/*
The same asynchronous function in a synchronous way:

const user = fetchUserById(user_id);
const repos = fetchUserRepositories(user.name);
const commit = fetchRepositoryCommit(repos[0]);
console.log(`First commit message: ${commit}.`);
*/

// Example of how to avoid a Callback hell structure using named functions:

console.log("Running synchronous-like version.\n");
fetchUserById(userId, getRepos);

function getRepos(user) {
  fetchUserRepositories(user.name, getCommit);
}

function getCommit(repos) {
  fetchRepositoryCommit(repos[0], displayCommit);
}

function displayCommit(commit) {
  console.log(`First commit message: ${commit || "No commits found"}.`);
}

// The following are not available in ES6:

console.log(__filename);
console.log(__dirname);
console.log(module);

if (require.main === module) {
  console.log("This is the main module of the application");
}

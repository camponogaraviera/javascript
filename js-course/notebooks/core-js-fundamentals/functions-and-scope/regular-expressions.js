/* Regular Expressions (regex) */

// Create a regular expression to match email addresses:
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function checkEmail(emailAddress) {
  if (emailRegex.test(emailAddress)) {
    console.log(`Valid email address: ${emailAddress}`);
  } else {
    console.log(`Invalid email address: ${emailAddress}`);
  }
}

// Test if a string is a valid email address:
let email1 = "name$@example.com";
let email2 = "name@example.com";

checkEmail(email1);
checkEmail(email2);

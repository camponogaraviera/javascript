/* Regular Expressions (regex) */

// Create a simple regular expression to match email addresses (demo only, not full validation):
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function checkEmail(emailAddress) {
  if (emailRegex.test(emailAddress)) {
    console.log(`Valid email address: ${emailAddress}`);
  } else {
    console.log(`Invalid email address: ${emailAddress}`);
  }
}

// Test if a string is a valid email address:
const email1 = "name$@example.com";
const email2 = "name@example.com";

checkEmail(email1);
checkEmail(email2);

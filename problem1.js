// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

function reverse(oldStr) {
  let newStr = "";
  for (let i = oldStr.length - 1; i >= 0; i--) {
    newStr += oldStr[i];
  }
  return newStr;
}

console.log(reverse("dlrow olleh"));

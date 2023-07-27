// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function positive_number(sum) {
  let number = 0;
  for (i = 0; i < sum.length; i++) {
    if (sum[i] > 0) {
      number += sum[i];
    }
  }

  return number;
}

console.log(positive_number([-2, -5, -10, -3, 7]));

// Write a JavaScript program to find the most frequent element in an array and return it.
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function most_freq(arr) {
  const mostFreq = {};
  let maxNumber = arr[0];
  let maxCount = 1;

  for (let i = 0; i < arr.length; i++) {
    const index = arr[i];
    if (mostFreq[index]) {
      mostFreq[index]++;
    } else {
      mostFreq[index] = 1;
    }

    if (mostFreq[index] > maxCount) {
      maxNumber = index;
      maxCount = mostFreq[index];
    }
  }
  return maxNumber;
}

console.log(most_freq([3, 5, 2, 5, 3, 3, 1, 4, 5]));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestArray(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements.";
  }

  let smallest = arr[0];
  let secondSmallest = null;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element < smallest) {
      secondSmallest = smallest;
      smallest = element;
    } else if (element < secondSmallest || secondSmallest === null) {
      secondSmallest = element;
    }
    if (secondSmallest === null) {
      return " no second element";
    }
  }

  return secondSmallest;
}

console.log(secondSmallestArray([6, 3, 8, 9, 10, 1]));

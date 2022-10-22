const nums = [3,2,4,8,2,1];
var target = 7;

// question
// return the index of two numbers that add up to target

/* The below code is a function that takes in an array of numbers and a target number. It then loops
through the array and adds each number to every other number in the array. If the sum of the two
numbers is equal to the target number, it returns the indices of the two numbers. */
var twoSum = function (numarr, target) {
  for (let i = 0; i < numarr.length; i++) {
    let num1 = numarr[i];
    for (let j = i + 1; j < numarr.length; j++) {
      let num2 = numarr[j];
      if (num1 + num2 == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target))
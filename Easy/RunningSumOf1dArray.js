/*

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

*/

/**
 * We're looping through the array, and adding the current value to the previous value, and storing the
 * result in a new array.
 */

const arr = [1, 2, 3, 4];
let temp;
function runningSum(nums) {
  let results = [];
  results[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    results[i] = nums[i] + results[i - 1];
  }

  return results;
}

console.log(runningSum(arr));



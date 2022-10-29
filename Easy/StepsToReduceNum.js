/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
*/

// var to count steps & to return
// use modulo to check even & odd
// calculate & break when n = 0

const steps = (n) => {
  let stp = 0;
  let new_n = n;
  for (let i = 0; i <= n; i++) {
    if (new_n == 0) {
      break;
    }
    if (new_n % 2 == 0) {
      new_n = new_n / 2;
      stp++;
    }
    if (new_n % 2 == 1) {
      new_n = new_n - 1;
      stp++;
    }
  }
  return stp;
};

console.log(steps(8));

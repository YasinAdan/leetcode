/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

//

// create empy array
// run loop n times
// first if statements, n % 3 == 1
// second if statements, n % 5 == 1

let fb = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

console.log(fb(15));

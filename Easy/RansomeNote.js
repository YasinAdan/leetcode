/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/


var canConstruct = function(ransomNote, magazine) {
    // turn magazine & ransomeNote into an arrays
    let magArr = magazine.split('');
    let ranArr = ransomNote.split('');

    // create a hash table to store the letters in magazine
    let hash = {};
    for (let i = 0; i < magArr.length; i++) {
        if (hash[magArr[i]]) {
            hash[magArr[i]]++;
        } else {
            hash[magArr[i]] = 1;
        }
    }

    // loop through ransomNote and check if the letter is in the hash table
    for (let i = 0; i < ranArr.length; i++) {
        if(ranArr[i] in hash) {
            hash[ranArr[i]]--;
            if (hash[ranArr[i]] < 0) {
                return false;
            }
        } else {
            return false;
        }

    }

    return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("aab", "baa")); // true

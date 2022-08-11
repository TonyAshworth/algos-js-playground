// String Anagrams (hard)#
// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Every anagram is a permutation of a string. As we know,
// when we are not allowed to repeat characters while finding permutations of a string,
// we get N! permutations (or anagrams) of a string having N characters.
// For example, here are the six anagrams of the string “abc”:

// abc
// acb
// bac
// bca
// cab
// cba

// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// Example 1:

// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
// Example 2:

// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

/* eslint-disable */

function find_string_anagrams(str, pattern) {
  let windowStart = 0,
    matched = 0,
    charFrequency = {},
    matchingIndexes = [];

  // get the hashmap of the pattern
  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  // Our goal is to match all the characters from the 'charFrequency' with the current window
  // try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      matchingIndexes.push(windowStart);
    }

    // Shrink the sliding window
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return matchingIndexes;
}

console.log(find_string_anagrams('ppqp', 'pq'));
console.log(find_string_anagrams('abbcabc', 'abc'));


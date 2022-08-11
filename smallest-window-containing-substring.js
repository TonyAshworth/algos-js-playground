// Smallest Window containing Substring (hard)#

// Given a string and a pattern, find the smallest substring in the given string which has all the character occurrences of the given pattern.

// Example 1:

// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

// Example 2:

// Input: String="aabdec", Pattern="abac"
// Output: "aabdec"
// Explanation: The smallest substring having all character occurrences of the pattern is "aabdec"

// Example 3:

// Input: String="abdbca", Pattern="abc"
// Output: "bca"
// Explanation: The smallest substring having all characters of the pattern is "bca".

// Example 4:

// Input: String="adcad", Pattern="abc"
// Output: ""
// Explanation: No substring in the given string has all characters of the pattern.

const find_substring = function(str, pattern) {
    

      // get the hashmap of the pattern
  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }
    return "";
}
  
  
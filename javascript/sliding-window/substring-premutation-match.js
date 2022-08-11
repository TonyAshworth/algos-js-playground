/* eslint-disable */

const find_permutation = function(str, pattern) {
    let windowLength = pattern.length;

    console.log("inputs are " + str + " and " + pattern);
    console.log("pattern length is " + pattern.length);
    const patternPermuts = get_permutations(pattern);
  
    for (windowStart = 0; windowStart + windowLength <= str.length; windowStart++) {
        currentWindow = str.substring(windowStart, windowStart + windowLength);
        console.log("checking window match for " + currentWindow);
        if (patternPermuts.includes(currentWindow)) {
            console.log("match found");
            return true;
        }
    }
  return false;
};

  // https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
  let get_permutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      if (string.indexOf(char) != i)
      continue
  
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let permutation of get_permutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  }
  
  
  console.log(`does string contain permutation of pattern: ${find_permutation('oidbcaf', 'abc')}`);
  console.log(`does string contain permutation of pattern: ${find_permutation('odicf', 'dc')}`);
  console.log(`does string contain permutation of pattern: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
  console.log(`does string contain permutation of pattern: ${find_permutation('aaacb', 'abc')}`);

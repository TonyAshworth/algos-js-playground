const non_repeat_substring_ta = function(arr) {
    let max_length = 0,
    window_start = 0,
    group_limit = 1,
    grouped_values = {};

    for (window_end = 0; window_end < arr.length; window_end++) {
        let next_i = arr[window_end]; // add the next element

        if (!(next_i in grouped_values)) {
            grouped_values[next_i] = 0;
        }

        grouped_values[next_i] += 1;

        // shrink the sliding window, until we are left with x distinct groups
        while (Math.max(...Object.values(grouped_values)) > 1) {
            const leftmost = arr[window_start];
            grouped_values[leftmost] -= 1;
            if (grouped_values[leftmost] === 0) {
                delete grouped_values[leftmost];
            }
            window_start += 1; // shrink the window
        }

        // remember the maximum length so far
        max_length = Math.max(max_length, window_end - window_start + 1);
    }
    return max_length;
};

console.log(`Length of the longest substring: ${non_repeat_substring_ta('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring_ta('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring_ta('abccde')}`);

function non_repeat_substring(str) {
    let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};
  
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      // if the map already contains the 'rightChar', shrink the window from the beginning so that
      // we have only one occurrence of 'rightChar'
      if (rightChar in charIndexMap) {
        // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
        // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
        windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      }
      // insert the 'rightChar' into the map
      charIndexMap[rightChar] = windowEnd;
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  }
  
  
  console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
  console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
  console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);
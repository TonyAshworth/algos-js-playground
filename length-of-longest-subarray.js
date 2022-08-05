function length_of_longest_subarray(arr, k) {
    let window_start = 0,
      max_length = 0,
      max_ones_count = 0;
  
    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let window_end = 0; window_end < arr.length; window_end++) {
      const right_char = arr[window_end];
      if (right_char === 1) {
        max_ones_count += 1;
      }

      // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
      if ((window_end - window_start + 1 - max_ones_count) > k) {
        if (arr[window_start] === 1) {
            max_ones_count -= 1;
        }
        window_start += 1; // shrink the window
      }
      // remember the maximum length so far
      max_length = Math.max(max_length, window_end - window_start + 1);
    }
  
    return max_length;
  }

console.log(length_of_longest_subarray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(length_of_longest_subarray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
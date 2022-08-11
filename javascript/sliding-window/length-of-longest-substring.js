function length_of_longest_substring_ta(str, k) {
    let window_start = 0,
      max_length = 0,
      char_frequency = {},
      max_repeat_letter_count = 0;
  
    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let window_end = 0; window_end < str.length; window_end++) {
      const right_char = str[window_end];
      if (!(right_char in char_frequency)) {
        char_frequency[right_char] = 0;
      }
      char_frequency[right_char] += 1;
  
      max_repeat_letter_count = Math.max(max_repeat_letter_count, char_frequency[right_char]);
  
      // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
      if ((window_end - window_start + 1 - max_repeat_letter_count) > k) {
        const left_char = str[window_start];
        char_frequency[left_char] -= 1;
        window_start += 1; // shrink the window
      }
      // remember the maximum length so far
      max_length = Math.max(max_length, window_end - window_start + 1);
    }
  
    return max_length;
  }
  
  
  console.log(length_of_longest_substring_ta('aabccbb', 2));
  console.log(length_of_longest_substring_ta('abbcb', 1));
  console.log(length_of_longest_substring_ta('abccde', 1));
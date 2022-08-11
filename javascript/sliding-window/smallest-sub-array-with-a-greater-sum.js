const smallest_subarray_sum_ta = function(s, arr) {
    let windowStart = 0,
      windowEnd = 0,
      windowLength = 0,
      windowSum = 0,
      minLength = 0;
    for (let i = 0; i < arr.length; i++) {
      windowEnd = i;
      windowLength++;
      windowSum += arr[i];
      if (windowSum >= s ){
        if (minLength === 0 ){
          minLength = windowLength;
        }
        minLength = Math.min(minLength, windowLength)
        for (let j = windowStart; j < windowEnd && windowSum >= s; j++) {
          windowSum -= arr[j]
          windowStart++;
          windowLength--;
          if (windowSum >= s ){
            minLength = Math.min(minLength, windowLength)
          }
        }
      }
    }
    return minLength;
  };


function smallest_subarray_sum(s, arr) {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0; 
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      
      // shrink the window as small as possible until the 'window_sum' is smaller than 's'
      while (windowSum >= s) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart]
        windowStart += 1 // sliding the window
        }
      }
  
    if (minLength === Infinity) {
      return 0;
    }
    return minLength;
  }
  
  
  console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
  console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`);
  console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
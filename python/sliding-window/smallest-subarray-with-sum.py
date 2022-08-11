# Smallest Subarray With a Greater Sum (easy

# Problem Statement#

# Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

# Example 1:

#     Input: [2, 1, 5, 2, 3, 2], S=7
#     Output: 2
#     Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

# Example 2:

#     Input: [2, 1, 5, 2, 8], S=7
#     Output: 1
#     Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].

# Example 3:

#     Input: [3, 4, 1, 1, 6], S=8
#     Output: 3
#     Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].

import math

# My implementation
# I originally tried to use NULL but in the end I liked the math.inf implementation better
def smallest_subarray_sum_ta(s, arr):
    min_window_length = math.inf
    window_sum = 0
    window_start = 0
    
    for window_end in range(len(arr)):
        window_sum += arr[window_end]
        # window size limit
        while window_sum >= s:
            min_window_length = min(min_window_length, (window_end - window_start + 1))
            # shrink the window
            window_sum -= arr[window_start]
            window_start += 1
    if min_window_length == math.inf:
        return 0
    return min_window_length

# answer given, looks pretty dang close
def smallest_subarray_sum(s, arr):
    min_length = math.inf
    window_sum = 0
    window_start = 0
    for window_end in range(0, len(arr)):
        window_sum += arr[window_end]  # add the next element
        # shrink the window as small as possible until the 'window_sum' is smaller than 's'
        while window_sum >= s:
            min_length = min(min_length, window_end - window_start + 1)
            window_sum -= arr[window_start]
            window_start += 1
      
    if min_length == math.inf:
        return 0
    return min_length

def main():
    print("Smallest subarray length: " + str(smallest_subarray_sum_ta(7, [2, 1, 5, 2, 3, 2])))
    print("Smallest subarray length: " + str(smallest_subarray_sum_ta(8, [3, 4, 1, 1, 6])))
    print("Smallest subarray length: " + str(smallest_subarray_sum_ta(8, [2, 1, 5, 2, 3, 2])))
    
    print("Smallest subarray length: " + str(smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])))
    print("Smallest subarray length: " + str(smallest_subarray_sum(8, [3, 4, 1, 1, 6])))
    print("Smallest subarray length: " + str(smallest_subarray_sum(8, [2, 1, 5, 2, 3, 2])))


main()
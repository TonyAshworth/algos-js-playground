// Problem Statement#

// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

//     Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
//     You can start with any tree, but you can’t skip a tree once you have started.
//     You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

// Example 1
// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// Example 2
// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

const fruits_into_baskets_ta = function(fruits) {
    const max_baskets = 2;

    let max_length = 0,
    window_start = 0,
    baskets = {};

    for (window_end = 0; window_end < fruits.length; window_end++) {
        current_fruit = fruits[window_end]; // add the next element

        if (!(current_fruit in baskets)) {
            baskets[current_fruit] = 0;
        }

        baskets[current_fruit] += 1;

        // shrink the sliding window, until we are left with 2 distinct fruits in the char_frequency
        while (Object.keys(baskets).length > max_baskets) {
            const left_fruit = fruits[window_start];
            baskets[left_fruit] -= 1;
            if (baskets[left_fruit] === 0) {
                delete baskets[left_fruit];
            }
            window_start += 1; // shrink the window
        }

        // remember the maximum length so far
        max_length = Math.max(max_length, window_end - window_start + 1);
    }
    return max_length;
};
  

console.log(`Maximum number of fruits: ${fruits_into_baskets_ta(['A', 'B', 'C', 'A', 'C'])}`);
console.log(`Maximum number of fruits: ${fruits_into_baskets_ta(['A', 'B', 'C', 'B', 'B', 'C'])}`);


function fruits_into_baskets(fruits) {
    let windowStart = 0,
      maxLength = 0,
      fruitFrequency = {};
  
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
      const rightFruit = fruits[windowEnd];
      if (!(rightFruit in fruitFrequency)) {
        fruitFrequency[rightFruit] = 0;
      }
      fruitFrequency[rightFruit] += 1;
  
      // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
      while (Object.keys(fruitFrequency).length > 2) {
        const leftFruit = fruits[windowStart];
        fruitFrequency[leftFruit] -= 1;
        if (fruitFrequency[leftFruit] === 0) {
          delete fruitFrequency[leftFruit];
        }
        windowStart += 1; // shrink the window
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
  }
  
  
  console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
  console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);
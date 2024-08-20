/*Question 
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. */

//Solution

function findLHS(nums) {
    let count = new Map();
    let maxLen = 0;

    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    for (let num of count.keys()) {
        if (count.has(num + 1)) {
            maxLen = Math.max(maxLen, count.get(num) + count.get(num + 1));
        }
    }

    return maxLen;
}

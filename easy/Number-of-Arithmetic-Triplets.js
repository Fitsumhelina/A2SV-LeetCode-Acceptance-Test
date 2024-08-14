/* Question 
You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets.*/

// Solution

function arithmeticTriplets(nums, diff) {
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[j] - nums[i] === diff) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[k] - nums[j] === diff) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
}

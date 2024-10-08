/* Question
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.*/


//solution
function numIdenticalPairs(nums) {
    let count = 0;
    const frequency = {};

    for (let num of nums) {
        count += frequency[num] || 0;
        frequency[num] = (frequency[num] || 0) + 1;
    }

    return count;
}

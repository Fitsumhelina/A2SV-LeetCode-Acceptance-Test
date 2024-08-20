/*question
Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target. */

// solution
function numOfPairs(nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                count++;
            }
        }
    }
    return count;
}

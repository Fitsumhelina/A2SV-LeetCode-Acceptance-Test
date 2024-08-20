/*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums. */

//solution

function runningSum(nums) {
    let sum = 0;
    const result = [];

    for (let num of nums) {
        sum += num;
        result.push(sum);
    }

    return result;
}
/*question
We have an array of integers, nums, and an array of requests where requests[i] = [starti, endi]. The ith request asks for the sum of nums[starti] + nums[starti + 1] + ... + nums[endi - 1] + nums[endi]. Both starti and endi are 0-indexed.

Return the maximum total sum of all requests among all permutations of nums.

Since the answer may be too large, return it modulo 109 + 7. */

//solution

const MOD = 1e9 + 7;

function maxSumRangeQuery(nums, requests) {
    const n = nums.length;
    const frequency = new Array(n).fill(0);

    for (const [start, end] of requests) {
        frequency[start]++;
        if (end + 1 < n) frequency[end + 1]--;
    }

    for (let i = 1; i < n; i++) {
        frequency[i] += frequency[i - 1];
    }
    nums.sort((a, b) => a - b);
    frequency.sort((a, b) => a - b);
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum = (maxSum + (nums[i] * frequency[i])) % MOD;
    }

    return maxSum;
}

/*Question 
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array. */

//solution 

    function smallerNumbersThanCurrent(nums) {
        const count = new Array(nums.length).fill(0);
        const sortedNums = [...nums].sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < sortedNums.length; j++) {
                if (sortedNums[j] < nums[i]) {
                    count[i]++;
                }
            }
        }

        return count;
    }
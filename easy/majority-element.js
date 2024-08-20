/*Question
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array */

//solution

function majorityElement(nums) {
    let count = 0;
    let majority = nums[0];

    for (let num of nums) {
        if (num === majority) {
            count++;
        } else {
            count--;
            if (count === 0) {
                majority = num;
                count = 1;
            }
        }
    }

    return majority;
}
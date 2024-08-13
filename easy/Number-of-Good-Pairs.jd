function numIdenticalPairs(nums) {
    let count = 0;
    const frequency = {};

    for (let num of nums) {
        count += frequency[num] || 0;
        frequency[num] = (frequency[num] || 0) + 1;
    }

    return count;
}

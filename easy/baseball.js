/*Question 
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid. */

// Solution

function calPoints(operations) {
    const record = [];

    for (let op of operations) {
        if (op === '+') {
            record.push(record[record.length - 1] + record[record.length - 2]);
        } else if (op === 'D') {
            record.push(2 * record[record.length - 1]);
        } else if (op === 'C') {
            record.pop();
        } else {
            record.push(parseInt(op));
        }
    }
    return record.reduce((acc, score) => acc + score, 0);
}

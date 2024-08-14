/*Question 
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique. */

//Solution

function removeDuplicates(s) {
    let store = [];
    for (let char of s) {
        if (store.length > 0 && store[store.length - 1] === char) {
            store.pop();

        }

        else {
            store.push(char);
        }
    }

    return store.join('');
}
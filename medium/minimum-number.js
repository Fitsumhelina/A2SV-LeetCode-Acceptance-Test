/* question 
You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering. */

//solution

function minSteps(s, t) {
    const countS = Array(26).fill(0);
    const countT = Array(26).fill(0);
    
    for (let char of s) {
        countS[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    for (let char of t) {
        countT[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    let steps = 0;
    for (let i = 0; i < 26; i++) {
        if (countS[i] > countT[i]) {
            steps += countS[i] - countT[i];
        }
    }
    return steps;
}


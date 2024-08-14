/*Question
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty. */

//Solution

function buildString(str) {

    const result = [];
    for (let char of str) {
        if (char === '#') {
            result.pop();
        } else {
            result.push(char);
        }
    }
    return result.join('');

}

function backspaceCompare(s, t) {
    return buildString(s) === buildString(t);
}
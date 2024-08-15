/* Question
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. */

//solution

function reverseString(word) {
    let store = [];
    
    for (let i = word.length - 1; i >= 0; i--) {
        store.push(word[i]);
    }
    for (let i = 0; i < word.length; i++) {
        word[i] = store[i];
    }
}


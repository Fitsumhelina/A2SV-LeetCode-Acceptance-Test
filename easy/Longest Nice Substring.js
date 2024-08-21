/*Question
A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string. */

//Solution
function longestNiceSubstring(s) {
    if (s.length < 2) return "";

    const set = new Set(s);
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (set.has(char.toLowerCase()) && set.has(char.toUpperCase())) {
            continue;
        }
        const left = longestNiceSubstring(s.substring(0, i));
        const right = longestNiceSubstring(s.substring(i + 1));
        return left.length >= right.length ? left : right;
    }
    return s; 
}

/*242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.*/

//Approach-1
var isAnagram = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};

//Approach-2
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let sMap = new Map()
    for(let ch of s){
        sMap.set(ch, (sMap.get(ch) || 0) + 1)
    }
    for(let ch of t){
        if(!sMap.get(ch)) return false
        sMap.set(ch, sMap.get(ch) - 1)
    }
    return true
}
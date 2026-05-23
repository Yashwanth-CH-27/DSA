/*

49. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

//Approach-1
var groupAnagrams = function(strs) {
    let map = new Map()
    for(let i = 0; i < strs.length; i++){
        let sortedStr = strs[i].split("").sort().join("");
        if(!map.has(sortedStr)){
            map.set(sortedStr, [strs[i]])
        }
        else{
            map.get(sortedStr).push(strs[i])
        }
    }
    return [...map.values()];
};
//Approach-2
var groupAnagrams = function(strs) {
    let map = new Map()
    for(let i = 0; i < strs.length; i++ ){
        let freqArr = Array(26).fill(0)
        let s = strs[i]
        for(let j = 0; j < s.length; j++){
            let index = s[j].charCodeAt() - 'a'.charCodeAt()
            freqArr[index]++
        }
        let key = freqArr.join("#")
        if(!map.has(key)){
            map.set(key, [s])
        }
        else{
            map.get(key).push(s)
        }
    }
    return [...map.values()]
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
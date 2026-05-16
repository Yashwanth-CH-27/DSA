/*541. Reverse String II
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104*/

var reverseStr = function(s, k) {
    let strArr = s.split("")
    for(let i = 0; i < strArr.length; i = i + (2*k)){
        let mid = Math.floor(k/2)
        for(let j = 0; j < mid; j++){
            let temp = strArr[i+j];
            strArr[i+j] = strArr[i+k-j-1];
            strArr[i+k-j-1] = temp;
        }
    }
    return strArr.join("")
};

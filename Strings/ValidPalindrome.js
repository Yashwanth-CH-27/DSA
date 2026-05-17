/*125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/


//Approach-1 with SC => O(n)
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let filteredList = "";
    let rev = ""
    for(let i = 0; i < s.length; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredList += s[i]
            rev = s[i] + rev
        }
    }
    return filteredList === rev;
};

//Approach-2 with SC => O(1)
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let f = 0;
    let b = s.length - 1;
    while( b > f ){
        if(!s[f].match(/[a-z0-9]/i)){
            f++
        }
        else if(!s[b].match(/[a-z0-9]/i)){
            b--
        }
        else if(s[f] === s[b]){
            f++; b--;
        }
        else{
            return false
        }

    }
    return true;
};
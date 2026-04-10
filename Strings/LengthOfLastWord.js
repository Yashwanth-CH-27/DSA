var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    while(n >= 0){
        if(s[n] != " ") break;
        --n
    }
   let c = 0
    while(n >= 0){
        if(s[n] === " ") break;
        --n;
        c++;
    }
    return c
};

console.log(lengthOfLastWord("  hi yash how are you   "))

//Approach 2
var lengthOfLastWord2 = function(s) {
    let n = s.length - 1;
    let c = 0
    while(n >= 0){
        if(s[n] !== " ") c++;
        else if(c > 0) break;
        --n
    }
    return c
};
console.log(lengthOfLastWord2("its an easy pblm  "))
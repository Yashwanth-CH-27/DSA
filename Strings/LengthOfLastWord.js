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
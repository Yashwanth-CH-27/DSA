var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set();
    let count = 0;
    for(let i = 0; i < jewels.length; i++){
        jewelSet.add(jewels[i])
    }

    for(let j = 0; j < stones.length; j++){
        if(jewelSet.has(stones[j])){
            count++;
        }
    }
    return count;   
};
function uniqueNum(arr){
    let hash = {};
    for(let i of arr){
        hash[i] = (hash[i] || 0 ) + 1
    }
    for(let i = 0; i < arr.length; i ++){
        if(hash[arr[i]] == 1){
            return arr[i];
        }
    }
}

console.log(uniqueNum([0,1,3,1,0,4,4]))

var singleNumber = function(nums) {
    let xor = 0;
    for(let i = 0; i < nums.length; i++){
        xor ^= nums[i]
    }
    return xor;
};
console.log(singleNumber([1,2,3,0,3,2,1,0,10]))
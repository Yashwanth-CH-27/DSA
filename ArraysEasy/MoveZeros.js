var moveZeroes = function(nums) {
    let p = 0;
    let l = nums.length;
    for(let i = 0; i < l; i++){
        if(nums[i] !== 0){
            nums[p] = nums[i];
            p++;
        }
    }
    for(let i = p; i < l; i++){
        nums[i] = 0;
    }
    return nums;   
};

console.log(moveZeroes([0,1,3,0,12]))
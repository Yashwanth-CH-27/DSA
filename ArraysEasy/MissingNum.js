var missingNumber = function(nums) {
    let l = nums.length;
    let maxSum = (l * (l + 1)) / 2;
    let sum = 0
    for(let i = 0; i < l; i ++){
        sum += nums[i]
    }
    return maxSum - sum;
};

console.log(missingNumber([3,0,4,1]))
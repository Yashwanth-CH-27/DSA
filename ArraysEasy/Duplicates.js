function uniqueArr(nums){
    if(nums.length == 0) return 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            nums.splice(i + 1, 1)
            i--
        }
    }
    console.log(nums)
    return nums.length
}
nums = [1,1,1,3,4,5,5,6]
console.log(uniqueArr(nums)) // take more time to execute

function removeDuplicates(nums) {
    if(nums.lenght == 0) return 0;
    let indexPointer = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[indexPointer]){
            indexPointer += 1
            nums[indexPointer] = nums[i];  
        }
    }
    console.log(nums)
    return indexPointer + 1;
};

console.log(removeDuplicates([1,1,1,3,4,5,5,6]));// takes less time to execute
//but the time complexity will be O(n) for both ways.
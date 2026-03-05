var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums.splice(i, 1)
            i--
        }
    }
    console.log(nums)
    return nums.length;
};

console.log(removeElement([1,3,5,1,1,3,3,5,6,5,7,3], 3))

function removeElementPointer(nums, val){
    let indexPointer = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[indexPointer] = nums[i]
            indexPointer += 1
        }
    }
    console.log(nums)
    return indexPointer
}

console.log(removeElementPointer([3,2,2,4,3], 3))

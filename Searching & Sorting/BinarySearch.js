var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while( r >= l ){
        m = Math.floor( (l + r) / 2 );
        if(nums[m] == target){
            return m;
        }
        else if(nums[m] < target){
            l = m + 1;
        }
        else{
            r = m - 1;
        }
    }
    return -1;
};

console.log(search([1,3,10,20,27], 27))
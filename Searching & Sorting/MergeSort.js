var sortArray = function(nums) {
    if(nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid))
    let right = sortArray(nums.slice(mid))
    return merge(left, right)    
};

function merge(l, r){
    let res = [];
    let p1 = 0;
    let p2 = 0;
    while(p1 < l.length  && p2 < r.length){
        if(l[p1] <  r[p2]){
            res.push(l[p1])
            p1++
        }
        else{
            res.push(r[p2])
            p2++
        }
    }
    return [...res, ...l.slice(p1), ...r.slice(p2)]
}

console.log(sortArray([3,0,1,2]))
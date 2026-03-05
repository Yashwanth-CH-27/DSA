function mergeSortByCopy(n1, n2, m ,n){
    let p1 = 0;
    let p2 = 0;
    let n1Copy = n1.slice(0,m);
    for(let i = 0; i < m + n; i++){
        if((p2 >= n) || (p1 < m && n1[p1] < n2[p2])){
            n1Copy[i] = n1[p1];
            p1++
        }
        else{
            n1Copy[i] = n2[p2]
            p2++
        }
    }
    return n1Copy;
}

console.log(mergeSortByCopy([1,2,2,3], [4,4,5,6], 4, 4))

var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for(let i = m + n -1; i >= 0; i--){
        if(p2 < 0) break;
        if(p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1]
            p1--;
        }
        else{
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
};

console.log(merge([3,4,5,5,7], 5, [0,1,1,2,2,2], 6))


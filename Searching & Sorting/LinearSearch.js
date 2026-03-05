

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return (`Element found at ${i} index`)
        }
    }
    return "Element not found in the array"
}

console.log(linearSearch([1,2,3,0,10], 11))
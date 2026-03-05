

function bubbleSort(arr){
    let l = arr.length
    let isSwapped = false
    for(let i = 0; i < l - 1; i++){
        for(let j = 0; j < l - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped) return arr
    }
    return arr
}

console.log(bubbleSort([3,0,5,4]))
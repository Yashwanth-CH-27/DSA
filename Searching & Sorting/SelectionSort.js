
function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        min = i;
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min != i){
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}
console.log(selectionSort([3,1,0,10,9,6,11]))
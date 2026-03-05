function sum(num){
    if(num == 1) return 1;
    else{
        return num + sum(num - 1)
    }
}

console.log(sum(5))

function arrSum(n){
    isEven = arr[n] % 2 == 0
    if(n == 0 ){
        if(isEven) return arr[n];
        else return 0;
    }
    if(isEven){
        return arr[n] + arrSum(n - 1)
    }
    else{
        return 0 + arrSum(n - 1)
    }
}
arr = [2,4,6,9,10]
console.log(arrSum(arr.length - 1))
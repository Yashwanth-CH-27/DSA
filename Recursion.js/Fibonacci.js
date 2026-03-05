function fibSeries(n){
    let arr = [0,1]
    for(let i = 2; i < n + 1; i++){
        arr[i] = arr[i - 1] + arr[i - 2] 
    }
    return arr;
}

console.log(fibSeries(12))

function fib(n){
    if(n <= 1) return n;
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(12))
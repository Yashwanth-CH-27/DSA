function power(n){
    if(n == 1) return"Power num"
    if(n % 2 != 0 || n < 1) return "Not Power Num";
    return power(n / 2)
}

console.log(power(10))
let n = 5

for( let i = 0; i < n ; i++){
    let row = ""
    for(let j = 0; j < n; j++){
        row += "*"
    }
    console.log(row)
}
console.log("-----------------------------------------")
for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += j + 1
    }
    console.log(row)
}
console.log("-----------------------------------------")
for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row += i + 1
    }
    console.log(row)
}
console.log("-----------------------------------------")
for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j < (n - i); j++){
        row += j + 1
    }
    console.log(row)
}
console.log("-----------------------------------------")
for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j <= n; j++){
        if(j >= n - i){
            row += "*"
        }
        else{
            row += " "
        }
        
    }
    console.log(row)
}
console.log("-----------------------------------------")
for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j < n-(i+1); j++){
        row += " "
    }
    for(let k = 0; k <=i; k++){
        row += "*"
    }
    console.log(row)
}
console.log("-----------------------------------------")

for(let i = 0; i < n; i++){
    let row = "";
    let toogle = 1;
    for(let j = 0; j <= i ; j++){
        row += toogle
        if(toogle === 1){
            toogle = 0
        }
        else{
            toogle = 1
        }
    
    }
    console.log(row)
}
console.log("-----------------------------------------")
toogle = 1
for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j <= i ; j++){
        row += toogle
        if(toogle === 1){
            toogle = 0
        }
        else{
            toogle = 1
        }
    
    }
    console.log(row)
}
console.log("-----------------------------------------")


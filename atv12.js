function calcFatorial(num){
    let fatorial = 1
    for(let i = num; i > 0; i--){
        fatorial *= i
    }
    return fatorial
}

console.log(calcFatorial(3))
console.log(calcFatorial(2))
console.log(calcFatorial(4))
console.log(calcFatorial(10))

function calculadora(a, sinal, b){
    switch(sinal){
        case '+':
            return a+b
        case '-':
            return a- b
        case '*':
            return a * b
        case '/':
            return a / b
        default: 
            return "operação invalida"
    }
}

console.log(calculadora(2, '+', 2))
console.log(calculadora(2, '-', 2))
console.log(calculadora(2, '*', 2))
console.log(calculadora(2, '/', 2))
console.log(calculadora(2, '#', 2))
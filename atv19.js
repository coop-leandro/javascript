function valorPago(cod, quant){
    switch(cod){
        case 100: 
            return quant * 3
        case 200:
            return quant * 4
        case 300: 
            return quant * 5.5
        case 400:
            return quant * 7.5
        case 500: 
            return quant * 3.5
        case 600:
            return quant * 2.8
        default: 
            return "codigo invalido"
    }
}

console.log(valorPago(200, 5))
console.log(valorPago(100, 5))
console.log(valorPago(500, 5))
console.log(valorPago(300, 5))
console.log(valorPago(800, 5))

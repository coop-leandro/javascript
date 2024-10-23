function calcularAnoBissexto(ano){
    if(ano % 400 == 0){
        return true
    }
    else if(ano % 100 == 0){
        return false
    }
    else if(ano % 4 ==0){
        return true
    }
    else{
        return false
    }
}

console.log(calcularAnoBissexto(2024))
console.log(calcularAnoBissexto(2015))
console.log(calcularAnoBissexto(2015))
console.log(calcularAnoBissexto(1969))
console.log(calcularAnoBissexto(4))

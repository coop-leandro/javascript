function newSalario(salario, plano){
    switch(plano){
        case 'A':
            return salario + (salario * 0.1)
        case 'B':
            return salario + (salario * 0.15)
        case 'C': 
            return salario + (salario * 0.2)
        default: 
            return "plano invalido"
    }
}

console.log(newSalario(1200, 'A'))
console.log(newSalario(1200, 'B'))
console.log(newSalario(1200, 'C'))
console.log(newSalario(1200, 'h'))

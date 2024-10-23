function SalarioFinal(horasT, ValorPorHora){
    const salario = horasT * ValorPorHora

    return console.log(`Salario igual a R$ ${salario}`)
}

SalarioFinal(150, 40.5)
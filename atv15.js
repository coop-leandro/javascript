function comprarCarro(carro){
    switch(carro){
        case "hatch":
            return "Compra efetuada"
        case "sedan":
            return "tem certeza?"
        case "motocicleta":
            return "tem certeza?"
        case "caminhonete":
            return "tem certeza?"
        default:
            return "Indisponivel"
    }
}

console.log(comprarCarro("hatch"))
console.log(comprarCarro("sedan"))
console.log(comprarCarro("Triciclo"))
console.log(comprarCarro("hatch"))

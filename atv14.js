function retornaEstoque(fruta){
    switch(fruta){
        case "kiwi":
            return "escassez de kiwi"
        case "maçã":
            return "nao vendemos maçã"
        case "melancia":
            return "R$3 o quilo"
        default: 
            return "Fruta nao encontrada"
    }
}

console.log(retornaEstoque("kiwi"))
console.log(retornaEstoque("melancia"))
console.log(retornaEstoque("asfaag"))

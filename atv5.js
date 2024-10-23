function formataValor(a){
    const arredondado = a.toFixed(2)
    const valorNovo = arredondado.replace('.', ',')

    console.log(`R$${valorNovo}`)
}

formataValor(140.1244)


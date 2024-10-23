function juroSimples(capital, taxa, tempo){
    const montante = capital + (capital * taxa * tempo)
    return montante
}
function juroComposto(capital, taxa, tempo){
    const jurosC = capital * Math.pow((1 + taxa), tempo)
    return jurosC
}

const resSimples = juroSimples(10,0.1,10)
const resComp = juroComposto(10,0.1,10)

console.log(`simples = ${resSimples}  composto = ${resComp}`)
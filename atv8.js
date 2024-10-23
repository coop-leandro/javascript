let stringPontuações = "30, 40, 55, 10, 22, 2, 5, 1, 0"

function verificaPontos(){
    let pontuacoes = stringPontuações.split(",")
    let recorde = 0
    let maiorPont = pontuacoes[0]
    let menorPont = pontuacoes[0]
    let piorJogo = 1

    for(let i = 1; i < pontuacoes.length; i++){
        if(parseInt(pontuacoes[i]) > parseInt(maiorPont)){
            maiorPont = pontuacoes[i]
            recorde++
        }
        else if(parseInt(pontuacoes[i]) < parseInt(menorPont)){
            menorPont = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return [recorde, piorJogo]
}

const resultados = verificaPontos(stringPontuações);
console.log(resultados)
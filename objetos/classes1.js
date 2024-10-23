class Lancamento {
    constructor(nome = 'Qualquer', valor = 0){
        this.nome = nome,
        this.valor = valor
    }
}

class Ciclo{
    constructor(mes, ano){
        this.mes = mes,
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidad0 = 0
        this.lancamentos.forEach(l => {
            valorConsolidad0 += l.valor
        })
        return valorConsolidad0
    }
}

const salario = new Lancamento('Salario', 1200)
const contaDeLuz = new Lancamento('Luz', -400)
const contas = new Ciclo(6, 2024)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
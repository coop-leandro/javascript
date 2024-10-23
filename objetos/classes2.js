class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'ALuno'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Teste')
    }

}

const filho = new Filho
console.log(filho)
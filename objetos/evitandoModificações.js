const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

const pessoa = {
    nome: 'Julia',
    idade: 34
}
Object.seal(pessoa)
console.log(Object.isSealed(pessoa))

pessoa.idade = 20

console.log(pessoa) 
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * ( 1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // NaN - preco e desconto não estão definidos na função

console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro)) // R$ 39992

console.log(getPreco.apply(carro)) // R$ 39992

// Qual diferença?
console.log(getPreco.call(carro, 0.17, '$')) // $ 46790.64 - os parametros podem ser passados por virgula

console.log(getPreco.apply(carro, [0.17, '$'])) // $ 46790.64 - Espera os parametros dentro de um array
// Factory com parametros

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('iPhone X', 5000))
console.log(criarProduto('iPad 4', 1199.90))
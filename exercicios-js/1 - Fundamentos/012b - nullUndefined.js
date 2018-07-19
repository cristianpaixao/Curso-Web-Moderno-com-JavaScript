let valor // não inicializada
console.log(valor) // undefined (ou seja, criada mas não inicializada)
//console.log(valor2) -- Nesse casso, daria um erro Is not defined, que quebraria o código, note que é diferente de undefined.

valor = null // Significa que a variável não tem nenhum valor e não aponta para nenhum endereço de memória (ausência de valor)
console.log(valor) // null
// console.log(valor.toString()) -- Note que isso é um erro, pois não existem propriedades (toString, por exemplo) em um Nulo!!!

const produto = {}
console.log(produto.preco) // Undefined
console.log(produto) // Objeto vazio "{}"

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir de forma explicita valores undefined
console.log(produto) // Existe agora o objeto com atributo preço, porém undefined
console.log(produto.preco)
console.log(!!produto.preco) // false

produto.preco = null // sem preço
console.log(!!produto.preco) // false assim como no undefined
console.log(produto)

// NOTA FINAL: Deixe a linguagem apenas definir undefined, utilize null caso necessite deixar algo vazio.
// Armazenando uma função em uma variavel
// imprimirSoma recebe uma função anonima
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)// 5

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))// 5

// Arrow function com retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))// -1

// Arrow function com retorno implícito e parâmetro unico
const imprimir2 = a => console.log(a)
imprimir2("Olá mundo!")
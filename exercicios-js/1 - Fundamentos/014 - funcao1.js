// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // NaN - Posso passar apenas um dos valores (O segundo se torna undefined)
imprimirSoma() // NaN - Posso não passar nenhum dos parâmetros

// Função com retorno
function soma(a ,b = 0) {
    return a + b
}

console.log(soma(4, 2)) // = 6
console.log(4) // = 4, pois o parametro b está inicializado por padrão
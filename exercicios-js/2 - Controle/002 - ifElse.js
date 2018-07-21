const imprimirResultado = function(nota){
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('Epa!') // Cuidado, nesse caso vai entrar no else 


// A mesma coisa sem else, retornando o valor dentro do if
const imprimirResultado2 = function(nota) {
    if (nota >= 7) {
        return 'Aprovado!'
    }
    return 'Reprovado!'
}

console.log(imprimirResultado2(10))
console.log(imprimirResultado2(4))
console.log( 7/0 ) // essa operação retorna "infinito"

console.log("10" / 2) // retorna 5 pois o javascript entende que estou fazendo uma operação matemática e encontra o valor numerico na string

console.log("Show!" * 2 ) // Gera um NaN (Not a Number), pois realmente não é um numero

console.log(0.1 + 0.7) // Gera uma imprecisão númerica conforme especificação do IEEE 

// console.log(10.toString()) Não é possível transformar um numero literal em string desta forma.
console.log((10.3456).toFixed(2))
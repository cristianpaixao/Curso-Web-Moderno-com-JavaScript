const escola = "cod3r"

console.log(escola.charAt(4)) // Imprime o caractere no indice 4
console.log(escola.charAt(5)) // Caso o valor seja maior que a quantidade de caracteres, ele imprime um valor em branco
console.log(escola.charCodeAt(3)) // Imprime o unicode do caractere no indice solicitado (3)
console.log(escola.indexOf('d')) // Imprime o índice do caractere solicitado (Nesse caso, o caractere d)

console.log(escola.substring(1)) // Imprime o valor de escola removendo o primeiro caractere 
console.log(escola.substring(0, 3)) // Imprime os valores entre índice 0 e 3 sem incluir o indice 3 (cod)

console.log('Escola '.concat(escola).concat("!")) // Imprime a concatenação solicitada
console.log('Escola '+ escola + "!") // Semelhante ao de cima, porém utilizando o operador "+"

console.log(escola.replace(3, 'e')) // Imprime a substituição do indice 3 pelo caractere e
console.log(escola.replace(/\d/, 'e')) // Semelhante ao de cima, porém substitui todos os dígitos (numeros) pela letra "e", utilizando RegEx
console.log(escola.replace(/\w/g, 'e')) // Semelhante ao de cima, porém substitui todos os caracteres pela letra "e", utilizando RegEx

console.log('Jesus,Maria,José'.split(',')) // Imprime um Array de string separando pela "," (virgula)
console.log('Jesus,Maria,José'.split(/,/)) // Semelhante ao resultado de cima, porém utilizando RegEx


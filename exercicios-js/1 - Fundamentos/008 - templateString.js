const nome = 'Sthefany'
const concatenacao = 'Olá ' + nome + '!' // Concatenação Comum
const template = `Olá ${nome}!` // Utilizando "`" para criar um template

// Imprimindo
console.log(concatenacao)
console.log(template)

// Expressões com template
console.log(`1 + 1 = ${1+1}`)

// Arrow Functions em template
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
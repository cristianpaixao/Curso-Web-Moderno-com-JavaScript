const valores = [1, 5, 2, 0, 7.7]
console.log(valores[0], valores[3])

valores[4] = 10 // Modifica o valor no indice 4
console.log(valores)

valores[10] = 42 // Cria um valor no indice 10, note que no caso ficam 5 espaços vazios no array
console.log(valores)

console.log(valores.length) // Informa a quantidade de elementos no array

valores.push('Olá Mundo') // Podemos utilizar o push para adicionar elementos no array e também adicionar tipos diferentes
console.log(valores)

console.log(valores.pop()) // Remove o ultimo elemento do array e retorna o valor removido

delete valores[0]
console.log(valores)

console.log(typeof valores) // note que o array é de tipo "object"
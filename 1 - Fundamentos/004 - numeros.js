// Criando constantes numericas
const peso1 = 1.0 // Número 
const peso2 = Number('2.1') // Converte a string para o tipo númerico

// Imprimindo
console.log( peso1 , peso2 ) // Mostra os dois valores
console.log(Number.isInteger(peso1)) // Resultado deve ser true devido ao numero após o ponto ser 0
console.log(Number.isInteger(peso2)) // Resultado deve ser false, pois embora o valor String tenha sido convertido, o valor não é integer e sim float

const avaliacao1 = 9.871
const avaliacao2 = 6.871

// Operações matemáricas
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Definindo casas decimais
console.log(media.toString(2)) // Convertendo valor para binário
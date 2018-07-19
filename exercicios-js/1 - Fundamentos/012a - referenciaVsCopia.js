const a = {name: 'teste'} // Armazena o endereço de memória onde o objeto name está localizado

const b = a // Nessa atribuição estou recebendo o mesmo endereço no qual a "const a" aponta.

b.name = 'Opa' // Mudando valor de name em "b"

console.log(a) // Note que mesmo mudando a partir da "const b", a "const a" também é alterada por referenciarem o mesmo objeto no mesmo endereço de memória


// Em tipos primitivos isso muda:
let c = 3 // Atribuo um valor inteiro em c
let d = c // Atribuo o mesmo valor de c em d
d++ // Incremento d
console.log(d) // D = 4
console.log(c) // C = 3
/**
 * Parece o exemplo anterior, mas o resultado é diferente, Porque isso acontece?
 * Isso ocorre porque nesse caso, como e um valor básico (primitivo) da linguagem, foi feita uma cópia por valor.
 * quando trabalhamos com tipos primitivos, nesse caso é passada uma cópia do valor, ou seja eu copio um valor de outra variável de
 * forma que um possa ser alterado
 * sem afetar o outro.
 * No caso dos objetos, ambos referenciam o mesmo endereço de memória.
 */
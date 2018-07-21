let num1 = 1
let num2 = 2

num1++ // Incremento pósfixado
console.log(num1)

--num1 // Decremento préfixado
console.log(num1)

++num1 // Incremento préfixado
console.log(num1)

num1-- // Decremento pósfixado
console.log(num1)

console.log(++num1 === num2--) // true
console.log(num1, num2)
console.log(num1 === num2) // false
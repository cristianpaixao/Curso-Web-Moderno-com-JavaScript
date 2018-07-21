const a = 7 // o "=" é uma atribuição, ou seja, estamos atribuindo 7 na constante a
let b = 3

b += a // atribuição aditiva (estamos atribuindo 7 sem substituir o valor de b, ou seja, acrescentando) b = b + a
console.log(b)

b -= 4 // atribuição subtrativa, b = b - 4
console.log(b)

b *= 2 // atribuição multiplicativa, b = b * 2
console.log(b)

b /= 2 // atribuição divisiva, b = b / 2
console.log(b)

b %= 2 // Atribuição modular (resto da divisão)
console.log(b)

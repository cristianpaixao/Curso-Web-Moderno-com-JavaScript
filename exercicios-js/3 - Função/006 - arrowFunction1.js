// Função sem arrow
let dobro = function (a) {
    return 2 * a
}

console.log(dobro(2)) // 4

// Sobrescrevendo função, agora usando arrow
drobro = (a) => {
    return 2 * a
}

console.log(dobro(2)) // 4

// Sobrescrevendo com retorno implícito
dobro = a => 2 * a 

console.log(dobro(2)) // 4

// Outro exemplo:

let ola = function () {
    return 'Olá'
}
console.log(ola())

ola = () => 'Olá' // Refatorando
console.log(ola())

ola = _ => 'Olá' // Outra forma de refatorar, porém possui Param
console.log(ola())
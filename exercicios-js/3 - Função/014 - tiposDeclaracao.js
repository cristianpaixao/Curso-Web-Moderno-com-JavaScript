console.log(soma(3, 4)) // function declaration podem ser chamadas antes da linha onde são criadas

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // function expression não pode ser chamada antes da linha onde é criada

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) // named function expression não pode ser chamada antes da linha onde é criada
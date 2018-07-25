let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) // TRUE

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // FALSE
comparaComThis(obj) // TRUE

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global) // FALSE
comparaComThisArrow(obj) // FALSE
comparaComThisArrow(this)  // TRUE
comparaComThisArrow(module.exports) // TRUE - OLHA SÓ!!!

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // FALSE - Mesmo com Bind a Arrow function permanece intacta
comparaComThisArrow(module.exports) // TRUE - Continua intacto
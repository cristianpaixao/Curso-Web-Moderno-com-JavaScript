const fabricantes = ["Mercedes", "Audi", "Bmw"]

function imprimir(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante)) // Semelhante ao de cima, porém usando arrow function
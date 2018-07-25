const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback D:
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
} // 6 Linhas

console.log(notasBaixas1)

// Com callback :D
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
}) // 3 linhas <3

console.log(notasBaixas2)

 // Calback e Arrow!
const notasBaixas3 = notas.filter(nota => nota < 7) // UMA LINHA!!!
console.log(notasBaixas3)
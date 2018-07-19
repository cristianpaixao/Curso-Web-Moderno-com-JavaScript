console.log(Math.ceil(6.1))// 7 - Acessamos ceil (teto) do objeto Math

const obj1 = {}

obj1.nome = 'Bola' // cria ou acessa o atributo (nesse caso, cria)
// Linha acima semelhante à obj1['nome'] = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
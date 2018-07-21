function tratarErroELancar(erro) {
    throw new Error('... Deu bosta')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Terminei')
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritado(obj)

const obj2 = {nome: 'Roberto'}
imprimirNomeGritado(obj2)
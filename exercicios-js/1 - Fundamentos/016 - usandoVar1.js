{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera) // O bloco em si NESSE contexto não faz diferença, pois nesse contexto a "var sera" visivel até fora do bloco (escopo)

function teste() {
    var local = 123
}

teste()
// console.log(local) -- Nesse caso, não consigo acessar "var teste", pois o escopo dela é visivel apenas dentro da função.
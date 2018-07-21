function teste1(num) {
    if(num > 7)
        console.log(num) // Apenas essa sentença de código está associada ao if
    
    console.log('Final')
}

teste1(6)
teste1(8)

// Cuidados a serem tomados (O CODIGO ABAIXO ESTÁ TODO ERRADO!)
function teste2(num) {
    if (num > 7); { // Cuidado com o ';'
        // esse bloco não está associado ao if
        console.log(num)
    }
}

teste2(6)
teste2(8)
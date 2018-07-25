function Pessoa(nome) {
    return {
        nome,
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = Pessoa('João')
p1.falar()
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // undefined - conflito entre paradigmas: functional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // AGORA SIM!!!
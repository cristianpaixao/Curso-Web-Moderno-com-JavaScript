function Pessoa() {
    this.idade = 0
    const self = this // Drible do ronaldinho gaúcho sem usar Bind. Basicamente estamos roubando aqui... Hehehe
    setInterval(function (){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

minhaFuncao() // Global aparecerá normalmente, como deveria

function exec() {
    const valor =  'Local'
    minhaFuncao()
}

exec() // Global aparecerá, pois a função foi declarada no mesmo contexto de 'const Global'
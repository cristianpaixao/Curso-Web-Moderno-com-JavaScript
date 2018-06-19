/**
 * Nesse arquivo faremos alguns testes de organização JavaScript
 * O Javascript é organizado em sentenças de código que podem ou não
 * terminar com ponto e vírgula e também é organizado por blocos de
 * código que são delimitados por chaves "{}"
 * Funções, classes, condições e loops tem blocos de código associados.
 */

// Sentença
console.log("Sentença de Código")

// Blocos de Código - Não haverá erro sintaxico abaixo
{
    // Bloco de código mais externo
    console.log("Bloco de Código"); // Sentença com ponto e vírgula no final
    {
        // Bloco de código mais interno
        console.log("Bloco de Código Interno") // Sentença sem ponto e vírgula no final
    }
    /*
        Note que posso ou não finalizar uma sentença com ponto e vírgula.
        Desse ponto em diante, toda sentença NAO terá ponto e vírgula no final
    */
}
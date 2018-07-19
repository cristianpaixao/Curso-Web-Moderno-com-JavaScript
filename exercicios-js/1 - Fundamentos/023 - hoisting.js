console.log ('a =', a) // undefined, pois a variável é declarada por meio de hoisting(içamento)
var a = 2
console.log ('a =', a)

/*
tecnicamente acontece algo assim:

var a 
console.log ('a =', a)
a = 2
console.log ('a =', a)
 */

 // Hoisting não funciona com let
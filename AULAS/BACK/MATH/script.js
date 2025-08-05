let num=9.4
//Arredondamento para baixo
let resultado=Math.floor(num)
console.log(resultado)

//Arredondamento para cima
resultado=Math.ceil(num)
console.log(resultado)

//Arredondamento padrão
resultado=Math.round(num)
console.log(resultado)

//Encontrar o maior número
let maior= Math.max(1,5,300,6,-8)
console.log(maior)

// Encontrar o menor número
let menor= Math.min(7,4,1,3,-8)
console.log(menor)

//Gerar número "aleatótio"
let aleatótio=Math.random()
console.log(aleatótio)

//Gerar um número aleatório em um intervalo
let numMin=5;
let numMax=50;
let numAle=Math.random() *(numMax-numMin) + numMin
console.log(numAle)

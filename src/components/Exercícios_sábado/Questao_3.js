const numeros = [5, 10, 15, 20];

const somaNum = numeros.reduce((acumulador, indexAtual) => acumulador + indexAtual, 0)
/*
A função reduce em JavaScript é usada para reduzir um array a um único 
valor, aplicando uma função acumuladora a cada elemento do array. 
Ela percorre os elementos e os combina de alguma forma, seja somando números,
concatenando strings ou agregando objetos.
*/

console.log(somaNum)
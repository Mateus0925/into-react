const numeros = [10, 15, 20, 25, 30, 35, 40];

const arrayPares = numeros.filter(num => num % 2 == 0)
/*
A função filter ela percorre um array e retorna apenas os 
elementos que atendem a uma determinada condição.
*/

//outro jeito de fazer esssa atividade

/*Com a função includes, ela pode ser usada para verificar se um array 
ou uma string contém um determinado valor.Ela retorna true se o valor
for encontrado e false caso contrário.
*/

console.log(arrayPares)
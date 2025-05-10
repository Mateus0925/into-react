const palavras = ["casa", "janela", "porta", "telhado"];

const numLetraAoTodo = palavras.reduce((acumulador, palavra) => acumulador + palavra.length, 0)

console.log(numLetraAoTodo)
const produtos = [
    { nome: "Teclado", preco: 80 },
    { nome: "Mouse", preco: 40 },
    { nome: "Monitor", preco: 500 },
    { nome: "Cabo USB", preco: 25 }
  ];

const soNomes = produtos.filter(obj => obj.preco <= 50).map( objeto => ({ nome: objeto.nome }))

console.log(soNomes)
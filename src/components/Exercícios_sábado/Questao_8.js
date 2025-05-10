const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Marcos", nota: 7 },
    { nome: "Carla", nota: 6 }
  ];

const aprovados = alunos.filter(num => num.nota >= 7).map(obj => ({ nome: obj.nome }))

console.log(aprovados)
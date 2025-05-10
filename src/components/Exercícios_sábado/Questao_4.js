const alunos = ["Ana", "Bruno", "Carlos", "Daniela"];

if(alunos.filter(nome => nome === "Carlos").length > 0){
    console.log("Carlos está presente!")
}else{
    console.log("Não está presente!")
}
// Mostre os dados da aplicação como demonstrado em sala de aula
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa de vermelho
// Se o gastor for maior que 10000 mostre uma mensagem

const luana = {
    cliente: "Luana",
    idade: 27,
    ativa: true,
    compras: [
        {nome: "Smartphone", preco: "R$ 1500" },
        {nome: "Notebook", preco: "R$ 2500" },
        {nome: "Geladeira", preco: "R$ 3500" }
    ]
}

const mario = {
    cliente: "Mario",
    idade: 30,
    ativa: false,
    compras: [
        {nome: "Notebook", preco: "R$ 2500"},
        {nome: "Smartphone", preco: "R$ 1500"},
        {nome: "Geladeira", preco: "R$ 3000"},
        {nome: "Guitarra", preco: "R$ 3500"},
    ]
}

const Exercicio = () => {
    const dados = luana
    console.log(dados)

    const getPreco = dados.compras.map((compras) => compras.preco)

    const precoNumber = getPreco.map((preco) => Number(preco.replace('R$ ', '')))

    const total = precoNumber.reduce((a, b) => a + b)
    return(
        <>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação: 
            <span style={dados.ativa === true ? {color: 'green'}: {color:'red'}}>
                {dados.ativa ? 'Ativa' : 'Inativa'}
            </span>
        </p>
        <p>Total: {total}</p>
        { total >10000 ? <p>Você está gatando muito</p>: ""}
        </>
    )
}

export default Exercicio;
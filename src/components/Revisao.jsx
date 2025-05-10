const Revisao = () => {

    const nome = "mateus"
    const preco = 500
    const desconto = 150

    const CRB = 3
    const CSA = 1

    const isAtivo = false

    const estiloH1 = {
        color:"blue",
        fontSize: "20px",
        fontFamily: "Helvetica"
    }

    return (
        <>
            <Navbar />
            <h1>Meu site!</h1>
            <p>{nome}</p>
            <p>{preco}</p>
            <p>{desconto}</p>
            <p>{preco - desconto}</p>
            <p>{CRB > CSA ? "CRB é o maior" : "CSA é o maior" /*operador ternario*/}</p>
            {isAtivo === true ?
                <p style={{ color: 'green' }}> Ativo</p>
                :
                <p style={{ color: 'red' }}>Inativo</p>
            }
            <p>{30*2}</p>
            <p>{"Mateus Fernandes".toUpperCase()}</p>
            <p>{Date.now()}</p>
            <p>{new Date().getFullYear()}</p>
            <h1 style={estiloH1}>Eu sou um titulo</h1>
            <Exercicio/>
        </>
    )
}

export default Revisao;


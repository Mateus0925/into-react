import React from 'react'

const produtos = [
    {
        id: 1,
        nome: "Smartphone",
        preco: "R$ 2000",
        cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
        id: 2,
        nome: "Notbook",
        preco: "R$ 3000",
        cores: ["#ffd045", "#d439b", "#f37c59"],
    },
    {
        id: 3,
        nome: "Tablet",
        preco: "R$ 1500",
        cores: ["#365069", "#47c1c8", "#f95786"]
    }
]

const div = {
    marginTop: "30px"
}

const Atividade3 = () => {
    const Smartphone = produtos[0];
    const Notbook = produtos[1];
    const Tablet = produtos[2];


    return (
        <>
            <main style={{ marginLeft: "50px", marginTop: "50px" }}>
                <div>
                    <h1>{Smartphone.nome}</h1>
                    <p>Preço: {Smartphone.preco}</p>
                    <div style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#29d8d5", width: "300px", height: "40px", color: "white" }}>
                        <p>{Smartphone.cores[0]}</p>
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#252a34", width: "300px", height: "40px", color: "white" }}>
                        <p>{Smartphone.cores[1]}</p>
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#fc3766", width: "300px", height: "40px", color: "white" }}>
                        <p>{Smartphone.cores[2]}</p>
                    </div>
                </div>
                <div style={div}>
                    <h1>{Notbook.nome}</h1>
                    <p>Preço: {Notbook.preco}</p>
                    <div style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#ffd045", width: "300px", height: "40px", color: "white" }}>
                        <p>{Notbook.cores[0]}</p>
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#d4394b", width: "300px", height: "40px", color: "white" }}>
                        <p>{Notbook.cores[1]}</p>
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#f37c59", width: "300px", height: "40px", color: "white" }}>
                        <p>{Notbook.cores[2]}</p>
                    </div>
                </div>
                <div style={div}>
                    <h1>{Tablet.nome}</h1>
                    <p>Preço: {Tablet.preco}</p>
                    <div style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#365069", width: "300px", height: "40px", color: "white" }}>
                        <p>{Tablet.cores[0]}</p>
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#47c1c8", width: "300px", height: "40px", color: "white" }}>
                        <p>{Tablet.cores[1]}</p>
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "20px", backgroundColor: "#f95786", width: "300px", height: "40px", color: "white" }}>
                        <p>{Tablet.cores[2]}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Atividade3

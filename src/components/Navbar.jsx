const Navbar = () =>{
    return(
        <nav>
            <a id="sobre" className="Sobre2" href="">Sobre</a>
            <a style={{backgroundColor: "red"}} href="">Produto</a>
            <a href="">Contato</a>
            <a href="">Compre</a>
            <form>
                <label htmlFor="">E-mail</label>
                <input type="text" />
            </form>
        </nav>
    )
}

export default Navbar
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <>
            <nav className='navbar navbar-dark bg-dark'>
                <h2 style={{color: "White", padding: "5px", margin: "10px"}} >Mercado Tecnológico SL</h2>
                <div className='btn-group-right' style={{padding: "5px", margin: "10px"}}>
                    <button className='btn btn-light' style={{margin: "2px"}}>Celulares</button>
                    <button className='btn btn-light' style={{margin: "2px"}}>Notebooks</button>
                    <button className='btn btn-light' style={{margin: "2px"}}>Televisores</button>
                </div>
            </nav>
            <CartWidget/>
        </>
    );
}

export default NavBar;
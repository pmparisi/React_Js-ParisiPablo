import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    const navLinkStyle = {
        background: 'linear-gradient(to right, rgb(115, 226, 161) 0%, rgb(3, 175, 150) 100%)',
        color: 'black',
        fontWeight: 'bold',
        margin: '2px',
        textDecoration: 'none',
        padding: '10px',
        border: 'none',
    };

    return (
        <>
            <nav className='navbar navbar-dark bg-dark' style={{minWidth: '320px'}}>
                <Link to='/' style={{ padding: '5px', margin: '10px', color: 'rgb(3, 175, 150)', textDecoration: 'none', justifyContent: 'center' }}>
                    <h2>Mercado Tecnológico SL</h2>
                </Link>
                <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginRight: '10px'}}>
                    <div className='btn-group-right' style={{ display: 'flex', flexWrap: 'wrap', padding: '5px', margin: '10px' }}>
                        <NavLink to={'/category/celular'} className='btn btn-light' style={navLinkStyle}>Celulares</NavLink>
                        <NavLink to={'/category/notebook'} className='btn btn-light' style={navLinkStyle}>Notebooks</NavLink>
                        <NavLink to={'/category/televisor'} className='btn btn-light' style={navLinkStyle}>Televisores</NavLink>
                    </div>
                    <CartWidget />
                </div>
                
            </nav>
        </>
    );
};

export default NavBar;
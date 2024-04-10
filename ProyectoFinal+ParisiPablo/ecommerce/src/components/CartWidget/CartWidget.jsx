import cart from './assets/cart1.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <>
            <Link to='/cart' className='CartWidget' style={{textDecoration: 'none', display: totalQuantity > 0 ? 'flex' : 'none'}}>
                <div style={{ margin:'2px' }}>
                    <img style={{ width:"40px", height:"40px", color:'white' }} src={cart} alt="cart-widget" />
                </div>
                <div style={{ margin:'2px', color:'white' }}>
                    <p style={{ color: 'white', display: 'flex', justifyContent: 'center'}}>{ totalQuantity }</p>
                </div>    
            </Link>
        </>
    );
}

export default CartWidget;
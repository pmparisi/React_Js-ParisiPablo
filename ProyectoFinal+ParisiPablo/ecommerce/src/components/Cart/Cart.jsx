import cart_empty from './assets/Pantalla_Triste.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ margin: '20px', padding: '5px', fontWeight: 'bolder' }}>Sin items en el carrito</h1>
                <img style={{ width: "250px", height: "170px", margin: '15px', padding: '5px' }} src={cart_empty} alt="cart_empty" />
                <p style={{ marginTop: '15px', padding: '2px', fontWeight: 'bolder', fontSize: 'x-large' }}>
                    Lo invitamos a ver más de nuestros productos
                </p>
                <p style={{ marginBottom: '15px', padding: '2px', fontWeight: 'bolder', fontSize: 'x-large' }}>
                    Haga click en el siguiente botón
                </p>
                <Link to='/' className='Option'>
                    <button style={{ width: '200px', height: '60px', margin: '10px', padding: '5px', textDecoration: 'none', color: 'black', fontWeight: 'bold', background: 'linear-gradient(to right, rgb(115, 226, 161) 0%, rgb(3, 175, 150) 100%)' }}>
                        Ver más Productos
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {cart.map(item => (
                <CartItem key={item.id} {...item} removeItem={removeItem} />
            ))}
            <h3 style={{ textAlign: 'center', margin: '10px', fontWeight: 'bolder' }}>
                Total: ${total}
            </h3>
            <div style={{ display: 'flex', margin: '20px' }}>
                <button onClick={() => clearCart()} className='Button' style={{ background: 'linear-gradient(to right, rgb(115, 226, 161) 0%, rgb(3, 175, 150) 100%)', color: 'black', fontWeight: 'bold', marginRight: '20px', textDecoration: 'none', padding: '10px', border: '2px solid black', width: '200px', height: '50px', borderRadius: '50px' }}>
                    Limpiar Carrito
                </button>
                <Link to='/checkout' className='Option' style={{ background: 'linear-gradient(to right, rgb(115, 226, 161) 0%, rgb(3, 175, 150) 100%)', display: 'flex', justifyContent: 'center', textDecoration: 'none', color: 'black', fontWeight: 'bold', border: '2px solid black', marginLeft: '20px', padding: '10px', borderRadius: '50px', width: '200px', height: '50px' }}>
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;
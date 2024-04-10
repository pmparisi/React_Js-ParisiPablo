import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement} disabled={quantity === 0}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={increment} disabled={quantity === stock}>+</button>
            </div>
            <div className='Add'>
                <button className='Button' onClick={() => onAdd(quantity)} disabled={quantity === 0}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
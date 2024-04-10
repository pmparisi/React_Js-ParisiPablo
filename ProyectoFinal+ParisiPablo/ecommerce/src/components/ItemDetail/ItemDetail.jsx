import './ItemDetail.css';
import { useContext, useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = {
            id,
            name,
            img,
            category,
            description,
            price,
            stock
        };
        addItem(item, quantity);
    };

    useEffect(() => {}, [id, name, img, category, description, price, stock]);

    return (
        <>
            <div style={{display:'flex', justifyContent:'center', margin: '15px', padding: '5px'}}>
                <article className='CardItem'>
                    <header className='Header'>
                        <h2 className='ItemHeader'>
                            {name}
                        </h2>
                    </header>
                    <picture>
                        <img src={img} alt={name} className='ItemImg'/>
                    </picture>
                    <section>
                        <p className='Info'>
                            Categoria: {category}
                        </p>
                        <p className='Info'>
                            Descripción: {description}
                        </p>
                        <p className='Info'>
                            Precio: {price}
                        </p>
                    </section>
                    <footer className='ItemFooter'>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className='Option' style={{ padding: '5px', margin: '10px', color: 'rgb(3, 175, 150)', textDecoration: 'none', justifyContent: 'center'}}>
                                    Terminar Compra
                                </Link>
                            ) :
                            (
                                <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}/>                            
                            )
                        }

                    </footer>
                </article>
            </div>
        </>
    );
};

export default ItemDetail;
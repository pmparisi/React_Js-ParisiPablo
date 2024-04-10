import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (
        <>
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="ItemImg"/>
                </picture>
                <section className="Info">
                    <p>
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <Link to={`/item/${id}`} className='Option' style={{ color: 'rgb(3, 175, 150)', textDecoration: 'none' }}>Ver detalle</Link>
                </footer>
            </article>
        </>
    );
};

export default Item;
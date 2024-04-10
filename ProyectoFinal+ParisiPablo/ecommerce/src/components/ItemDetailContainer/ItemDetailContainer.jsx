import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'Productos', itemId);

        getDoc(docRef)
            .then(snapshot => {
                if (snapshot.exists()) {
                    const productData = snapshot.data();
                    setProduct({ id: snapshot.id, ...productData });
                } else {
                    console.log('No se encontró el producto');
                }
            })
            .catch(error => {
                console.log('Error fetching product data:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    useEffect(() => {}, [product]);

    return (
        <div className="ItemDetailContainer">
            {loading ? (
                <p style={{display: 'flex', justifyContent: 'center', margin: '15px', padding: '5px', fontSize: 'x-large'}}>
                    Cargando detalle del producto...
                </p>
            ) : product ? (
                <ItemDetail {...product} />
            ) : (
                <p style={{display: 'flex', justifyContent: 'center', margin: '15px', padding: '5px', fontSize: 'x-large'}}>
                    No se encontró el producto
                </p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const collectionRef = categoryId
                ? query(collection(db, 'Productos'), where('category', '==', categoryId))
                : collection(db, 'Productos');

            getDocs(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc => {
                        const data = doc.data();
                        return { id: doc.id, ...data };
                    });
                    setProducts(productsAdapted);
                })
                .catch(error => {
                    console.log("Error fetching data:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchData();
    }, [categoryId]);

    return (
        <>
            <div className="d-flex justify-content-center" style={{marginTop:'15px', marginBottom: '10px', padding: '5px', fontWeight: 'bolder'}}>
                <h1>{greeting}</h1>
            </div>
            <div className="d-flex justify-content-center">
                {loading ? (
                    <div className="cargando" style={{display: 'flex', justifyContent: 'center', margin: '15px', padding: '5px', fontSize: 'x-large', fontWeight: 'bold'}}>
                        <p>Cargando productos...</p>
                    </div>    
                ) : (
                    <ItemList products={products} />
                )}
            </div>
        </>
    );
};

export default ItemListContainer;
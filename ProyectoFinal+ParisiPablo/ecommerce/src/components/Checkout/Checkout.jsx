import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, getDocs, query, where, Timestamp, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { writeBatch } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(db);
            const ids = cart.map(prod => prod.id);
            if (ids.length > 0) {
                const productosRef = collection(db, 'Productos');
                const productosAddedFromFirestore = await getDocs(query(productosRef, where('id', 'in', ids)));
                const { docs } = productosAddedFromFirestore;
                docs.forEach(doc => {
                    const dataDoc = doc.data();
                    const stockDb = dataDoc.stock;
                    const productAddedToCart = cart.find(prod => prod.id === doc.id);
                    const prodQuantity = productAddedToCart?.quantity;
                    if (stockDb >= prodQuantity) {
                        batch.update(doc.ref, { stock: stockDb - prodQuantity });
                    } else {
                        throw new Error(`El producto ${doc.id} está fuera de stock`);
                    }
                });
            } else {
                throw new Error("No hay productos en el carrito para procesar");
            }
            await batch.commit();
            const orderRef = collection(db, 'orders');
            const orderAdded = await addDoc(orderRef, objOrder);
            setOrderId(orderAdded.id);
            clearCart();
        } catch (error) {
            console.log("Error al crear la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1 style={{display: 'flex', justifyContent: 'center', margin: '15px', padding: '5px'}}>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return (
            <>
                <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '15px', padding: '5px'}}>El id de su orden es: </h1>
                <h2 style={{display: 'flex', justifyContent: 'center', marginBottom: '5px', padding: '5px'}}>{orderId}</h2>
            </>
        );
    }

    return (
        <div>
            <h1 style={{display: 'flex', justifyContent: 'center', margin: '15px', padding: '5px'}}>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;
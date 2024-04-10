import React, { createContext, useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let totalAmount = 0;
        let quantityTotal = 0;
        cart.forEach(item => {
            const itemPrice = parseFloat(item.price.replace(/\D/g, ''));
            const totalPrice = itemPrice * item.quantity;
            totalAmount += totalPrice;
            quantityTotal += item.quantity;
        });
        const formattedTotal = totalAmount.toLocaleString('es-ES', { minimumFractionDigits: 2 });
        setTotal(formattedTotal);
        setTotalQuantity(quantityTotal);
    }, [cart]);

    const addItem = async (item, quantity) => {
        if (isInCart(item.id)) {
            console.log('El producto ya está en el carrito');
            return; 
        }
        if (item.stock >= quantity) {
            const updatedStock = item.stock - quantity;
            await updateStockInDatabase(item.id, updatedStock);
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.log('No hay suficiente stock disponible para este producto');
        }
    };

    const removeItem = async (itemId) => {
        const removedItem = cart.find(prod => prod.id === itemId);
        if (!removedItem) {
            console.log('El producto no está en el carrito');
            return;
        }
        setCart(prevCart => prevCart.filter(prod => prod.id !== itemId));
        const updatedStock = removedItem.stock;
        await updateStockInDatabase(itemId, updatedStock);
    };

    const clearCart = async () => {
        cart.forEach(async item => {
            const updatedStock = item.stock;
            await updateStockInDatabase(item.id, updatedStock);
        });
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const updateStockInDatabase = async (productId, updatedStock) => {
        const productRef = doc(db, 'Productos', productId);
        try {
            await updateDoc(productRef, { stock: updatedStock });
            console.log(`Stock actualizado en la base de datos para el producto ${productId}: ${updatedStock}`);
        } catch (error) {
            console.log('Error al actualizar el stock en la base de datos:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
const CartItem = ({ id, name, price, quantity, removeItem }) => {
    const itemPrice = parseFloat(price.replace(/\D/g, ''));
    const subtotal = (itemPrice * quantity).toLocaleString('es-ES', { minimumFractionDigits: 2 });

    return (
        <div style={{display:"flex", flexWrap:'wrap', justifyContent:'space-evenly', padding:'2px', marginTop:'20px', marginBottom:'20px', border:'2px solid black', borderRadius:'50px', background: 'linear-gradient(to right, rgb(115, 226, 161) 0%, rgb(3, 175, 150) 100%)'}}>
            <p style={{width:'300px', textAlign:'center', margin: '5px'}}>{name}</p>
            <p style={{width:'150px', textAlign:'center', margin: '5px'}}>Cantidad: {quantity}</p>
            <p style={{width:'300px', textAlign:'center', margin: '5px'}}>Precio: ${price}</p>
            <p style={{width:'300px', textAlign:'center', margin: '5px'}}>Subtotal: ${subtotal}</p>
            <button onClick={() => removeItem(id)} style={{width: '35px', height: '35px', padding: '2px' , margin: '5px', color: 'rgb(250,20,20)', fontWeight: 'bold'}}>X</button>
        </div>
    );
};

export default CartItem;
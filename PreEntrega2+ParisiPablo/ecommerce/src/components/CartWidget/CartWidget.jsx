import cart from "./assets/cart1.png"

const CartWidget = () => {
    return (
        <>
            <div style={{marginTop:'10px', marginBottom:'5px'}}>
                <img style={{width:"50px", height:"50px", color:'white'}} src={cart} alt="cart-widget" />
            </div>
            <div style={{marginTop:'5px', marginBottom:'10px', color:'white'}}>
                <p style={{color: 'white'}}>0</p>
            </div>
        </>
    );
}

export default CartWidget;
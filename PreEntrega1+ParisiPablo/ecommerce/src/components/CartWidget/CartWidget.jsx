import cart from "./assets/cart.png"

const CartWidget = () => {
    return (
        <>
            <div className="d-flex justify-content-center" style={{marginTop:'10px', marginBottom:'5px'}}>
                <img style={{width:"50px", height:"50px"}} src={cart} alt="cart-widget" />
            </div>
            <div className="d-flex justify-content-center" style={{marginTop:'5px', marginBottom:'10px'}}>
                <p>0</p>
            </div>
        </>
    );
}

export default CartWidget;
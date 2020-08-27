import React from 'react';
import './Cart.css'

const Cart = (props) => {
   //console.log(props.cart)
    const cart = props.cart
    const totalPrice = cart.reduce( (total, course) => total + course.price, 0)
    const tax = (totalPrice/10)
    const grandTotal = (totalPrice + tax)

    return (
        <div className="cart mt-3">
            <h2 className="summary"><i>Summary</i></h2>
            <h3>Course Items: {cart.length} </h3>
            <h3>Course Price: ${totalPrice} </h3>
            <h4>Tax + Vat: ${tax} </h4>
            <h3 className="totalprice">TotalPrice:$ {grandTotal}</h3>
            <button className="cart-button">CheckOut</button>
        </div>
    );
};

export default Cart;
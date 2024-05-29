import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, handelClearCart}) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
       if(product.quantity === 0){
        product.quantity = 1;
       }
        total = total + product.price* product.quantity;
        totalShipping = totalShipping+product.shipping;
        quantity = quantity + product.quantity  
    }
    const tax = total*7/100
    const grandTotal = total+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Total Cart :{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:${tax}</p>
            <h2>Grand Total:${grandTotal.toFixed(2)}</h2>
            <button onClick={handelClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon ={faTrashAlt}/>
            </button>
        </div>
    );
};

export default Cart;
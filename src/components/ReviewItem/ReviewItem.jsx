import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({product, handelRemoveCart}) => {
    const {id, img, price, name, quantity} = product
    return (
        <div className='review-item'>
            <img src= {img} alt="" />
            <div className='review-details'>
                <p className='product-titel'>{name}</p>
                <p>Price <span className='orange-color'>${price}</span></p>
                <p>Quantity: <span className='orange-color'>{quantity}</span></p>
            </div>
            <button onClick={()=>handelRemoveCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon= {faTrashAlt}/>
             </button>
        </div>
    );
};

export default ReviewItem;
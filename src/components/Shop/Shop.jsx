import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart, setCart]=useState([]);
        useEffect(()=>{
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        }, [])
        const handelAddToCart = (product) => {
            const newCart = [...cart, product];
            setCart(newCart);
        }
    
    return (
        <div className='shop-container'>
         <div className='product-container'>
            {
                products.map(product => <Product
                key={product.id}
                product = {product}
                handelAddToCart = {handelAddToCart}
                ></Product>)
            }
            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Total Cart : {cart.length}</p>
            </div>

        </div>
    );
};

export default Shop;
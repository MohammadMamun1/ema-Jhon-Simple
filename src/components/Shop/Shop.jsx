import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart, setCart]=useState([]);
        useEffect(()=>{
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        }, [])
        useEffect(()=>{
            const storedCart = getShoppingCart();
            const savedCart =[];
            // step-1 get it 
            for(const id in storedCart){
                // step-2 set product by using id
                const addededProduct = products.find(product => product.id === id)
                // step-3 get quantaty of the product
                if(addededProduct){
                    const quantity =storedCart[id]
                addededProduct.quantity = quantity;
                // step-4 add the addeded product to the saveCart
                savedCart.push(addededProduct);
                }
            }
            setCart(savedCart);
        },[products])
        const handelAddToCart = (product) => {
            const newCart = [...cart, product];
            setCart(newCart);
            addToDb(product.id)
        }
        const handelClearCart = () =>{
            setCart([]);
            deleteShoppingCart();
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
                <Cart 
                cart = {cart}
                handelClearCart={handelClearCart}
                >
                    <Link to="/order">
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;
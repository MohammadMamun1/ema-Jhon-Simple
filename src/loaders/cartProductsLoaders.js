import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoaders = async () => {
    const loadedProducts = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const products = await loadedProducts.json();
    
    // if cart data is in database, you have to use async awit//

    const storedCart = getShoppingCart();
        const savedCart = [];
        for( const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }

    return savedCart;
}
export default cartProductLoaders
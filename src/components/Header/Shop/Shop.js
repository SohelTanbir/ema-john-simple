import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products]= useState(first10);
    const [cart,setcart] = useState([])
    const handlerAddProduct =(product)=>{
        const newcart = [...cart, product];
        setcart(newcart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Product List</h2>
                <ul>
                    {
                        products.map(pd =><Product Product={pd} handlerAddProduct={handlerAddProduct}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
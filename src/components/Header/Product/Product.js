import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
   const {img, name,seller,price,stock} = props.Product;
    return (
        <div className="products-container">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <p><small>By: {seller}</small></p>
                <h3>${price}</h3>
                <p>Only {stock} left in stock, Order-soon</p>
                <button className="cart-btn" onClick={()=>props.handlerAddProduct(props.Product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>

    );
};

export default Product;
import React from 'react';
import  {connect} from 'react-redux';
import {removeFromCart} from '../../actions/pizzaActions';

const CartItem = ({cart, removeFromCart}) => {
    const{name,description,price,image} = cart;
    return(
        <div className="cart-wrapper">
            <div className="cart-image hvr-buzz">
                <img src={image} alt=""/>
            </div>
            <div className="cart-name">{name}</div>
            <div className="cart-description">{description}</div>
            <div className="cart-price">{price}</div>
            <button onClick= {() => removeFromCart(cart)} className="cart-remove statham-button hvr-pulse">X</button>
        </div>
    )
};

export default connect(null, {removeFromCart})(CartItem);
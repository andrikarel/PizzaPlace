import React from 'react';
import {Link} from 'react-router-dom';

const CartItem = ({cart}) => {
    const{id,name,description,price,image} = cart;
    return(
        <Link to={`/menu/${id}`}>
            <div className="cart-wrapper">
                <div className="cart-image hvr-buzz">
                    <img src={image} alt=""/>
                </div>
                <div className="cart-name">{name}</div>
                <div className="cart-description">{description}</div>
                <div className="cart-price">{price}</div>
                <button className="cart-remove statham-button hvr-pulse">X</button>
            </div>
        </Link>

    )
};

export default CartItem;
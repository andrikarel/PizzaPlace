import React from 'react';
import {Link} from 'react-router-dom';

const CartItem = ({cart}) => {
    const{id,name,description,price,image} = cart;
    return(
        <Link to={`/menu/${id}`}>
            <div className="pizza-wrapper hvr-grow">
                <div className="pizza-image hvr-buzz">
                    <img src={image} alt=""/>
                </div>
                <div className="pizza-name">{name}</div>
                <div className="pizza-description">{description}</div>
                <div className="pizza-price">{price}</div>
            </div>
        </Link>

    )
};

export default CartItem;
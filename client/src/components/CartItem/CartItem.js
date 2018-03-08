import React from 'react';
import  {connect} from 'react-redux';
import {removeFromCart} from '../../actions/pizzaActions';

class CartItem extends React.Component {
    render() {
        const {cart, removeFromCart} = this.props;
        const{name,description,price,image,type,offer,validFor,pizzas} = cart;
        if(type === 'pizza') {
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
        }else {
            return(
                <div className="cart-wrapper">
                    <div className="cart-image hvr-buzz">
                    </div>
                    <div className="cart-name">OFFER</div>
                    <div className="cart-description">{offer}, valid for {validFor}
                        {pizzas.map((p,i) => <b key={i}><br/> - {p}</b>)}
                    </div>
                    <div className="cart-price">{price}</div>
                    <button onClick= {() => removeFromCart(cart)} className="cart-remove statham-button hvr-pulse">X</button>
                </div>
            )
        }
    }
};
export default connect(null, {removeFromCart})(CartItem);
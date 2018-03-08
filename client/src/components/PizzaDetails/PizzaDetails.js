import React from 'react';
import  {connect} from 'react-redux';
import  {PropTypes} from 'prop-types';
import toastr from 'toastr';

import {getPizzaDetails,addToCart,saveCart} from '../../actions/pizzaActions'



class PizzaDetails extends React.Component {
    componentDidMount() {
        const {getPizzaDetails} = this.props;
        getPizzaDetails(this.props.match.params.id);
    }
    addPizzaToCart(pizza) {
        const {addToCart,saveCart,cart} = this.props;
        pizza.type = 'pizza';
        addToCart(pizza);
        saveCart(cart);
        toastr.options = {
            timeOut : 1000,
            extendedTimeOut : 1000,
            tapToDismiss : true,
            debug : false,
            fadeOut: 1000,
            positionClass : 'toast-top-left'
        };        
        toastr.success('Pizza added to cart!', 'Success!');
    }
    render() {
        const {pizza} = this.props;
        if(pizza.length != 0) {
            return(
                <div className="details-wrapper">
                    <div className="details-image hvr-buzz">
                        <img src={pizza[0].image} alt=""/>
                    </div>
                    <div className="details-name"><u>{pizza[0].name}</u></div>
                    <div className="details-description">{pizza[0].description}</div>
                    <div className="details-price">Price: {pizza[0].price}</div>
                    <button className="details-button statham-button hvr-pulse" onClick={() => this.addPizzaToCart(pizza[0])}>Add to cart</button>
                </div>
            )
        }else{
            return(<p></p>)
        }
    }
};
PizzaDetails.propTypes = {
    id:PropTypes.number
};
const mapStateToProps = ({pizza,cart}) => {
    return {pizza,cart}
}
export default connect(mapStateToProps, {getPizzaDetails, addToCart,saveCart})(PizzaDetails);
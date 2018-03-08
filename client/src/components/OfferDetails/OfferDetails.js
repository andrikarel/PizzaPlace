import React from 'react';
import  {connect} from 'react-redux';
import toastr from 'toastr';

import  {PropTypes} from 'prop-types';

import {getOfferDetails,getAllPizzas,addToCart,saveCart} from '../../actions/pizzaActions'




class OfferDetails extends React.Component {
    componentDidMount() {
        const {getOfferDetails,getAllPizzas} = this.props;
        getOfferDetails(this.props.match.params.id);
        getAllPizzas();
    }
    displayOffer(id,pizza) {
        if(id === 1 || id === 2) {
            return(
                <div>
                    <select className='pizza-selected'>
                        {pizza.map(p=><option key={p.id} value ={p.name}>{`${p.name} - ${p.price}`}</option>)}
                    </select>
                    <select className='pizza-selected'>
                        {pizza.map(p=><option key={p.id} value ={p.name}>{`${p.name} - ${p.price}`}</option>)}
                    </select>
                </div>
            );
        }else {
            return(
                <select className='pizza-selected'>
                    {pizza.map(p=><option key={p.id} value ={p.name}>{`${p.name} - ${p.price}`}</option>)}
                </select>
            );
        }
    }
    addOfferToCart(offer) {
        const {addToCart,saveCart,cart} = this.props;
        offer.type = 'offer';
        offer.pizzas = [];
        $('.pizza-selected').map(function() {
            offer.pizzas.push($(this).val());
        })
        addToCart(offer);
        saveCart(cart);
        toastr.options = {
            timeOut : 1000,
            extendedTimeOut : 1000,
            tapToDismiss : true,
            debug : false,
            fadeOut: 1000,
            positionClass : 'toast-top-left'
        };        
        toastr.success('Offer added to cart! now GTFO', 'Success!');
    }
    
    render() {
        const {offer,pizza} = this.props;
        if(offer.length != 0) {
            return(
                <div className="details-wrapper">
                    
                    <div className="details-name"><u>{offer[0].offer}</u></div>
                    <div className="details-description">This offer is valid for {offer[0].validFor}</div>
                    <div className="details-price">Price: {offer[0].price}</div>
                    <div>Choose a pizza for {offer[0].validFor}
                        <div>
                            <div>{this.displayOffer(offer[0].id,pizza)}</div>
                        </div>
                    </div>
                    <button className="statham-button" onClick={() => this.addOfferToCart(offer[0])}>Add to cart</button>
                </div>
            )
        }else {
            return(<p>helpMe</p>);
        }
  
    }
};
OfferDetails.propTypes = {
    id:PropTypes.number
};
const mapStateToProps = ({offer,pizza}) => {
    return {offer,pizza}
}

export default connect(mapStateToProps, {getOfferDetails,getAllPizzas,addToCart,saveCart})(OfferDetails);


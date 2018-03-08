import React from 'react';
import  {connect} from 'react-redux';

import  {PropTypes} from 'prop-types';

import {getOfferDetails,getAllPizzas} from '../../actions/pizzaActions'




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
                    <select>
                        {pizza.map(p=><option value ={p.id}>{`${p.name} - ${p.price}`}</option>)}
                    </select>
                    <select>
                        {pizza.map(p=><option value ={p.id}>{`${p.name} - ${p.price}`}</option>)}
                    </select>
                    
                </div>
            );
        }else {
            return(
                <select>
                    {pizza.map(p=><option value ={p.id}>{`${p.name} - ${p.price}`}</option>)}
                </select>
            );
        }
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
                    <button>Add to cart</button>
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

export default connect(mapStateToProps, {getOfferDetails,getAllPizzas})(OfferDetails);


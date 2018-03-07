import React from 'react';
import  {connect} from 'react-redux';
import  {PropTypes} from 'prop-types';

import {getPizzaDetails} from '../../actions/pizzaActions'



class PizzaDetails extends React.Component {
    componentDidMount() {
        const {getPizzaDetails} = this.props;
        getPizzaDetails(this.props.match.params.id);
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
const mapStateToProps = ({pizza}) => {
    return {pizza}
}
export default connect(mapStateToProps, {getPizzaDetails})(PizzaDetails);
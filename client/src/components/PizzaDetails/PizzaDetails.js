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
                <div className="pizza-wrapper hvr-grow">
                    <div className="pizza-image hvr-pop">
                        <img src={pizza[0].image} alt=""/>
                    </div>
                    <div className="pizza-name">{pizza[0].name}</div>
                    <div className="pizza-description">{pizza[0].description}</div>
                    <div className="pizza-price">{pizza[0].price}</div>
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
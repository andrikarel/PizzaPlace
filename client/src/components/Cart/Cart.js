import React from 'react';
import  {connect} from 'react-redux';
import {getCart, loadCart} from '../../actions/pizzaActions'
import CartItem from '../../components/CartItem/CartItem';



class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            firstload: true
        }
    }
    componentDidMount() {
        const {getCart} = this.props;
        getCart();
    }
    render() {
        const {cart} = this.props;
        return (
            <div>
                <h1 className="pageTitle">CART</h1>
                {cart.map((c, index)=><CartItem key={index} cart={c}/>)}
            </div>
        )
    }
};
const mapStateToProps = ({cart}) => {
    return {cart}
}
export default connect(mapStateToProps, {getCart, loadCart})(Cart);
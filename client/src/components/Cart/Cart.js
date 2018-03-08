import React from 'react';
import  {connect} from 'react-redux';
import {getCart, loadCart} from '../../actions/pizzaActions'
import CartItem from '../../components/CartItem/CartItem';
import {Link} from 'react-router-dom';



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
    calculateTotalPrice(cart) {
        var total = 0;
        for(var i = 0; i < cart.length;i++) {
            total+=cart[i].price;
        }
        return total;
    }
    render() {
        const {cart} = this.props;
        return (
            <div>
                <h1 className="pageTitle">CART</h1>
                {cart.map((c, index)=><CartItem key={index} cart={c}/>)}
                <Link to='/checkout/'>
                    <button className='statham-button'>Checkout</button>
                </Link>
                <h2 className="pageTitle">TOTAL: {this.calculateTotalPrice(cart)}</h2>
                
            </div>
        )
    }
};
const mapStateToProps = ({cart}) => {
    return {cart}
}
export default connect(mapStateToProps, {getCart, loadCart})(Cart);
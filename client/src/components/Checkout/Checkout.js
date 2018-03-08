import React from 'react';
import  {connect} from 'react-redux';
import {getCart, addOrder,clearCart} from '../../actions/pizzaActions';
import CartItem from '../../components/CartItem/CartItem';
import {Link} from 'react-router-dom';
import toastr from 'toastr';

class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            pickupDone: false,
            infoDone: false,
            deliveryMethod:'',
            name:'',
            address:'',
            city:'',
            postalcode:'',
            telephone:''
        }
    }
    setDelivery(method) {
        this.setState({deliveryMethod:method});
        this.setState({pickupDone:true});
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
    submitInfo(evt) {
        evt.preventDefault();
        console.log(this.state);
        this.setState({infoDone: true});
    }
    calculateTotalPrice(cart) {
        var total = 0;
        for(var i = 0; i < cart.length;i++) {
            total+=cart[i].price;
        }
        return total;
    }
    confirmOrder() {
        const {addOrder, clearCart} = this.props;
        addOrder({
            telephone: this.state.telephone,
            name: this.state.name,
            city: this.state.city,
            address: this.state.address,
            postalcode: this.state.postalcode,
            cart: this.props.cart
        }, this.state.telephone);
        toastr.options = {
            timeOut : 3000,
            extendedTimeOut : 3000,
            tapToDismiss : true,
            debug : false,
            fadeOut: 3000,
            positionClass : 'toast-top-center'
        };   
        toastr.success('Your order is being processed! Now GTFO', 'Success!');
        clearCart();
    }
    render() {
        const {pickupDone,deliveryMethod, infoDone} = this.state;
        const {name,telephone,address, city, postalcode} = this.state;
        const {cart} = this.props;
        if(!pickupDone) {
        return (
            <div className="checkout-wrapper">
                <h1 className="pageTitle">Pickup or transported ?</h1>
                <button className='statham-button checkout-button' onClick={() => this.setDelivery('pickup')}>Pickup</button>
                <button className='statham-button checkout-button' onClick={() => this.setDelivery('transported')}>I need a transporter</button>
            </div>
        )
        }else {
            if(!infoDone) {
                if(deliveryMethod === 'pickup') {
                    return(
                        <div className="checkout-wrapper">
                            <h1 className='pageTitle'>Pickup</h1>
                            <div className="checkout-input-wrapper">
                                <form onSubmit={(evt) => this.submitInfo(evt)}>
                                    <label className="checkout-input-labels">Name</label>
                                    <input className="checkout-input-inputs" type="text" name="name" value={name} onChange={(evt) => this.handleChange(evt)}/>
                                    <label className="checkout-input-labels">Telephone</label>
                                    <input className="checkout-input-inputs" type="text" name="telephone" value={telephone} onChange={(evt) => this.handleChange(evt)}/>
                                    <input className="statham-button" type="submit" value="Submit"/>       
                                </form>
                            </div>
                        </div>
                    )
                }else {
                    return(
                        <div className="checkout-wrapper">
                            <h1 className='pageTitle'>Transported</h1>
                            <div className="checkout-input-wrapper">
                                <form onSubmit={(evt) => this.submitInfo(evt)}>
                                    <label className="checkout-input-labels">Name</label>
                                    <input className="checkout-input-inputs" type="text" name="name" value={name} onChange={(evt) => this.handleChange(evt)}/>
                                    <label className="checkout-input-labels">Address</label>
                                    <input className="checkout-input-inputs" type="text" name="address" value={address} onChange={(evt) => this.handleChange(evt)}/>
                                    <label className='checkout-input-labels'>City</label>
                                    <input className="checkout-input-inputs" type="text" name="city" value={city} onChange={(evt) => this.handleChange(evt)}/>
                                    <label className='checkout-input-labels'>Telephone</label>
                                    <input className="checkout-input-inputs" type="text" name="telephone" value={telephone} onChange={(evt) => this.handleChange(evt)} />
                                    <label className='checkout-input-labels'>PostalCode</label>
                                    <input className="checkout-input-inputs" type="text" name="postalcode" value={postalcode} onChange={(evt) => this.handleChange(evt)} />
                                    <input className="statham-button" type="submit" value="Submit"/>
                                </form>
                            </div>
                        </div>
                    )
                }
            }else{
                if(deliveryMethod === 'pickup') {
                    return(
                        <div className="checkout-wrapper">
                            <h1 className="pageTitle">ORDER REVIEW</h1>
                            <div className="checkout-review-wrapper">
                                <p className="checkout-review-text"><b>NAME:</b></p><p className="checkout-review-text">{name}</p>
                                <p className="checkout-review-text"><b>TELEPHONE:</b></p><p className="checkout-review-text"> {telephone}</p>
                                {cart.map((c, index)=><CartItem key={index} cart={c}/>)}
                                <h2>TOTAL: {this.calculateTotalPrice(cart)}</h2>
                                <Link to="/menu"><button className="statham-button" onClick={() => this.confirmOrder()}>Confirm</button></Link>
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div className="checkout-wrapper">
                            <h1 className="pageTitle">ORDER REVIEW</h1>
                            <div className="checkout-review-wrapper">
                                <p className="checkout-review-text"><b>NAME:</b></p><p className="checkout-review-text">{name}</p>
                                <p className="checkout-review-text"><b>ADDRESS:</b></p><p className="checkout-review-text"> {address}</p>
                                <p className="checkout-review-text"><b>CITY:</b></p><p className="checkout-review-text"> {city}</p>
                                <p className="checkout-review-text"><b>POSTAL CODE:</b></p><p className="checkout-review-text"> {postalcode}</p>
                                <p className="checkout-review-text"><b>TELEPHONE:</b></p><p className="checkout-review-text"> {telephone}</p>
                                {cart.map((c, index)=><CartItem key={index} cart={c}/>)}
                                <h2>TOTAL: {this.calculateTotalPrice(cart)}</h2>
                                <Link to="/menu"><button className="statham-button" onClick={() => this.confirmOrder()}>Confirm</button></Link>
                            </div>
                        </div>
                    )
                }
            }
        }
    }
};
const mapStateToProps = ({cart}) => {
    return {cart}
}
export default connect(mapStateToProps, {getCart, addOrder,clearCart})(Checkout);
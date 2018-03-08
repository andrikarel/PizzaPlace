import React from 'react';
import  {connect} from 'react-redux';
import {getCart} from '../../actions/pizzaActions';
import CartItem from '../../components/CartItem/CartItem';

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
    render() {
        const {pickupDone,deliveryMethod, infoDone} = this.state;
        const {name,telephone,address, city, postalcode} = this.state;
        const {cart} = this.props;
        if(!pickupDone) {
        return (
            <div>
                <h1 className="pageTitle">Pickup or transported ?</h1>
                <button className='statham-button' onClick={() => this.setDelivery('pickup')}>Pickup</button>
                <button className='statham-button' onClick={() => this.setDelivery('transported')}>I need a transporter</button>
            </div>
        )
        }else {
            if(!infoDone) {
                if(deliveryMethod === 'pickup') {
                    return(
                        <div>
                            <h1 className='pageTitle'>Pickup</h1>
                            <form onSubmit={(evt) => this.submitInfo(evt)}>
                                <label className='pageTitle'>Name</label>
                                <input type="text" name="name" value={name} onChange={(evt) => this.handleChange(evt)}/>
                                <label className='pageTitle'>Telephone</label>
                                <input type="text" name="telephone" value={telephone} onChange={(evt) => this.handleChange(evt)}/>
                                <input className="statham-button" type="submit" value="Submit"/>       
                            </form>
                        </div>
                    )
                }else {
                    return(
                        <div>
                            <h1 className='pageTitle'>Transported</h1>
                            <form onSubmit={(evt) => this.submitInfo(evt)}>
                                <label className='pageTitle'>Name</label>
                                <input type="text" name="name" value={name} onChange={(evt) => this.handleChange(evt)}/>
                                <label className='pageTitle'>Address</label>
                                <input type="text" name="address" value={address} onChange={(evt) => this.handleChange(evt)}/>
                                <label className='pageTitle'>City</label>
                                <input type="text" name="city" value={city} onChange={(evt) => this.handleChange(evt)}/>
                                <label className='pageTitle'>Telephone</label>
                                <input type="text" name="telephone" value={telephone} onChange={(evt) => this.handleChange(evt)} />
                                <label className='pageTitle'>PostalCode</label>
                                <input type="text" name="postalcode" value={postalcode} onChange={(evt) => this.handleChange(evt)} />
                                <input className="statham-button" type="submit" value="Submit"/>
                            </form>
                        </div>
                    )
                }
            }else{
                return(
                    <div className="details-wrapper">
                        <h1 className="pageTitle">ORDER REVIEW</h1>
                        <p>Name: {name}</p>
                        <p>Address: {address}</p>
                        <p>City: {city}</p>
                        <p>Postal code: {postalcode}</p>
                        <p>Telephone: {telephone}</p>
                        {cart.map((c, index)=><CartItem key={index} cart={c}/>)}
                        <h2>TOTAL: {this.calculateTotalPrice(cart)}</h2>
                    </div>
                )
            }
        }
    }
};
const mapStateToProps = ({cart}) => {
    return {cart}
}
export default connect(mapStateToProps, {getCart})(Checkout);
import React from 'react';

class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            pickupDone: false,
            deliveryMethod:''
        }
    }
    setDelivery(method) {
        this.setState({deliveryMethod:method});
        this.setState({pickupDone:true});
    }
    render() {
        const {pickupDone,deliveryMethod} = this.state;
        if(!pickupDone) {
        return (
            <div>
                <h1 className="pageTitle">Pickup or transported ?</h1>
                <button className='statham-button' onClick={() => this.setDelivery('pickup')}>Pickup</button>
                <button className='statham-button' onClick={() => this.setDelivery('transported')}>I need a transporter</button>
            </div>
        )
        }else {
            if(deliveryMethod === 'pickup') {
                return(
                    <div>
                        <h1 className='pageTitle'>Pickup</h1>
                        <form>
                                <label className='pageTitle'>Name</label>
                                <input type="text" name="name"/>
                                <label className='pageTitle'>Telephone</label>
                                <input type="text" name="telephone"/>
                                
                        </form>
                    </div>


                )
            }else {
                return(
                    <div>
                        <h1 className='pageTitle'>Transported</h1>
                        <form>
                            <label className='pageTitle'>Name</label>
                            <input type="text" name="name"/>
                            <label className='pageTitle'>Address</label>
                            <input type="text" name="address"/>
                            <label className='pageTitle'>City</label>
                            <input type="text" name="city" />
                            <label className='pageTitle'>Telephone</label>
                            <input type="text" name="telephone" />
                            <label className='pageTitle'>PostalCode</label>
                            <input type="text" name="postalcode" />
                        </form>

                    </div>
                )
            }
        }
    }
};

export default Checkout;
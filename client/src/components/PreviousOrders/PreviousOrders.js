import React from 'react';
import  {connect} from 'react-redux';
import {getOrders, addOrder} from '../../actions/pizzaActions';
import {Link} from 'react-router-dom';
import toastr from 'toastr';

class PreviousOrders extends React.Component {
    componentDidMount() {
        const {getOrders} = this.props;
        getOrders(this.props.match.params.telephone);
    }
    confirmOrder(order) {
        const {addOrder} = this.props;
        addOrder(order, order.telephone);
        toastr.options = {
            timeOut : 3000,
            extendedTimeOut : 3000,
            tapToDismiss : true,
            debug : false,
            fadeOut: 3000,
            positionClass : 'toast-top-center'
        };        
        toastr.success('Your order is being processed! Now GTFO', 'Success!');
    }
    render() {
        const {order} = this.props;
        if(order != []) {
            return (
                <div>
                    <h1 className="pageTitle">ORDERS</h1>
                    {order.map((x,i) => 
                        <div key={i} className="cart-wrapper">
                            <div className="cart-image hvr-buzz">
                            </div>
                            <div className="cart-name">{x.name}</div>
                            <div className="order-description">
                                {x.cart.map((p,i) => <b key={i}>{(p.type == 'pizza' ? p.name : p.offer)} </b>)}
                            </div>
                            <Link to="/menu"><button onClick= {() => this.confirmOrder(x)} className="cart-remove statham-button hvr-pulse">ReOrder</button></Link>
                        </div>  
                    )}
                </div>            
            )
        }else {
            return(
                <p>helpMe</p>
            )
        }
    }
};
const mapStateToProps = ({order}) => {
    return {order}
}
export default connect(mapStateToProps,{getOrders,addOrder})(PreviousOrders);
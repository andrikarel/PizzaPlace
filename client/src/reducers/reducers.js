import {combineReducers} from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';
import offer from './offerReducer';
import cart from './cartReducer';

export default combineReducers({
    pizza, order, offer, cart
})
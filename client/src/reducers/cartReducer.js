import {LOAD_CART, SAVE_CART, ADD_TO_CART,CLEAR_CART, GET_CART} from '../constants/cartConstants';

const cartReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_CART: 
            console.log(action.payload);
            return action.payload;
        case SAVE_CART: return state;
        case ADD_TO_CART: 
            console.log('state:', state);
            console.log('payload:', action.payload);
            state.push(action.payload);
            return state;
        case CLEAR_CART: return [];
        case GET_CART: 
            console.log('state:', state);
            return state;
        default: return state;
    }
};

export default cartReducer;
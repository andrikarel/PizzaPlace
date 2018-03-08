import {LOAD_CART, SAVE_CART, ADD_TO_CART,CLEAR_CART, GET_CART, REMOVE_FROM_CART} from '../constants/cartConstants';

const cartReducer = (state = [], action) => {
    console.log('reduce', action.type);
    switch(action.type) {
        case LOAD_CART: 
            return action.payload;
        case SAVE_CART: return state;
        case ADD_TO_CART: 
            state.push(action.payload);
            return state;
        case CLEAR_CART: return [];
        case GET_CART:
            return state;
        case REMOVE_FROM_CART:
            state.splice(state.indexOf(action.payload),1);
            return state.map(x => Object.assign({}, x));
        default: return state;
    }
};

export default cartReducer;